import { createMonth } from "./createMonth";
import { createDate } from "./createDate";

describe("Inspect createMonth function", () => {

    it("is a function", () => {
        expect(createMonth).toBeInstanceOf(Function);
    });

    it("checking type of  returned value", () => {
        expect(typeof(createMonth())).toEqual("object");
    });

    it("getting a list of days in a month", () => {
        let date;
        const arr = [];
        for (let i = 0; i < 31; i++) {
            date = new Date(2022, 9, i + 1);
            arr.push(createDate({ date: date, locale: "default" }));
        }
        expect(createMonth({ date: date, locale: "default" }).createMonthDays()).toEqual(arr);
    });

    it("getting a month name", () => {
        const date = new Date(2022, 10);
        expect(createMonth({ date: date, locale: "default" }).monthName).toEqual("November");
    });

});
