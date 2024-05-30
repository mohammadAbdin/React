import React from "react";
import Instructurs from "./Instructurs";
import Start_target from "../shared/Start_target";

function Menu_instructurs({ setShowGame, setTarget }) {
  return (
    <div className="Menu_instructurs">
      <div className="title">
        <h2>Game instructures</h2>
        <Instructurs />
      </div>
      <h2>Please select the target</h2>
      <Start_target setTarget={setTarget} setShowGame={setShowGame} />
    </div>
  );
}

export default Menu_instructurs;
