const gridSize = 21;

export const randomPosition = () => {
  return {
    x: Math.floor(Math.random() * gridSize) + 1,
    y: Math.floor(Math.random() * gridSize) + 1,
  };
};

export const isOutSideBoard = (headPosition) => {
  return (
    headPosition.x < 1 ||
    headPosition.x > gridSize ||
    headPosition.y < 1 ||
    headPosition.y > gridSize
  );
};
