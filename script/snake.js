import { getInputDirection } from './input.js';

export const snakeSpeed = 5;
let newNodes = 0;

const snakeBody = [{ x: 10, y: 11 }];

export const drawSnake = (boardGame) => {
  snakeBody.forEach((bodyNode) => {
    const snakeNode = document.createElement('div');
    snakeNode.style.gridColumnStart = bodyNode.x;
    snakeNode.style.gridRowStart = bodyNode.y;
    snakeNode.classList.add('snake');
    boardGame.appendChild(snakeNode);
  });
};

export const updateSnake = () => {
  addNodes();
  const inputDirection = getInputDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
};

export const growSnake = (amount) => {
  newNodes += amount;
};

export const onSnake = (foodPosition, { ignoreHead = false } = {}) => {
  return snakeBody.some((node, index) => {
    if (ignoreHead && index === 0) return false;
    return equalPositions(node, foodPosition);
  });
};

const equalPositions = (position1, position2) => {
  return position1.x === position2.x && position2.y === position1.y;
};

const addNodes = () => {
  for (let i = 0; i < newNodes; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }

  newNodes = 0;
};

export const getSnakeHead = () => {
  return snakeBody[0];
};

export const snakeCollision = () => {
  return onSnake(snakeBody[0], { ignoreHead: true });
};
