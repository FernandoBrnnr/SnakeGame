import { onSnake, growSnake } from './snake.js';
import { randomPosition } from './grid.js';

let food = getRandomPosition();
const EXPANTION_RATE = 1;

export const drawFood = (boardGame) => {
  const foodElement = document.createElement('div');
  foodElement.style.gridColumnStart = food.x;
  foodElement.style.gridRowStart = food.y;
  foodElement.classList.add('food');
  boardGame.appendChild(foodElement);
};

export const updateFood = () => {
  if (onSnake(food)) {
    console.log('Atualiza caralho');
    growSnake(EXPANTION_RATE);
    food = getRandomPosition();
  }
};

function getRandomPosition() {
  let newRandomPosition;
  while (newRandomPosition == null || onSnake(newRandomPosition)) {
    newRandomPosition = randomPosition();
  }
  return newRandomPosition;
}
