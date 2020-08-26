const initialState = {
  zIndexList: {},
};

const store = (state = initialState, action) => {
  switch (action.type) {
    case "SET_Z_INDEX":
      return updateIndex(state, action);
    case "INIT_Z_INDEX":
      return initIndex(state, action);
    default:
      return state;
  }
};

export default store;

const updateIndex = (state, action) => {
  console.log("update");
  const nextState = { ...state };
  const classes = action.classList.split(" ");
  classes.forEach((el) => {
    if (nextState.zIndexList[el]) {
      //finds highest z-index
      const highestZIndexKey = Object.keys(
        nextState.zIndexList
      ).reduce((a, b) =>
        nextState.zIndexList[a] > nextState.zIndexList[b] ? a : b
      );
      const highestZIndexValue = nextState.zIndexList[highestZIndexKey];
      if (!(highestZIndexValue === nextState.zIndexList[el])) {
        for (const key in nextState.zIndexList) {
          nextState.zIndexList[key] > nextState.zIndexList[el] &&
            nextState.zIndexList[key]--;
          document.getElementsByClassName(
            key
          )[0].parentElement.parentElement.style.zIndex =
            nextState.zIndexList[key];
        }
        nextState.zIndexList[el] = highestZIndexValue;
        document.getElementsByClassName(
          el
        )[0].parentElement.parentElement.style.zIndex = highestZIndexValue;
      }
    }
  });

  return nextState;
};

const initIndex = (state, action) => {
  const nextState = { ...state };

  [...action.collection].forEach((el, index) => {
    el.firstChild.classList.add(`uniqueIndexID${index}`);
    el.parentElement.style.zIndex = index + 1;
    nextState.zIndexList[`uniqueIndexID${index}`] = index + 1;
  });

  return nextState;
};
