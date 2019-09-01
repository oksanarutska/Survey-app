class Overlay {
    constructor(overlay) {
        this.container = overlay

    }

    show(color, html) {
        this.container.style.display = 'flex';
        this.container.style.setProperty('--main-color', color);
        this.container.querySelector('.overlay__message').innerHTML = html
    }

    hide() {
        this.container.style.display = 'none'
    }


}