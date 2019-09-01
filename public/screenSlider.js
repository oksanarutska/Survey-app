class ScreenSlider {
    constructor(container) {
        this.container = container;
        this.currentSlide = 0;
    }

    prevSlide() {
        this.currentSlide--;
        this.apply();
    }

    nextSlide() {
        this.currentSlide++;
        this.apply();
    }

    apply() {
        this.container.style.transform = `translateY(calc(${this.currentSlide} * -100vh))`;
    }
}