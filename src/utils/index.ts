const getMatrixPosition = (position: number) => {
  const xAxis = Math.floor(position / 4);
  const yAxis = Math.floor(position % 4);
  return [xAxis, yAxis];
};

export const isAdjacent = (lastPosition: number, targetPosition: number) => {
  const lastMatrixPosition = getMatrixPosition(lastPosition);
  const targetMatrixPosition = getMatrixPosition(targetPosition);

  const isAdjacentRow =
    lastMatrixPosition[0] - targetMatrixPosition[0] < 2 && lastMatrixPosition[0] - targetMatrixPosition[0] > -2;

  const isAdjacentColumn =
    lastMatrixPosition[1] - targetMatrixPosition[1] < 2 && lastMatrixPosition[1] - targetMatrixPosition[1] > -2;

  return isAdjacentRow && isAdjacentColumn;
};
