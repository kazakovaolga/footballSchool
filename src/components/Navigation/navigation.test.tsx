import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import {BrowserRouter as Router} from "react-router-dom";
import { Navigation } from ".";
import {List4Trainer} from "../List4Trainer/.";

describe("Navigation testing", () => {
    test("Navigation should be a Component", () => {
        expect(Navigation).toBeInstanceOf(Function);
    });

    test("testing render Navigation",  () => {        
        render( <Router><Navigation><List4Trainer/></Navigation></Router>);
        
        expect(screen.getByRole("navigation")).toBeInTheDocument();
        expect(screen.getByRole("navigation").firstChild).toHaveClass("navigation__list");
    });

});
