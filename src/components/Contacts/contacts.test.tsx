import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Contacts } from "./contacts";

describe("Inspect Contacts component", () => {
    it("should render Contacts", () => {
        const href = "https://www.instagram.com/footballacademynn";
        const src = "../../../assets/insta.jpg";
        render(<Contacts href={href} src={src}/>);

        expect(screen.getByRole('img')).toBeInTheDocument();
        expect(screen.getByRole('link')).toBeInTheDocument();                 
        // expect(screen.getByText(text)).toBeInTheDocument();
    });
});
