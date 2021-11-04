import { getNextState, countNeighbors } from "../src/game.js";

test("game", () => {
  expect(1).toBe(1);
});

test("countNeighbors - underpopulation", () => {
  expect(
    countNeighbors(
      [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ],
      1,
      1
    )
  ).toBe(1);
});

test("countNeighbors - survival", () => {
  expect(
    countNeighbors(
      [
        [0, 0, 0],
        [1, 1, 0],
        [0, 1, 1],
      ],
      1,
      1
    )
  ).toBe(3);
});

test("countNeighbors - overcrowding", () => {
  expect(
    countNeighbors(
      [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
      ],
      1,
      1
    )
  ).toBe(8);
});

test("countNeighbors - reproduction", () => {
  expect(
    countNeighbors(
      [
        [0, 0, 0],
        [1, 0, 0],
        [0, 1, 1],
      ],
      1,
      1
    )
  ).toBe(3);
});
