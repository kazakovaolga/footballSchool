import { SliderLogic } from "./sliderLogic";

describe("Inspect Slider function", () => {
  let container:HTMLElement;
//   let logSpy:(object: Console, method: "log")=>jest.SpyInstance;
  const slideIndex = 1;
  let previous:HTMLElement;
  let next:HTMLElement;

  beforeEach(() => {
    container = document.createElement("ul");
    container.className = "slider";
    for (let i = 1; i <= 4; i += 1) {
      const li = document.createElement("li");
      li.className = "slider__item";
      container.append(li);
    }
    previous = document.createElement("a");
    previous.className = "previous";
    next = document.createElement("a");
    next.className = "next";    
  });

  it("is a function", () => {
    expect(new SliderLogic(container)).toBeInstanceOf(SliderLogic);
  });

  it("container is ul Element", () => {
    expect(container).toBeInstanceOf(HTMLUListElement);
  });

  it("container class name is slider", () => {
    const className = container.className;
    expect(className).toEqual("slider");
  });

  it("show slides", () => {
    const sliderItem = new SliderLogic(container);
    const slides = container.querySelectorAll(".slider__item") as NodeListOf<HTMLElement>;  
    
    sliderItem.showSlides(container,0);
    expect(slides[3].style.display).toEqual("block");      

    sliderItem.showSlides(container,5);
    expect(slides[0].style.display).toEqual("block");   
  });

  it("click previos and nest slide", () => {
    const sliderItem = new SliderLogic(container);
    previous.addEventListener("click", () => {
      sliderItem.previous(container);
    });
    next.addEventListener("click", () => {
      sliderItem.next(container);
    });
    sliderItem.showSlides(container,1);
    previous.click();
    let slides = container.querySelectorAll(".slider__item") as NodeListOf<HTMLElement>;
    expect(slides[3].style.display).toEqual("block");    

    next.click();
    slides = container.querySelectorAll(".slider__item") as NodeListOf<HTMLElement>;
    expect(slides[0].style.display).toEqual("block");   
  });
});
