function ChoiceSexPage() {
  var buttonNext = document.querySelector("#button_next__sex");
  var buttons = [];

  for (var i = 0; i < document.querySelectorAll(".container-main-choice-sex .button_choice").length; i++) {
    buttons.push(document.querySelectorAll(".container-main-choice-sex .button_choice")[i]);
  }
  buttons.forEach(function(e) {
    e.addEventListener("click", function(b) {
      buttons.forEach(function(bs) {
        bs.classList.remove("button_choice--selected");
      });
      b.currentTarget.classList.add("button_choice--selected");
      buttonNext.style.display = "block";
      overlay.show(
        "#fcc150",
        b.currentTarget.dataset.number + "%",
        "пользователей - вариант " + b.currentTarget.dataset.sex
      );
    });
  });

  buttonNext.addEventListener("click", function(e) {
    slider.next();
    overlay.hide();
  });

  document.querySelector(".container-main-choice-sex.container-main").style.setProperty("--main-color", "#fcc150");

  return {};
}
