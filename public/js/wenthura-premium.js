(function () {
  "use strict";

  /* ─── Lucide icons init ─────────────────────────────── */
  function initIcons(root) {
    if (typeof lucide !== "undefined") {
      lucide.createIcons({ nodes: root || document });
    }
  }
  window.initIcons = initIcons;

  var WA_PHONE = "94778282186";
  var WA_TEXT = "Hi Wenthura, I'd like to learn more.";
  window.openWhatsApp = function () {
    window.open(
      "https://wa.me/" + WA_PHONE + "?text=" + encodeURIComponent(WA_TEXT),
      "_blank",
      "noopener"
    );
  };

  /* ─── Nav scroll + smart hide-on-scroll (mobile) ────── */
  var nav = document.getElementById("mainNav") || document.querySelector("nav");
  var lastScrollY = 0;
  var hideTimer = null;
  var isMobileNav = function () { return window.innerWidth < 768; };

  function onScroll() {
    var y = window.scrollY;
    if (!nav) return;

    nav.classList.toggle("nav-scrolled", y > 20);

    if (isMobileNav() && !document.body.classList.contains("nav-open")) {
      if (y > lastScrollY && y > 120) {
        nav.classList.add("nav-hidden");
        clearTimeout(hideTimer);
        hideTimer = setTimeout(function () {
          nav.classList.remove("nav-hidden");
        }, 2800);
      } else {
        clearTimeout(hideTimer);
        nav.classList.remove("nav-hidden");
      }
    } else {
      nav.classList.remove("nav-hidden");
    }

    var bar = document.querySelector(".scroll-progress");
    if (bar) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = "scaleX(" + (h > 0 ? y / h : 0) + ")";
    }
    lastScrollY = y;
  }

  var ticking = false;
  window.addEventListener("scroll", function () {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(function () {
        onScroll();
        ticking = false;
      });
    }
  }, { passive: true });
  onScroll();

  window.addEventListener("resize", function () {
    if (!isMobileNav() && nav) nav.classList.remove("nav-hidden");
  }, { passive: true });

  /* ─── Scroll progress bar ───────────────────────────── */
  var progress = document.createElement("div");
  progress.className = "scroll-progress";
  progress.setAttribute("aria-hidden", "true");
  document.body.prepend(progress);

  /* ─── Counter animation on metrics ──────────────────── */
  function animateCounter(el, target, suffix) {
    suffix = suffix || "";
    var dur = 1400;
    var t0 = performance.now();
    function step(now) {
      var p = Math.min((now - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function initCounters() {
    document.querySelectorAll(".hm-n").forEach(function (el) {
      if (el.dataset.counted) return;
      var text = el.textContent.trim();
      var num = parseInt(text, 10);
      var suffix = text.replace(/[\d]/g, "");
      if (!isNaN(num)) {
        el.dataset.counted = "1";
        animateCounter(el, num, suffix);
      }
    });
  }

  /* ─── Enhanced page routing hook ────────────────────── */
  function hookGo() {
    var origGo = window.go;
    if (typeof origGo !== "function" || origGo._premiumHooked) return;
    window.go = function (id) {
      var result = origGo(id);
      setTimeout(function () {
        initIcons(document.querySelector(".page.active"));
        if (typeof animateVisible === "function") animateVisible();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
      return result;
    };
    window.go._premiumHooked = true;
  }
  window.hookGo = hookGo;

  document.addEventListener("DOMContentLoaded", function () {
    hookGo();
    initIcons();
    setTimeout(initCounters, 600);

    document.querySelectorAll(".ch-btn").forEach(function (btn) {
      btn.style.cursor = "pointer";
      if (/whatsapp/i.test(btn.textContent)) {
        btn.innerHTML = '<span class="ico-inline"><i data-lucide="message-circle"></i> WhatsApp Us</span>';
        btn.onclick = function () { if (typeof openWhatsApp === "function") openWhatsApp(); };
      } else if (/book/i.test(btn.textContent)) {
        btn.innerHTML = '<span class="ico-inline"><i data-lucide="calendar"></i> Book a Discovery Call</span>';
        btn.onclick = function () {
          var form = document.querySelector("#contact .fw");
          if (form) {
            form.scrollIntoView({ behavior: "smooth", block: "start" });
            var first = form.querySelector("input, select, textarea");
            if (first) setTimeout(function () { first.focus(); }, 400);
          } else if (typeof go === "function") {
            go("contact");
          }
        };
      }
      initIcons(btn);
    });
  });

  if (document.readyState !== "loading") {
    initIcons();
  }
})();
