const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner,
} = require("../challenges/exercise007");

describe("sumDigits", () => {
  test("returns the sum of all its digits", () => {
    expect(sumDigits(123)).toBe(6);
  });

  test("returns the sum of all its digits", () => {
    expect(sumDigits(89)).toBe(17);
  });

  test("returns the sum of all its digits", () => {
    expect(sumDigits(25)).toBe(7);
  });

  test("returns the sum of all its digits", () => {
    expect(sumDigits(155)).toBe(11);
  });
});

describe("createRange", () => {
  test("creates a range of numbers as an array", () => {
    expect(createRange(3,11,2)).toEqual([3, 5, 7, 9, 11]);
    expect(createRange(1,10,3)).toEqual([1,4,7,10]);
    expect(createRange(0,5)).toEqual([0,1,2,3,4,5]);
  });
});

describe("getScreentimeAlertList", () => {
    test("return an array of usernames of users who have used more than 100 minutes of screentime for a given date", () => {
      const users = [
        {
          username: "beth_1234",
          name: "Beth Smith",
          screenTime: [
                       { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                       { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                       { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                       { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                      ]
         },
         {
          username: "sam_j_1989",
          name: "Sam Jones",
          screenTime: [
                       { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                       { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                       { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                      ]
         },
       ];
      expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234"]);
    });
  });

  describe("hexToRGB", () => {
    test(" This function should transform the hex code into an RGB code in the format", () => {
      expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
    });
  });

  describe("findWinner", () => {
    test("The function should return X if player X has won, 0 if the player 0 has won, and null if there is currently no winner.", () => {
      expect(findWinner([["X","0",null],["X", null ,"0"],["X", null ,"0"]])).toEqual("X");

    });
  });