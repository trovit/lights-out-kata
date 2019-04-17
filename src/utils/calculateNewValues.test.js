import calculateNewValues from "./calculateNewValues";

describe("calculateNewValues", () => {
  const dataset = [
    [
      0,
      0,
      [[1, 1, 1], [1, 1, 1], [1, 1, 1]],
      [[0, 0, 1], [0, 1, 1], [1, 1, 1]],
    ],
    [
      0,
      1,
      [[1, 1, 1], [1, 1, 1], [1, 1, 1]],
      [[0, 0, 0], [1, 0, 1], [1, 1, 1]],
    ],
    [
      0,
      2,
      [[0, 0, 0], [1, 0, 1], [1, 1, 1]],
      [[0, 1, 1], [1, 0, 0], [1, 1, 1]],
    ],
    [
      1,
      0,
      [[0, 1, 1], [1, 0, 0], [1, 1, 1]],
      [[1, 1, 1], [0, 1, 0], [0, 1, 1]],
    ],
    [
      1,
      1,
      [[1, 1, 1], [0, 1, 0], [0, 1, 1]],
      [[1, 0, 1], [1, 0, 1], [0, 0, 1]],
    ],
    [
      1,
      2,
      [[1, 0, 1], [1, 0, 1], [0, 0, 1]],
      [[1, 0, 0], [1, 1, 0], [0, 0, 0]],
    ],
    [
      2,
      0,
      [[1, 0, 0], [1, 1, 0], [0, 0, 0]],
      [[1, 0, 0], [0, 1, 0], [1, 1, 0]],
    ],
    [
      2,
      1,
      [[1, 0, 0], [0, 1, 0], [1, 1, 0]],
      [[1, 0, 0], [0, 0, 0], [0, 0, 1]],
    ],
    [
      2,
      2,
      [[1, 0, 0], [0, 0, 0], [0, 0, 1]],
      [[1, 0, 0], [0, 0, 1], [0, 1, 0]],
    ],
  ];

  dataset.forEach(function([rowNumber, columnNumber, currentValues, expected]) {
    test(`clicking on row: ${rowNumber}, column: ${columnNumber}`, () => {
      expect(
        calculateNewValues(currentValues, rowNumber, columnNumber),
      ).toMatchObject(expected);
    });
  });
});
