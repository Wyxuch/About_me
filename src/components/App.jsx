import React from "react";
import "../index.css";
import StickyNote from "../containers/basicElements/StickyNote";
import InstantPhoto from "../containers/basicElements/InstantPhoto";
import EmptyPage from "../containers/basicElements/EmptyPage";
import Marker from "../containers/basicElements/Marker";

const App = () => (
  <div>
    <div className="flexWrapper">
      <Marker />
    </div>
    <div className="flexWrapper">
      <InstantPhoto />
      <EmptyPage />
      <StickyNote />
    </div>
  </div>
);

export default App;
