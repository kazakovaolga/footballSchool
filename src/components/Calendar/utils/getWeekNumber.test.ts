import { getWeekNumber } from "./getWeekNumber";

describe("Inspect getWeekNumber function", () => {

    it("is a function", () => {
        expect(getWeekNumber).toBeInstanceOf(Function);
    });

    it("getting weeks number", () => {   
        const date=new Date(2022,9,11);   
        console.log(date)  ;
        expect(getWeekNumber(date)).toEqual(42);
    });

});
