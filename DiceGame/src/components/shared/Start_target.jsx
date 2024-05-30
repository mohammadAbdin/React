import React, { useState } from "react";

function Start_target({ setShowGame, setTarget }) {
  const [targetInput, setTargetInput] = useState(0);

  const handleInputChange = (e) => {
    setTargetInput(e.target.value);
  };
  const handleStartTheGame = (target) => {
    //   setTarget(target);
    setShowGame("Game");
    setTarget(target);
  };
  return (
    <div className="Start_target">
      <input
        type="number"
        name="name"
        onChange={handleInputChange}
        className="target"
      />
      <button onClick={() => handleStartTheGame(targetInput)} className="start">
        START GAME
      </button>
    </div>
  );
}

export default Start_target;
