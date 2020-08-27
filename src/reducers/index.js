const initialState = {
  zIndexList: {},
  snake: [
    { x: 100, y: 100 },
    { x: 95, y: 100 },
    { x: 90, y: 100 },
    { x: 85, y: 100 },
    { x: 80, y: 100 },
  ],
};

const store = (state = initialState, action) => {
  switch (action.type) {
    case "SET_Z_INDEX":
      return updateIndex(state, action);
    case "INIT_Z_INDEX":
      return initIndex(state, action);
    case "START_SNAKE":
      return startSnake(state, action);
    case "RESTART_SNAKE":
      return restartSnake(state, action);
    case "FORM_SUBMIT":
      return formSubmit(state, action);

    default:
      return state;
  }
};

export default store;

const updateIndex = (state, action) => {
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

// ***SNAKE_GAME***

const startSnake = (state, action) => {
  const nextState = { ...state };

  const canvas = document.getElementById("display");
  const ctx = canvas.getContext("2d");

  canvas.width = 200;
  canvas.height = 200;

  const LEFT_KEY = 37;
  const RIGHT_KEY = 39;
  const UP_KEY = 38;
  const DOWN_KEY = 40;

  const board_background = ctx.createLinearGradient(0, 0, 200, 200);
  board_background.addColorStop(0, "rgba(165,211,1,1)");
  board_background.addColorStop(0.07, "rgba(181,206,88,1)");
  board_background.addColorStop(0.23, "rgba(191,209,127,1)");
  board_background.addColorStop(0.32, "rgba(165,211,1,1)");
  board_background.addColorStop(0.39, "rgba(192,209,133,1)");
  board_background.addColorStop(1, "rgba(165,211,1,1)");

  const snake_color = "#00000";

  let changing_direction = false;

  document.addEventListener("keydown", change_direction);

  let score = 0;

  let food_x;
  let food_y;
  let dx = 5;
  let dy = 0;

  ctx.fillStyle = board_background;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  main();
  gen_food();

  function main() {
    if (has_game_ended()) return;

    changing_direction = false;
    setTimeout(function onTick() {
      clear_board();
      drawFood();
      move_snake();
      drawSnake();
      main();
    }, 100);
  }

  function drawSnake() {
    state.snake.forEach((snakePart) => {
      drawSnakePart(snakePart);
    });
  }

  function drawFood() {
    ctx.fillStyle = "#000000";
    ctx.fillRect(food_x, food_y, 5, 5);
  }

  function random_food(min, max) {
    return Math.round((Math.random() * (max - min) + min) / 5) * 5;
  }

  function gen_food() {
    food_x = random_food(0, canvas.width - 5);
    food_y = random_food(0, canvas.height - 5);
    state.snake.forEach(function has_snake_eaten_food(part) {
      const has_eaten = part.x === food_x && part.y === food_y;
      if (has_eaten) gen_food();
    });
  }

  function clear_board() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function drawSnakePart(snakePart) {
    ctx.fillStyle = snake_color;
    ctx.fillRect(snakePart.x, snakePart.y, 5, 5);
  }

  function has_game_ended() {
    for (let i = 4; i < state.snake.length; i++) {
      if (
        state.snake[i].x === state.snake[0].x &&
        state.snake[i].y === state.snake[0].y
      ) {
        nextState.highScore = score;
        return true;
      }
    }
    const hitLeftWall = state.snake[0].x < 0;
    const hitRightWall = state.snake[0].x > canvas.width - 5;
    const hitToptWall = state.snake[0].y < 0;
    const hitBottomWall = state.snake[0].y > canvas.height - 5;

    if (hitLeftWall || hitRightWall || hitToptWall || hitBottomWall) {
      nextState.highScore = score;
      return true;
    }
  }

  function change_direction(event) {
    if (changing_direction) return;
    changing_direction = true;
    const keyPressed = event.keyCode;
    const goingUp = dy === -5;
    const goingDown = dy === 5;
    const goingRight = dx === 5;
    const goingLeft = dx === -5;
    if (keyPressed === LEFT_KEY && !goingRight) {
      dx = -5;
      dy = 0;
    }
    if (keyPressed === UP_KEY && !goingDown) {
      dx = 0;
      dy = -5;
    }
    if (keyPressed === RIGHT_KEY && !goingLeft) {
      dx = 5;
      dy = 0;
    }
    if (keyPressed === DOWN_KEY && !goingUp) {
      dx = 0;
      dy = 5;
    }
  }

  function move_snake() {
    const head = { x: state.snake[0].x + dx, y: state.snake[0].y + dy };
    state.snake.unshift(head);
    const has_eaten_food =
      state.snake[0].x === food_x && state.snake[0].y === food_y;
    if (has_eaten_food) {
      score += 10;
      gen_food();
    } else {
      state.snake.pop();
    }
  }

  return nextState;
};

const restartSnake = (state, action) => {
  const nextState = { ...state };
  nextState.snake = [
    { x: 100, y: 100 },
    { x: 95, y: 100 },
    { x: 90, y: 100 },
    { x: 85, y: 100 },
    { x: 80, y: 100 },
  ];

  const canvas = document.getElementById("display");
  const ctx = canvas.getContext("2d");

  const board_background = ctx.createLinearGradient(0, 0, 200, 200);
  board_background.addColorStop(0, "rgba(165,211,1,1)");
  board_background.addColorStop(0.07, "rgba(181,206,88,1)");
  board_background.addColorStop(0.23, "rgba(191,209,127,1)");
  board_background.addColorStop(0.32, "rgba(165,211,1,1)");
  board_background.addColorStop(0.39, "rgba(192,209,133,1)");
  board_background.addColorStop(1, "rgba(165,211,1,1)");

  ctx.fillStyle = board_background;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  setTimeout(() => {
    startSnake(state, action);
  }, 1000);

  return nextState;
};

// ***FORM SUBMIT***

const formSubmit = (state, action) => {
  const newState = { ...state };

  console.log(action.e);

  return newState;
};
