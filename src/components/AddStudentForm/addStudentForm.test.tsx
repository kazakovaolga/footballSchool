import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { AddStudentForm } from "./addStudentForm";

describe("Inspect AddStudentForm component", () => {
    it("should render AddStudentForm", () => {
        const text = "Добро пожаловать!";
        const level = 2;
        // render(<AddStudentForm />);

        // expect(screen.getByRole('heading')).toBeInTheDocument();
        // expect(screen.getByRole('article')).toBeInTheDocument();                 
        // expect(screen.getByText(text)).toBeInTheDocument();
    });
});
