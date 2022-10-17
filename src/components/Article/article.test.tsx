import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Article } from "./article";

describe("Inspect Article component", () => {
    it("should render Article", () => {
        const text = "Добро пожаловать!";
        const level = 2;
        render(<Article />);

        expect(screen.getByRole("heading")).toBeInTheDocument();
        expect(screen.getByRole("article")).toBeInTheDocument();                 
        expect(screen.getByText(text)).toBeInTheDocument();
    });
});
