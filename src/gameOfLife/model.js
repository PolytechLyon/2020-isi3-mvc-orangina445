import {
  GAME_SIZE,
  CELL_STATES,
  DEFAULT_ALIVE_PAIRS,
  RENDER_INTERVAL
} from "./constants";

export class Model {
  constructor() {
    this.width = GAME_SIZE;
    this.height = GAME_SIZE;
    this.raf = null;
    this.observers = [];

    this.init();
  }

  init() {
    this.state = Array.from(new Array(this.height), () =>
      Array.from(new Array(this.width), () => CELL_STATES.NONE)
    );
    DEFAULT_ALIVE_PAIRS.forEach(([x, y]) => {
      this.state[y][x] = CELL_STATES.ALIVE;
    });
    this.updated();
  }

  addObserver(obs) {
    this.observers.push(obs);
  }

  removeObserver(obs) {
    const index = this.observers.indexOf(obs);
    this.observers.splice(index, 1);
  }

  run(date = new Date().getTime()) {
    this.raf = requestAnimationFrame(() => {
      const currentTime = new Date().getTime();
      if (currentTime - date > RENDER_INTERVAL) {
        const modification = [];
        for (let i = 0; i < this.width; i++) {
          for (let j = 0; j < this.width; j++) {
            const nbAlive = this.aliveNeighbours(i, j);
            // TODO implement Game of life logic
            if (this.state[j][i] === CELL_STATES.ALIVE) {
              if (nbAlive === 2 || nbAlive === 3) {
                modification.push([i, j, CELL_STATES.ALIVE]);
              } else {
                modification.push([i, j, CELL_STATES.DEAD]);
              }
            }

            if (nbAlive === 3) {
              modification.push([i, j, CELL_STATES.ALIVE]);
            }
          }
        }
        for (var elem of modification) {
          this.state[elem[1]][elem[0]] = elem[2];
        }
        this.updated();
        this.run(currentTime);
      } else {
        this.run(date);
      }
    });
  }

  stop() {
    cancelAnimationFrame(this.raf);
    this.raf = null;
    this.updated();
  }

  reset() {
    // TODO
    this.init();
    this.updated();
  }

  isCellAlive(x, y) {
    return x >= 0 &&
      y >= 0 &&
      y < this.height &&
      x < this.height &&
      this.state[y][x] === CELL_STATES.ALIVE
      ? 1
      : 0;
  }
  aliveNeighbours(x, y) {
    let number = 0;
    // TODO
    if (this.isCellAlive(x - 1, y - 1)) {
      number++;
    }
    if (this.isCellAlive(x - 1, y)) {
      number++;
    }
    if (this.isCellAlive(x - 1, y + 1)) {
      number++;
    }

    if (this.isCellAlive(x + 1, y - 1)) {
      number++;
    }
    if (this.isCellAlive(x + 1, y + 1)) {
      number++;
    }
    if (this.isCellAlive(x + 1, y)) {
      number++;
    }
    if (this.isCellAlive(x, y - 1)) {
      number++;
    }
    if (this.isCellAlive(x, y + 1)) {
      number++;
    }

    return number;
  }

  updated() {
    // TODO update the view
    for (var obs of this.observers) {
      obs.update(this);
    }
  }
}
