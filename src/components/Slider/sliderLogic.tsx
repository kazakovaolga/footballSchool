let slideIndex = 1;

export class SliderLogic {
    el: HTMLElement;

    constructor(el: HTMLElement) {
        this.el = el;
    }

    showSlides(el: HTMLElement, n: number) {
        const slides = el.querySelectorAll(".slider__item") as NodeListOf<HTMLElement>;

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        for (const slide of slides) {
            slide.style.display = "none";
        }

        slides[slideIndex - 1].style.display = "block";
    }

    previous(el: HTMLElement) {
        this.showSlides(el, (slideIndex -= 1));
    };

    next(el: HTMLElement) {
        this.showSlides(el, (slideIndex += 1));
    };
}