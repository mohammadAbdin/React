import { useState } from "react";

import "./App.css";
import Back_ground from "./components/Back_ground";
import Game from "./components/GamePage/Game";
import Menu_instructions from "./components/Menu_instructurs/Menu_instructurs";

function App() {
  const [showGame, setShowGame] = useState("Menu_instructions");
  const [target, setTarget] = useState(0);
  return (
    <>
      <Back_ground />
      {showGame == "Menu_instructions" ? (
        <Menu_instructions setTarget={setTarget} setShowGame={setShowGame} />
      ) : (
        <Game
          target={target}
          setTarget={setTarget}
          showGame={showGame}
          setShowGame={setShowGame}
        />
      )}
    </>
  );
}

export default App;
