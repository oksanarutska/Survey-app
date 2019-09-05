var slider = getSlider();
var overlay = Overlay();
ChoicePage();
ChoiceSexPage();
FormValidate();


document.querySelector('#button_start').addEventListener('click', function (e) {
    slider.next();
});
