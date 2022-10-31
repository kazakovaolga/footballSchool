import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { StudentList } from "./studentList";

describe("List testing", () => {
    test("List should be a Component", () => {
        expect(StudentList).toBeInstanceOf(Function);
    });

    test("testing  getting template StudentList",  () => {
        const data={surname:"Kazakov",name:"Damir",age:7,teamName:"RKeaper",date:"07.12.2015"};        
        const str=StudentList(data);
        render(<>{str}</>);         

        const paragraphItems=screen.queryAllByRole("paragraph");
        paragraphItems.forEach(function(item) {
            expect(item).toHaveClass("studentsList__div-p");
          }            
        );    
    });

});
