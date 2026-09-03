/* =========================================================
   GCI India — site script
   Vanilla JS only. Handles: navbar scroll state, active nav
   highlighting, scroll-to-top button, and lightweight
   scroll-reveal for section headers.
   ========================================================= */

(function () {
  "use strict";

  // ---- Navbar background state on scroll ----
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 8) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
    toggleScrollTopBtn();
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---- Active nav link based on current page ----
  (function setActiveNav() {
    var path = window.location.pathname.split("/").pop() || "index.html";
    var links = document.querySelectorAll(".navbar-nav .nav-link");
    links.forEach(function (link) {
      var href = link.getAttribute("href");
      if (!href) return;
      var hrefFile = href.split("/").pop();
      if (hrefFile === path || (path === "" && hrefFile === "index.html")) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      }
    });
  })();

  // ---- Collapse mobile navbar after a link is tapped ----
  (function collapseNavOnLinkClick() {
    var navCollapse = document.getElementById("mainNav");
    if (!navCollapse) return;
    var navLinks = navCollapse.querySelectorAll(".nav-link, .btn");
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        if (navCollapse.classList.contains("show") && window.bootstrap) {
          var bsCollapse = window.bootstrap.Collapse.getOrCreateInstance(navCollapse);
          bsCollapse.hide();
        }
      });
    });
  })();

  // ---- Scroll-to-top button ----
  var scrollTopBtn = document.getElementById("scrollTopBtn");
  function toggleScrollTopBtn() {
    if (!scrollTopBtn) return;
    if (window.scrollY > 480) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  }
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ---- Lightweight scroll reveal (IntersectionObserver) ----
  (function scrollReveal() {
    var items = document.querySelectorAll("[data-reveal]");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    items.forEach(function (el) { observer.observe(el); });
  })();

  // ---- Current year in footer ----
  var yearEls = document.querySelectorAll("[data-current-year]");
  yearEls.forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
