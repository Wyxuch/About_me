export const setZIndex = (classList) => ({
  type: "SET_Z_INDEX",
  classList,
});

export const initZIndex = (collection) => ({
  type: "INIT_Z_INDEX",
  collection,
});
