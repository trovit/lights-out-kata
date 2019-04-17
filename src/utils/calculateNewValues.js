const DIMENSION = 3;

export default function calculateNewValues(currentValues, row, column) {
  const newValues = [...currentValues];
  const positionsToSwap = [...getNeighbours(row, column), [row, column]];

  return swapValues(newValues, positionsToSwap);
}

function swapValue(value) {
  return value === 0 ? 1 : 0;
}

function swapValues(newValues, positionsToSwap) {
  return positionsToSwap.reduce(function(values, [row, column]) {
    const value = values[row][column];
    values[row][column] = swapValue(value);
    return values;
  }, newValues);
}

function getNeighbours(row, column) {
  const previousRow = row - 1;
  const nextRow = row + 1;

  const previousColumn = column - 1;
  const nextColumn = column + 1;

  return [
    [previousRow, column],
    [nextRow, column],
    [row, previousColumn],
    [row, nextColumn],
  ].filter(([row, column]) => {
    return row >= 0 && row < DIMENSION && column >= 0 && column < DIMENSION;
  });
}
