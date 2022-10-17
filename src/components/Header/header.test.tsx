import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import {Header} from ".";

test("should render Header", () => {
    const text="React-Intro";
    const level=2;
    const className="header";
    render(<Header level={level} text={text} className={className} />);    
    expect(screen.getByText(text)).toBeInTheDocument();      
    expect(screen.getByRole("heading")).toHaveClass(className);
});