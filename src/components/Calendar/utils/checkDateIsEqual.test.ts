import { checkDateIsEqual } from './checkDateIsEqual';

describe("Inspect checkDateIsEqual function", () => {
    it("is a function", () => {
        expect(checkDateIsEqual).toBeInstanceOf(Function);
    });

    it("checking for equality of dates", () => {
        const date1 = new Date();
        const date2 = new Date(2022, 9, 10);
        expect(checkDateIsEqual(date1,date2)).toBeFalsy;
    });

});