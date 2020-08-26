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
import constants from "../constats";

const App = () => {
  const dispatch = useDispatch();

  document.addEventListener("click", (e) => {
    console.log(e.target);
  });

  window.addEventListener("DOMContentLoaded", (event) => {
    dispatch(initZIndex(document.getElementsByClassName("react-draggable")));
  });

  return (
    <div>
      <div className="flexWrapper">
        <div className="flexWrapperVertical">
          <StickyNote tilt={-8}>
            <h1>{constants.hello}</h1>
          </StickyNote>
          <Arrow margin={[30, 0, -50, 160]} />
          <Marker>{constants.drag}</Marker>
        </div>
        <EmptyPage tilt={2} margin={[110, 0, 0, 0]}>
          <h1>{constants.greetings}</h1>
          <img alt="Greetings" src="./img/header_img2.jpg"></img>
        </EmptyPage>
        <div className="flexWrapperVertical">
          <StickyNote tilt={20} margin={[-50, 0, 0, 100]}>
            <h1>{constants.position}</h1>
          </StickyNote>
          <div className="flexWrapper">
            <Dice tilt={-62} />
            <Dice tilt={-12} margin={[-50, 0, 0, 0]} />
          </div>
        </div>
      </div>
      <div className="flexWrapper">
        <Board margin={[0, 0, 0, -52]} />
        <EmptyPage tilt={-12} margin={[130, 0, 0, 152]}>
          <p>{constants.about}</p>
        </EmptyPage>
      </div>
      <div className="flexWrapper">
        <div className="flexWrapperVertical">
          <Marker>My Tech Stack</Marker>
          <Arrow tilt={180} />
        </div>
      </div>
      <div className="flexWrapper">
        <InstantPhoto tilt={20}></InstantPhoto>
        <InstantPhoto tilt={8}></InstantPhoto>
        <InstantPhoto tilt={-2}></InstantPhoto>
        <InstantPhoto tilt={9}></InstantPhoto>
      </div>
      <div className="flexWrapper">
        <InstantPhoto tilt={-10}></InstantPhoto>
        <InstantPhoto tilt={3}></InstantPhoto>
        <InstantPhoto tilt={-9}></InstantPhoto>
        <InstantPhoto tilt={6}></InstantPhoto>
      </div>
    </div>
  );
};

export default App;
