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
      <StickyNote tilt={-8}>
        <h1>{constants.hello}</h1>
      </StickyNote>
      <EmptyPage tilt={2} margin={[110, 0, 0, 0]}>
        <h1>I'm Jarek, nice to see you!</h1>
        <img src="./img/header_img2.jpg"></img>
      </EmptyPage>
      <StickyNote tilt={20} margin={[-50, 0, 0, 100]}>
        <h1>Full Stack Web Developer</h1>
      </StickyNote>
    </div>
    <div className="flexWrapper">
      <Marker tilt={20} margin={[-350, 0, 0, 900]}>
        Drag Me! :)
      </Marker>
    </div>
  </div>
);

export default App;
