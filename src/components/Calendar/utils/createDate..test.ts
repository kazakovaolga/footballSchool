import { createDate } from './createDate';
import { getWeekNumber } from "./getWeekNumber";

describe("Inspect checkIsToday function", () => {
    it("is a function", () => {
        expect(createDate).toBeInstanceOf(Function);
    });

    it("checking for the current date", () => {
        const date = new Date();
        expect(createDate({ date: date,locale:"default" })).toEqual({
            date: date,
            dayNumber: date.getDate(),
            day: date.toLocaleDateString("default", { weekday: "long" }),
            dayNumberInWeek: date.getDay() + 1,
            dayShort: date.toLocaleDateString("default", { weekday: "short" }),
            year: date.getFullYear(),
            yearShort: date.toLocaleDateString("default", { year: "2-digit" }),
            month: date.toLocaleDateString("default", { month: "long" }),
            monthShort: date.toLocaleDateString("default", { month: "short" }),
            monthNumber: date.getMonth() + 1,
            monthIndex: date.getMonth(),
            timestamp: date.getTime(),
            week: getWeekNumber(date)
        });
    });

});
