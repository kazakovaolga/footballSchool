import { formatDate } from "./formatDate";

describe("Inspect formatDate function", () => {

    it("is a function", () => {
        expect(formatDate).toBeInstanceOf(Function);
    });

    it("getting date format", () => {
        const date=new Date();
        const y=date.getFullYear();
        const m=date.getMonth();
        const d=date.getDate();
        expect(formatDate(date,"YYYY:MM:DD")).toEqual(`${y}:${m+1}:${d}`);        
    });

});
