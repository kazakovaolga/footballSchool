import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import {BrowserRouter as Router} from "react-router-dom";
import { List4Trainer } from ".";

describe("List testing", () => {
    test("List should be a Component", () => {
        expect(List4Trainer).toBeInstanceOf(Function);
    });

    test("testing render List",  () => {        
        render( <Router><List4Trainer/></Router>);
        const list = screen.getByRole("list");
        expect(list).toBeInTheDocument();
        expect(list).toHaveClass("navigation__list");
        const listItems=screen.queryAllByRole("listitem");
        listItems.forEach(function(item, index, array) {
            expect(item).toHaveClass("navigation__list-element");
          }            
        );          
    });

});
