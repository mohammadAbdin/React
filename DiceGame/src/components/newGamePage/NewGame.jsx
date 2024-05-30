import React from "react";
import Start_target from "../shared/Start_target";

function NewGame({ setShowGame, setTarget }) {
  setTarget(0);
  return (
    <div className="Menu_instructurs">
      <h2>Please select the target</h2>
      <Start_target setTarget={setTarget} setShowGame={setShowGame} />
    </div>
  );
}

export default NewGame;
