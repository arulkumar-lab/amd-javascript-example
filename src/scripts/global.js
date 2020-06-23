// Define modules

define("module/scroll-position", [], function() {
  return {
    scrollPosition(el, offset) {
      var el = document.querySelector(el);
      var origOffsetY = el.offsetTop;
      var sticker = function() {
        if (window.scrollY > origOffsetY) {
          el.classList.add("sticky");
        } else {
          el.classList.remove("sticky");
        }
      };
      sticker();
      document.addEventListener("scroll", sticker);
    }
  };
});
define("module/bgcolor", [], function() {
  document.body.style.backgroundColor = "blue";
});
define("module/app", [
  "require",
  "exports",
  "module",
  "module/bgcolor"
], function(require) {
  var sticky = require("./scroll-position");
  require("./bgcolor");
  var header = document.getElementById("header");
  if (header != null) {
    sticky.scrollPosition(".header");
  }
  $(".toc-link, h2 a, h3 a, .up-link").on("click", function() {
    $("html, body").animate({ scrollTop: $(this.hash).offset().top - 60 }, 500);
  });
});