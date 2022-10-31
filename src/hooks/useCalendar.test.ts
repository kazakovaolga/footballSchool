import { useCalendar } from "./useCalendar";
import { createDate } from "../components/Calendar/utils";
import { renderHook, act } from '@testing-library/react-hooks';

describe("Inspect useCalendar function", () => {
    it("is a function", () => {
        expect(useCalendar).toBeInstanceOf(Function);
    });

    it('should use Calendar', () => {
        const date = new Date();
        const { result } = renderHook(() => useCalendar({ locale: "default", selectedDate: date, firstWeekDayNumber: 2 }))
        expect(result.current.state.mode).toBe("days");
        expect(result.current.state.selectedYear).toBe(date.getFullYear());
    });

    it('setSelectedMonthByIndex', () => {
        const date = new Date();
        const { result } = renderHook(() => useCalendar({ locale: "default", selectedDate: date, firstWeekDayNumber: 2 }))

        act(() => {
            result.current.functions.setSelectedMonthByIndex(date.getMonth());
        })
        expect(result.current.state.selectedDay.monthIndex).toBe(date.getMonth());
    });

    it('check SetMode', async () => {
        const date = new Date();
        const { result } = renderHook(() => useCalendar({ locale: "default", selectedDate: date, firstWeekDayNumber: 2 }))
        expect(result.current.functions.onClickArrow).toBeInstanceOf(Function);
        await act(async () => {
            result.current.functions.setMode("years");
        });
        expect(result.current.state.mode).toBe("years");
    });

    it('check setSelectedDay', async () => {
        const currentDate = createDate();
        const { result } = renderHook(() => useCalendar({ locale: "default", selectedDate: new Date(), firstWeekDayNumber: 2 }));
        await act(async () => {
            result.current.functions.setSelectedDay(currentDate);
        });
        expect(result.current.state.selectedDay).toBe(currentDate);
    });
});