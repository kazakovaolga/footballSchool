import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import {Paragraph} from ".";
import React from "react";

test("should render Paragraph", () => {
    const text = "Hello";
    render(<Paragraph text={text} />);
    const paragraph = screen.getByText(text);
    expect(paragraph).toBeInTheDocument();        
});