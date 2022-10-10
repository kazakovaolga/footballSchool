import {checkIsToday} from './checkIsToday';

describe("Inspect checkIsToday function", () => {    
  it("is a function", () => {
    expect(checkIsToday).toBeInstanceOf(Function);
  });

  it("checking for the current date", () => {
    const date = new Date();
    expect(checkIsToday(date)).toBeTruthy;
  });

});
