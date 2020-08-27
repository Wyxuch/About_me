import React from "react";
import { useDispatch } from "react-redux";
import "../index.scss";
import { initZIndex } from "../actions";
import StickyNote from "../containers/basicElements/StickyNote";
import InstantPhoto from "../containers/basicElements/InstantPhoto";
import EmptyPage from "../containers/basicElements/EmptyPage";
import Marker from "../containers/basicElements/Marker";
import Dice from "../containers/basicElements/Dice";
import Arrow from "../containers/basicElements/Arrow";
import Board from "../containers/basicElements/Board";
import PostCard from "../containers/basicElements/PostCard";
import constants from "../constats";
import Handheld from "../containers/basicElements/Handheld";

const App = () => {
  const dispatch = useDispatch();

  window.addEventListener("DOMContentLoaded", (event) => {
    dispatch(initZIndex(document.getElementsByClassName("react-draggable")));
  });

  return (
    <div>
      <div className="flexWrapper">
        <EmptyPage tilt={2} margin={[0, 0, 0, 0]}>
          <h1>{constants.greetings}</h1>
          <img alt="Greetings" src="./img/header_img2.jpg"></img>
        </EmptyPage>
        <div className="flexWrapperVertical">
          <StickyNote tilt={-8} margin={[0, 0, 0, 4]}>
            <h1>{constants.position}</h1>
          </StickyNote>
          <Arrow margin={[20, 0, -15, 25]} />
          <Marker margin={[1, 0, 0, 12]}>{constants.drag}</Marker>
        </div>
        <div className="flexWrapperVertical">
          <Dice tilt={-12} margin={[0, 0, 0, 25]} />
          <StickyNote tilt={20} margin={[25, 0, 0, 0]}>
            <h1>{constants.hello}</h1>
          </StickyNote>
        </div>
      </div>

      <div className="flexWrapper">
        <Board margin={[10, 0, 0, -42]} />
        <Dice tilt={-62} margin={[5, 0, 0, 0]} />
        <EmptyPage tilt={-2} margin={[10, 0, 0, 1]}>
          <p>{constants.about}</p>
        </EmptyPage>
      </div>

      <div className="flexWrapper">
        <div
          className="flexWrapperVertical"
          style={{ marginLeft: "-20%", marginTop: "-10%" }}
        >
          <Marker>My Tech Stack</Marker>
          <Arrow tilt={180} />
        </div>
      </div>

      <div className="flexWrapper">
        <InstantPhoto tilt={20}>
          <img src="./img/logoHtml.png" alt="HTML5" />
          HTML5
        </InstantPhoto>
        <InstantPhoto tilt={8}>
          <img src="./img/logoSass.png" alt="Sass" />
          Sass
        </InstantPhoto>
        <InstantPhoto tilt={-2}>
          <img src="./img/logoReact.png" alt="React" />
          React
        </InstantPhoto>
        <InstantPhoto tilt={9}>
          <img src="./img/logoRedux.png" alt="Redux" />
          Redux
        </InstantPhoto>
      </div>

      <div className="flexWrapper">
        <InstantPhoto tilt={-10}>
          <img src="./img/logoNode.png" alt="Node.js" />
          Node.js
        </InstantPhoto>
        <InstantPhoto tilt={3}>
          <img src="./img/logoExpress.png" alt="Express.js" />
          Express.js
        </InstantPhoto>
        <InstantPhoto tilt={-9}>
          <img src="./img/logoMongo.png" alt="MongoDB" />
          MongoDB
        </InstantPhoto>
        <InstantPhoto tilt={6}>
          <img src="./img/logoUbuntu.png" alt="Ubuntu Linux" />
          Ubuntu
        </InstantPhoto>
      </div>

      <div className="flexWrapper">
        <div className="flexWrapperVertical">
          <Marker margin={[12, 0, 0, 0]}>
            If You have any questions or want to say "hi", send me a message :)
          </Marker>
          <Arrow margin={[-6, 0, 0, 70]} tilt={70} />
        </div>
        <PostCard tilt={3} margin={[4, 0, 0, 0]} />
      </div>
      <div className="flexWrapper">
        <Handheld tilt={0} margin={[5, 0, 0, 0]} />
        <div className="flexWrapperVertical">
          <Marker margin={[-1, 0, 0, 0]}>
            Or maybe You came here just to play snake? Good luck and have fun!!!
            <p>(high score will be saved for others to beat)</p>
          </Marker>
          <Arrow
            margin={[-3, 0, 0, 0]}
            tilt={-100}
            style={{ transform: "scaley(-1)" }}
          />
        </div>
      </div>
      <p id="footer">
        All work © Jarosław Kowalczyk 2020 • All rights reserved • Made using
        Redux
      </p>
    </div>
  );
};

export default App;
