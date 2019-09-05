function ChoicePage() {
  var buttonNext = document.querySelector("#button_next");
  var buttons = [];
  for (var i = 0; i < document.querySelectorAll(".container-main-choice .button_choice").length; i++) {
    buttons.push(document.querySelectorAll(".container-main-choice .button_choice")[i]);
  }
  buttons.forEach(function(e) {
    e.addEventListener("click", function(b) {
      buttons.forEach(function(bs) {
        bs.classList.remove("button_choice--selected");
      });
      b.currentTarget.classList.add("button_choice--selected");
      buttonNext.style.display = "block";
      overlay.show(
        "#fc8950",
        b.currentTarget.dataset.number + "%",
        "людей обращают внимание на " + b.currentTarget.dataset.value
      );
    });
  });

  buttonNext.addEventListener("click", function(e) {
    slider.next();
    overlay.hide();
  });

  document.querySelector(".container-main-choice.container-main").style.setProperty("--main-color", "#fc8950");

  return {};
}
