class Slider {
    constructor(container, slides) {
        if (!slides || slides.length === 0) {
            console.error("No slides passed in Slider class");
            return;
        }

        this.container = container;
        this.slides = slides;
        this.currentSlideNumber = 0;
        this.apply();
    }

    prevSlide() {
        this.currentSlideNumber--;
        this.apply();
    }

    nextSlide() {
        this.currentSlideNumber++;
        this.apply();
    }

    apply() {
        const currentSlide = this.slides[this.currentSlideNumber];
        currentSlide.render(this.container);
    }
}