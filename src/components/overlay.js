function Overlay() {
  var container = document.querySelector(".overlay");
  return {
    show: function(color, percent, text) {
      container.style.display = "flex";
      container.style.setProperty("--main-color", color);
      container.querySelector(".overlay__message_tittle").innerHTML = percent;
      container.querySelector(".overlay__message_text").innerHTML = text;
    },

    hide: function() {
      container.style.display = "none";
    }
  };
}
