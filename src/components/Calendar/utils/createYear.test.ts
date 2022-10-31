import { createYear } from "./createYear";
import { createMonth } from "./createMonth";
import { createDate } from "./createDate";
import { monthesDictNames } from "./dicts";

describe("Inspect createYear function", () => {

    it("is a function", () => {
        expect(createYear).toBeInstanceOf(Function);
    });

    it("checking type of  returned value", () => {
        expect(typeof (createYear())).toEqual("object");
    });

    it("getting current month", () => {
        const month = monthesDictNames[new Date().getMonth()];
        expect(createYear({ locale: "default" }).month.monthName).toEqual("October");        
    });

    it("getting a month name", () => {
        const year = createDate().year;
        const getMonthDays = (monthIndex: number) =>
            createMonth({ date: new Date(year, monthIndex), locale: "default" }).createMonthDays();

        const createYearMonthes = () => {
            const monthes = [];

            for (let i = 0; i < 12; i++) {
                monthes[i] = getMonthDays(i);
            }
            return monthes;
        };        
        expect(createYear({ locale: "default" }).createYearMonthes()).toEqual(createYearMonthes());
    });

});
