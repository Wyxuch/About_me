import React from "react";
import "../index.css";
import StickyNote from "../containers/basicElements/StickyNote";
// import InstantPhoto from "../containers/basicElements/InstantPhoto";
import EmptyPage from "../containers/basicElements/EmptyPage";
import Marker from "../containers/basicElements/Marker";
import constants from "../constats";

const App = () => (
  <div>
    <div className="flexWrapper">
      <Marker />
    </div>
    <div className="flexWrapper">
      <StickyNote>
        <h1>{constants.hello}</h1>
      </StickyNote>
      <EmptyPage>
        <img src="%PUBLIC_URL%/header_img2.jpg"></img>
      </EmptyPage>
    </div>
  </div>
);

export default App;
