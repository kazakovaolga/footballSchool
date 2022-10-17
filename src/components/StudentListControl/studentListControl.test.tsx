import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { StudentListControl } from "./studentListControl";

describe("List testing", () => {
    test("List should be a Component", () => {
        expect(StudentListControl).toBeInstanceOf(Function);
    });

    test("testing  getting template StudentList",  () => {
        const data={surname:'Kazakov',name:'Damir',age:7,teamName:'RKeaper',date:'07.12.2015'}    
        const id='1';
        const str=StudentListControl(data,id);
        render(<>{str}</>);         

        const paragraphItems=screen.queryAllByRole('paragraph');
        paragraphItems.forEach(function(item) {
            expect(item).toHaveClass('studentsListControl__div-p');
          }            
        );    
    });

});
