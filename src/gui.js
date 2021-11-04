import { getNextState } from "./game.js";

const createMatrix = (width, height) => {
  const matrix = [];
  for (let i = 0; i < width; i++) {
    const row = [];
    for (let j = 0; j < height; j++) {
      row.push(0);
    }
    matrix.push(row);
  }
  return matrix;
};

const WIDTH = 20;
const HEIGHT = 20;
const INTERVAL = 300;

const $App = document.getElementById("App");

const render = (state) => {
  let html = "";
  for (let i = 0; i < state.length; i++) {
    html += '<div class="Row">\n';
    for (let j = 0; j < state[i].length; j++) {
      html += `<div class="Cell" data-value="${state[i][j]}"></div>\n`;
    }
    html += "</div>\n";
  }
  console.log(html);
  $App.innerHTML = html;
};

const main = async () => {
  let state = createMatrix(WIDTH, HEIGHT);
  state[10][10] = 1;
  state[11][10] = 1;
  state[12][10] = 1;
  state[13][10] = 1;
  state[14][10] = 1;
  state[14][9] = 1;
  setInterval(() => {
    state = getNextState(state);
    render(state);
  }, INTERVAL);
};

main();
