import React, { useState } from "react";
function Control(props) {
  const { setShowGame, handleRandomNumbers, handleHold } = props;
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);

  const handleRollDice = () => {
    let random1 = Math.floor(Math.random() * 6) + 1;
    let random2 = Math.floor(Math.random() * 6) + 1;
    setDice1(random1);
    setDice2(random2);
    handleRandomNumbers(random1, random2);
  };
  const handleNewGame = () => {
    setShowGame("New Game");
  };
  return (
    <div className="control-container">
      <button className="new-game" onClick={handleNewGame}>
        NEW GAME
      </button>
      <img src={`src/assets/images/dice-${dice1}.png`} alt="" />
      <img src={`src/assets/images/dice-${dice2}.png`} alt="" />

      <button className="roll-dice" onClick={handleRollDice}>
        ROLL DICE
      </button>
      <button className="hold" onClick={handleHold}>
        HOLD
      </button>
    </div>
  );
}

export default Control;
