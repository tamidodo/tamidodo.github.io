/* mobile nav toggle */
(function () {
  var toggle = document.querySelector(".nav__toggle");
  var menu = document.querySelector(".menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("open");
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { menu.classList.remove("open"); });
    });
  }
})();

/* coding-page language filter */
(function () {
  var filters = document.querySelectorAll(".filter");
  var projects = document.querySelectorAll(".project");
  if (!filters.length) return;

  filters.forEach(function (f) {
    f.addEventListener("click", function () {
      filters.forEach(function (x) { x.classList.remove("active"); });
      f.classList.add("active");
      var lang = f.getAttribute("data-lang");
      projects.forEach(function (p) {
        var langs = (p.getAttribute("data-langs") || "").split(" ");
        var show = lang === "all" || langs.indexOf(lang) !== -1;
        p.style.display = show ? "" : "none";
      });
    });
  });
})();
