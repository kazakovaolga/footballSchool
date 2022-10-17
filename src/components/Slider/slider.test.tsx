import { Slider } from "./slider";
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Inspect Slider function", () => {

    test("Slider should be a Function", () => {
        expect(Slider).toBeInstanceOf(Function);
    });

    test("testing  render  Slider", () => {
        const fotos = {
            foto1: "../../../assets/fotos/foto1.jpg",
            foto2: "../../../assets/fotos/foto2.jpg",
            foto3: "../../../assets/fotos/foto3.jpg",
            foto4: "../../../assets/fotos/foto4.jpg"
        };
        render(<Slider foto1={fotos.foto1} foto2={fotos.foto2} foto3={fotos.foto3} foto4={fotos.foto4} />);
        expect(screen.getByRole("list")).toBeInTheDocument();
        expect(screen.getByRole("list")).toHaveClass("slider");

        const listItems = screen.queryAllByRole("listitem");
        listItems.forEach(function (item) {
            expect(item).toHaveClass("slider__item");
        }
        );
    });
});
