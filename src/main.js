var slider = new Slider({
    root: document.querySelector("#slider")
});
var overlay = new Overlay({});
ChoicePage();
ChoiceSexPage();
FormValidate();


document.querySelector('#button_start').addEventListener('click', function (e) {
    slider.next();
});
