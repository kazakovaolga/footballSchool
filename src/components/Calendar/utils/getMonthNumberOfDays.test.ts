import { getMonthNumberOfDays } from "./getMonthNumberOfDays";

describe("Inspect getMonthNumberOfDays function", () => {

    it("is a function", () => {
        expect(getMonthNumberOfDays).toBeInstanceOf(Function);
    });

    it("getting days of month", () => {
        const date=new Date();
        const y=date.getFullYear();
        const m=date.getMonth();
        const d=date.getDate();
        expect(getMonthNumberOfDays(m)).toEqual(new Date(y, m + 1, 0).getDate());
    });

});
