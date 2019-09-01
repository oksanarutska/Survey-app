const slides = [
    new WelcomPage(),
    new ChoicePage(),
    new ChoiceSexPage(),
    new LoginPage()
];
const screenSlideContainer = document.querySelector('#main');
const screenSlide = new Slider(screenSlideContainer, slides);

const overlayContainer = document.querySelector('.overlay');
const overlay = new Overlay(overlayContainer);

