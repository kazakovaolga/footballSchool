import { getWeekDaysNames } from "./getWeekDaysNames";
import { weeksDictNames } from './dicts';

describe("Inspect getWeekDaysNames function", () => {

    it("is a function", () => {
        expect(getWeekDaysNames).toBeInstanceOf(Function);
    });

    it("getting weeks names", () => {        
        expect(getWeekDaysNames()).toEqual(weeksDictNames);
    });

});
