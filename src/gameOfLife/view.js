import { GAME_SIZE, CELL_SIZE } from "./constants";

const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

export class View {
  constructor() {
    document.getElementById("game").appendChild(canvas);
    canvas.setAttribute("height", GAME_SIZE * CELL_SIZE + GAME_SIZE - 1);
    canvas.setAttribute("width", GAME_SIZE * CELL_SIZE + GAME_SIZE - 1);
  }

  bindStop(handler, model) {
    document.getElementById("stop").addEventListener("click", function() {
      handler(model);
    });
  }

  bindStart(handler, model) {
    document.getElementById("start").addEventListener("click", function() {
      handler(model);
    });
  }

  bindReset(handler, model) {
    document.getElementById("reset").addEventListener("click", function() {
      handler(model);
    });
  }

  drawCell(x, y, value) {
    context.fillStyle = value;
    context.fillRect(
      x + CELL_SIZE * x,
      y + CELL_SIZE * y,
      CELL_SIZE,
      CELL_SIZE
    );
  }

  drawGame(model) {
    model.state.forEach((row, rowIndex) => {
      row.forEach((value, columnIndex) => {
        this.drawCell(rowIndex, columnIndex, value);
      });
    });
  }

  update(model) {
    this.drawGame(model);
  }
}
