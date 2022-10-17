import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "./form";

describe("Inspect Form component", () => {
    it("should render Form", () => {
        const title = 'Hello';        
        const handleClick = jest.fn();
        render(<Form title={title} handleClick={handleClick('test@mail.ru', 'test')} />); 
        
        expect(screen.getByText(title)).toBeInTheDocument();

        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByRole('button')).toHaveClass('loginFormButton');

        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toHaveClass('loginFormInput');
    });

    it("onClick works", () => {
        const title = 'Hello';        
        const handleClick = jest.fn();
        render(<Form title={title} handleClick={handleClick('test@mail.ru', 'test')} />);

        userEvent.click(screen.getByRole('button'));
        expect(handleClick).toHaveBeenCalledTimes(1);
        expect(handleClick).toHaveBeenCalledWith('test@mail.ru', 'test');
    });
});


