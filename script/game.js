import {
  snakeSpeed,
  drawSnake,
  updateSnake,
  getSnakeHead,
  snakeCollision,
} from './snake.js';
import { updateFood, drawFood } from './food.js';
import { isOutSideBoard } from './grid.js';

let lastRenderTime = 0;
let IsGameOver = false;
const boardGame = document.getElementById('game-board');

const main = (currentTime) => {
  if (IsGameOver) {
    if (window.confirm('Você perdeu OTÁÁÁÁÁRIO. Ok pra continuar')) {
      window.location = '/';
    }
    return;
  }
  window.requestAnimationFrame(main);
  const timeSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (timeSinceLastRender < 1 / snakeSpeed) return;
  lastRenderTime = currentTime;
  console.log('RENDER');
  draw();
  update();
};

const draw = () => {
  boardGame.innerHTML = '';
  drawSnake(boardGame);
  drawFood(boardGame);
};

const update = () => {
  updateSnake();
  updateFood();
  checkGameOver();
};

const checkGameOver = () => {
  IsGameOver = isOutSideBoard(getSnakeHead()) || snakeCollision();
};

window.requestAnimationFrame(main);
