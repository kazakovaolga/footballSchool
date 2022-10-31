import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Emblem } from ".";

describe("Inspect Article component", () => {
    it("should render Article", () => {
        const src="../../../assets/emblem.jpg";        
        render(<Emblem src={src} className='emblem'/>);

        expect(screen.getByRole("img")).toBeInTheDocument();
        expect(screen.getByRole("img")).toHaveClass("emblem");                 
        expect(screen.getByRole("img")).toHaveAttribute("src");
    });
});
