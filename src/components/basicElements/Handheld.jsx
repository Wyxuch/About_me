import React from "react";

class Handheld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      margin: !props.margin ? [0, 0, 0, 0] : props.margin,
      tilt: !props.tilt ? 0 : props.tilt,
      updateHighscore: props.snakeScore,
      score: 0,
      highScore: 0,
      inProgress: false,
    };

    this.startSnake = this.startSnake.bind(this);
  }

  startSnake = () => {
    if (this.state.inProgress) return;
    this.setState({ score: 0 });

    this.setState({ inProgress: true });

    const snake = [
      { x: 100, y: 100 },
      { x: 95, y: 100 },
      { x: 90, y: 100 },
      { x: 85, y: 100 },
      { x: 80, y: 100 },
    ];

    const canvas = document.getElementById("display");
    const ctx = canvas.getContext("2d");

    document.getElementById("handheld").focus((e) => {
      e.preventDefault();
      document.body.focus({ preventScroll: true });
    });

    canvas.width = 200;
    canvas.height = 200;

    const LEFT_KEY = "KeyA";
    const RIGHT_KEY = "KeyD";
    const UP_KEY = "KeyW";
    const DOWN_KEY = "KeyS";

    const board_background = ctx.createLinearGradient(0, 0, 200, 200);
    board_background.addColorStop(0, "rgba(165,211,1,1)");
    board_background.addColorStop(0.07, "rgba(181,206,88,1)");
    board_background.addColorStop(0.23, "rgba(191,209,127,1)");
    board_background.addColorStop(0.32, "rgba(165,211,1,1)");
    board_background.addColorStop(0.39, "rgba(192,209,133,1)");
    board_background.addColorStop(1, "rgba(165,211,1,1)");

    const snake_color = "#00000";

    let changing_direction = false;

    let food_x;
    let food_y;
    let dx = 5;
    let dy = 0;

    ctx.fillStyle = board_background;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const main = () => {
      if (has_game_ended()) {
        this.setState({ inProgress: false });
        if (this.state.score > this.state.highScore) {
          this.setState({ highScore: this.state.score });
          this.state.updateHighscore(this.state.score);
        }
        return;
      }

      changing_direction = false;
      setTimeout(() => {
        clear_board();
        drawFood();
        move_snake();
        drawSnake();
        main();
      }, 100);
    };

    const drawSnake = () => {
      snake.forEach((snakePart) => {
        drawSnakePart(snakePart);
      });
    };

    const drawFood = () => {
      ctx.fillStyle = "#000000";
      ctx.fillRect(food_x, food_y, 5, 5);
    };

    const random_food = (min, max) => {
      return Math.round((Math.random() * (max - min) + min) / 5) * 5;
    };

    const gen_food = () => {
      food_x = random_food(0, canvas.width - 5);
      food_y = random_food(0, canvas.height - 5);
      snake.forEach((part) => {
        const has_eaten = part.x === food_x && part.y === food_y;
        if (has_eaten) gen_food();
      });
    };

    const clear_board = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    const drawSnakePart = (snakePart) => {
      ctx.fillStyle = snake_color;
      ctx.fillRect(snakePart.x, snakePart.y, 5, 5);
    };

    const has_game_ended = () => {
      for (let i = 4; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
          return true;
        }
      }
      const hitLeftWall = snake[0].x < 0;
      const hitRightWall = snake[0].x > canvas.width - 5;
      const hitToptWall = snake[0].y < 0;
      const hitBottomWall = snake[0].y > canvas.height - 5;

      if (hitLeftWall || hitRightWall || hitToptWall || hitBottomWall) {
        return true;
      }
    };

    const change_direction = (event, code) => {
      if (changing_direction) return;
      changing_direction = true;
      const keyPressed = event ? event.code : code;
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
    };

    const move_snake = () => {
      const head = { x: snake[0].x + dx, y: snake[0].y + dy };
      snake.unshift(head);
      const has_eaten_food = snake[0].x === food_x && snake[0].y === food_y;
      if (has_eaten_food) {
        this.setState({ score: this.state.score + 1 });
        gen_food();
      } else {
        snake.pop();
      }
    };

    const leftConsoleKey = document.getElementById("leftButton");
    const righttConsoleKey = document.getElementById("rightButton");
    const upConsoleKey = document.getElementById("upButton");
    const downConsoleKey = document.getElementById("downButton");

    leftConsoleKey.addEventListener("click", (e) => {
      change_direction(false, LEFT_KEY);
    });
    righttConsoleKey.addEventListener("click", (e) => {
      change_direction(false, RIGHT_KEY);
    });
    upConsoleKey.addEventListener("click", (e) => {
      change_direction(false, UP_KEY);
    });
    downConsoleKey.addEventListener("click", (e) => {
      change_direction(false, DOWN_KEY);
    });

    document.addEventListener("keypress", change_direction);

    gen_food();
    main();
  };
  render() {
    const styles = {
      transform: `rotate(${this.state.tilt}deg)`,
    };

    const parentMargin = {
      margin: `${this.state.margin[0]}% ${this.state.margin[1]}% ${this.state.margin[2]}% ${this.state.margin[3]}%`,
    };
    return (
      <div style={parentMargin} className="elementWrapper">
        <div className="handheld" id="handheld" style={styles}>
          <div id="buttonsLeft">
            <div className="flexWrapper">
              <button id="upButton" />
            </div>
            <div className="flexWrapper">
              <button id="leftButton" />
              <button id="rightButton" />
            </div>
            <div className="flexWrapper">
              <button id="downButton" />
            </div>
          </div>
          <div id="screen">
            <canvas id="display"></canvas>
          </div>

          <div className="flexWrapperVertical">
            <div className="buttonsWrapper">
              <p>Score</p>
              <div id="score" className="scoreDisplay">
                {this.state.score}
              </div>
            </div>
            <div className="buttonsWrapper">
              <p>High&nbsp;Score</p>
              <div id="highScore" className="scoreDisplay">
                {" "}
                {this.state.highScore}
              </div>
            </div>

            <div id="buttonsRight">
              <div className="buttonsWrapper">
                <button id="startButton" onClick={this.startSnake} />
                <p>Start/Restart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Handheld;
