//scss
import "./index.scss";
//react
import React, { FC, useEffect } from "react";
//logic
import { SliderLogic } from "./sliderLogic";

interface Fotos {
    foto1: string
    foto2: string
    foto3: string
    foto4: string
}
export const Slider: FC<Fotos> = function ({ foto1, foto2, foto3, foto4 }) {    
    useEffect(() => {
        const element = document.querySelector(".slider") as HTMLElement;
        const sliderItem = new SliderLogic(element);
        sliderItem.showSlides(element, 1);        
        (document.querySelector(".previous") as HTMLElement).addEventListener("click", () => {
            sliderItem.previous(element);
        });
        (document.querySelector(".next") as HTMLElement).addEventListener("click", () => {
            sliderItem.next(element);
        });
    }, []);
    
    return (
        <>
            <ul className="slider">
                <li className="slider__item">
                    <img src={foto1} />
                </li>
                <li className="slider__item">
                    <img src={foto2} />
                </li>
                <li className="slider__item">
                    <img src={foto3} />
                </li>
                <li className="slider__item">
                    <img src={foto4} />
                </li>
                <a className="previous">&#10094;</a>
                <a className="next">&#10095;</a>
            </ul>
        </>
    );
};