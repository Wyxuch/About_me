export const setZIndex = (classList) => ({
  type: "SET_Z_INDEX",
  classList,
});

export const initZIndex = (collection) => ({
  type: "INIT_Z_INDEX",
  collection,
});

export const startSnake = () => ({
  type: "START_SNAKE",
});

export const restartSnake = () => ({
  type: "RESTART_SNAKE",
});
