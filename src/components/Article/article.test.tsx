import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Article } from "./article";

test("should render Article", () => {
    const text = "Добро пожаловать!";
    const level = 2;
    render(<Article/>);

    const header = screen.getByText(text);
    expect(header).toBeInTheDocument();
});