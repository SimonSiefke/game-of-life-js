const getTopLeft = (state, i, j) => {
  if (i > 0 && j > 0) {
    return state[i - 1][j - 1];
  }
  return 0;
};

const getTop = (state, i, j) => {
  if (i > 0) {
    return state[i - 1][j];
  }
  return 0;
};

const getTopRight = (state, i, j) => {
  if (i > 0 && j < state[i].length - 1) {
    return state[i - 1][j + 1];
  }
  return 0;
};

const getLeft = (state, i, j) => {
  if (j > 0) {
    return state[i][j - 1];
  }
  return 0;
};

const getRight = (state, i, j) => {
  if (j < state[i].length - 1) {
    return state[i][j + 1];
  }
  return 0;
};

const getBottomLeft = (state, i, j) => {
  if (i < state.length - 1 && j > 0) {
    return state[i + 1][j - 1];
  }
  return 0;
};

const getBottom = (state, i, j) => {
  if (i < state.length - 1) {
    return state[i + 1][j];
  }
  return 0;
};

const getBottomRight = (state, i, j) => {
  if (i < state.length - 1 && j < state[i].length - 1) {
    return state[i + 1][j + 1];
  }
  return 0;
};

export const countNeighbors = (state, i, j) => {
  const topLeft = getTopLeft(state, i, j);
  const top = getTop(state, i, j);
  const topRight = getTopRight(state, i, j);
  const left = getLeft(state, i, j);
  const right = getRight(state, i, j);
  const bottomLeft = getBottomLeft(state, i, j);
  const bottom = getBottom(state, i, j);
  const bottomRight = getBottomRight(state, i, j);
  return (
    topLeft + top + topRight + left + right + bottomLeft + bottom + bottomRight
  );
};

export const getNextState = (state) => {
  return state.map((row, i) => {
    return row.map((cell, j) => {
      const neighbors = countNeighbors(state, i, j);
      if (neighbors === 2) {
        return cell;
      }
      if (neighbors === 3) {
        return 1;
      }
      return 0;
    });
  });
};
