import { getMonthesNames } from "./getMonthesNames";
import { monthesDictNames } from "./dicts";
import { createDate } from "./createDate";

describe("Inspect getMonthesNames function", () => {

    it("is a function", () => {
        expect(getMonthesNames).toBeInstanceOf(Function);
    });

    it("getting monthes names", () => {        
        const monthesNames: {
            month: ReturnType<typeof createDate>["month"];
            monthShort: ReturnType<typeof createDate>["monthShort"];
            monthIndex: ReturnType<typeof createDate>["monthIndex"];
            date: ReturnType<typeof createDate>["date"];
        }[] = Array.from({ length: 12 });

        const d = new Date();
        monthesNames.forEach((_, i) => {
            const { month, monthIndex, monthShort, date } = createDate({
                locale: 'default',
                date: new Date(d.getFullYear(), d.getMonth() + i, 1)
            });

            monthesNames[monthIndex] = { month, monthIndex, monthShort, date };
        });
        expect(getMonthesNames()).toEqual(monthesNames);
    });

});
