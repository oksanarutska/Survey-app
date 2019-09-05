function Slider(options) {
    var container = options.root.querySelector('.slider-container');
    var sliders = [];
    var slidersChildren = container.children;

    for (var i = 0; i < slidersChildren.length; i++) {
        sliders.push(slidersChildren[i])
    }
    var step = 0;

    return {
        next: function () {
            step++;
            sliders[step - 1].classList.toggle('hide');
            sliders[step].classList.toggle('hide');

        },
        prev: function () {
            step--;
            sliders[step + 1].classList.toggle('hide');
            sliders[step].classList.toggle('hide');
        }
    }
}




