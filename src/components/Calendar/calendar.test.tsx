import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { formatDate } from "../../components/Calendar/utils";
import { Calendar } from "./calendar";

describe("Inspect Calendar component", () => {
    it("should render Calendar", () => {
        const selectedDate = new Date();
        const setSelectedDay=jest.fn();

        // render(<div className='app__container'>
        //     <div className='date__container'>{formatDate(selectedDate, "DDD DD MMM YYYY")}</div>
        //     <Calendar selectedDate={selectedDate} selectDate={(date) => setSelectedDay(date)} />
        // </div>);

        // screen.debug();

        // expect(screen.getByRole('heading')).toBeInTheDocument();
        // expect(screen.getByRole('article')).toBeInTheDocument();
        // expect(screen.getByText(text)).toBeInTheDocument();
    });
});
