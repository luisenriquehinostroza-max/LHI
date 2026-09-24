(function () {
  var header = document.getElementById("topbar");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  var label = toggle.querySelector(".nav-toggle-label");
  var mobileQuery = window.matchMedia("(max-width: 760px)");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var vine = document.querySelector("[data-vine]");
  var perfect = document.getElementById("plate-perfect");

  function onScroll() {
    header.classList.toggle("is-stuck", window.scrollY > 12);
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  function setNavMode() {
    var open = nav.classList.contains("is-open");
    if (!mobileQuery.matches) {
      nav.classList.remove("is-open");
      nav.inert = false;
      toggle.setAttribute("aria-expanded", "false");
      label.textContent = "Menu";
      document.body.classList.remove("nav-open");
      return;
    }
    nav.inert = !open;
  }

  function closeNav() {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    label.textContent = "Menu";
    document.body.classList.remove("nav-open");
    setNavMode();
  }

  function openNav() {
    nav.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    label.textContent = "Close";
    document.body.classList.add("nav-open");
    setNavMode();
    var first = nav.querySelector("a");
    if (first) first.focus();
  }

  toggle.addEventListener("click", function () {
    if (nav.classList.contains("is-open")) {
      closeNav();
      toggle.focus();
    } else {
      openNav();
    }
  });

  nav.addEventListener("click", function (event) {
    if (event.target.closest("a")) closeNav();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      closeNav();
      toggle.focus();
    }
  });

  mobileQuery.addEventListener("change", setNavMode);
  setNavMode();

  var links = Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]'));
  var targets = links.map(function (link) {
    return document.querySelector(link.getAttribute("href"));
  });

  function spy() {
    var mark = window.scrollY + Math.min(window.innerHeight * 0.28, 220);
    var current = null;
    targets.forEach(function (target) {
      if (!target) return;
      var top = target.getBoundingClientRect().top + window.scrollY;
      if (top <= mark) current = target.id;
    });
    links.forEach(function (link) {
      var on = current && link.getAttribute("href") === "#" + current;
      if (on) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  }

  spy();
  window.addEventListener("scroll", spy, { passive: true });

  if (reduce || !vine) return;

  var layers = Array.prototype.slice.call(vine.querySelectorAll("[data-rot]"));
  var scale = vine.querySelector(".hero-scale");
  if (!layers.length || !scale) return;

  var pending = layers.length + 1;
  function ready() {
    pending -= 1;
    if (pending === 0) play();
  }

  function failed() {
    layers.forEach(function (layer) { layer.style.display = "none"; });
  }

  if (perfect.complete && perfect.naturalWidth) ready();
  else {
    perfect.addEventListener("load", ready, { once: true });
    perfect.addEventListener("error", failed, { once: true });
  }

  layers.forEach(function (layer) {
    if (layer.complete && layer.naturalWidth) ready();
    else {
      layer.addEventListener("load", ready, { once: true });
      layer.addEventListener("error", failed, { once: true });
    }
  });

  function play() {
    scale.classList.add("is-push");
    layers.forEach(function (layer, index) {
      layer.animate(
        [{ opacity: 0 }, { opacity: 1 }],
        {
          duration: 1100,
          delay: 1000 + index * 1050,
          easing: "cubic-bezier(0.4, 0, 0.2, 1)",
          fill: "forwards"
        }
      );
    });
    window.setTimeout(function () {
      perfect.alt = "A cluster of grapes on the vine, one berry dulled, browned, and split.";
    }, 1000 + layers.length * 1050 + 1100);
  }
})();
