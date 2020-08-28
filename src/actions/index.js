export const setZIndex = (classList) => ({
  type: "SET_Z_INDEX",
  classList,
});

export const initZIndex = (collection) => ({
  type: "INIT_Z_INDEX",
  collection,
});

export const snakeScore = (score) => ({
  type: "SNAKE_SCORE",
  score,
});

export const handleSubmit = (e) => ({
  type: "FORM_SUBMIT",
  e,
});
