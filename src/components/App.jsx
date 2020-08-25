import React from "react";
import "../index.scss";
import StickyNote from "../containers/basicElements/StickyNote";
// import InstantPhoto from "../containers/basicElements/InstantPhoto";
import EmptyPage from "../containers/basicElements/EmptyPage";
import Marker from "../containers/basicElements/Marker";
import constants from "../constats";

const App = () => (
  <div>
    <div className="flexWrapper">
      <StickyNote tilt={8}>
        <h1>{constants.hello}</h1>
      </StickyNote>
      <EmptyPage tilt={2}>
        <h1>I'm Jarek, nice to see you!</h1>
        <img src="./img/header_img2.jpg"></img>
      </EmptyPage>
    </div>
    <div className="flexWrapper">
      <Marker />
    </div>
  </div>
);

export default App;
