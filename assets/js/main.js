/* =========================================================
   Ian Chen Profile — interactions
   ========================================================= */
(function () {
  "use strict";

  /* ---- Language toggle (remembers choice) ---- */
  var STORE_KEY = "ian-profile-lang";
  var body = document.body;
  var btn = document.getElementById("langToggle");

  function applyLang(lang) {
    body.classList.remove("lang-zh", "lang-en");
    body.classList.add(lang === "en" ? "lang-en" : "lang-zh");
    document.documentElement.lang = lang === "en" ? "en" : "zh-Hant";
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
  }

  var saved = "zh";
  try { saved = localStorage.getItem(STORE_KEY) || "zh"; } catch (e) {}
  applyLang(saved);

  if (btn) {
    btn.addEventListener("click", function () {
      applyLang(body.classList.contains("lang-en") ? "zh" : "en");
    });
  }

  /* ---- Reveal on scroll ---- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Current year ---- */
  var y = document.getElementById("year");
  if (y) { y.textContent = new Date().getFullYear(); }
})();
