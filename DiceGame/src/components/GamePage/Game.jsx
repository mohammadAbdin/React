import React, { useState, useEffect } from "react";
import Player from "./Player";
import Control from "./Control";
import NewGame from "../newGamePage/NewGame";

function Game({ target, setTarget, setShowGame, showGame }) {
  const [currentPlayer1, setCurrentPlayer1] = useState(0);
  const [currentPlayer2, setCurrentPlayer2] = useState(0);
  const [scorePlayer1, setScorePlayer1] = useState(0);
  const [scorePlayer2, setScorePlayer2] = useState(0);
  const [turn, setTurn] = useState(1);
  const [isFinished, setIsFinished] = useState(false);
  const [player1Message, setPlayer1Message] = useState("Won");
  const [player2Message, setPlayer2Message] = useState("Lose");

  useEffect(() => {
    console.log(scorePlayer1);
    console.log(scorePlayer2);
    if (target == scorePlayer1 || target < scorePlayer2) {
      setPlayer1Message("Won");
      setPlayer2Message("Lose");
      setIsFinished(true);
      setTurn(3);
    } else if (target < scorePlayer1 || target == scorePlayer2) {
      setPlayer2Message("Won");
      setPlayer1Message("Lose");
      setTurn(3);
      setIsFinished(true);
    }
  }, [scorePlayer1, scorePlayer2]);
  useEffect(() => {
    setIsFinished(false);
    setScorePlayer2(0);
    setScorePlayer1(0);
    setTurn(1);
  }, [target]);
  const handleRollDice = (rand1, rand2) => {
    if (turn == 1) {
      if (rand1 + rand2 == 12) setCurrentPlayer1(0);
      else setCurrentPlayer1(currentPlayer1 + rand1 + rand2);
    } else if (turn == 2) {
      if (rand1 + rand2 == 12) setCurrentPlayer2(0);
      else setCurrentPlayer2(currentPlayer2 + rand1 + rand2);
    }
  };
  const handleHold = () => {
    if (!isFinished) {
      if (turn == 1) {
        setScorePlayer1(scorePlayer1 + currentPlayer1);
        setCurrentPlayer1(0);
        setTurn(2);
      } else {
        setScorePlayer2(scorePlayer2 + currentPlayer2);
        setCurrentPlayer2(0);
        if (target == scorePlayer2) {
          //player 2 wins
          setTurn(3);
        } else if (target < scorePlayer2) {
          //player 1 wins
          console.log("player 1wins");
          setTurn(3);
        } else setTurn(1);
      }
    }
  };
  return (
    <>
      {showGame == "Game" ? (
        <div className="game-container">
          <Player
            player="Player1"
            target={target}
            currentPlayer={currentPlayer1}
            setCurrentPlayer={setCurrentPlayer1}
            scorePlayer={scorePlayer1}
            setScorePlayer={setScorePlayer1}
            isFinished={isFinished}
            playerMessage={player1Message}
          />
          <Player
            player="Player2"
            target={target}
            currentPlayer={currentPlayer2}
            setCurrentPlayer={setCurrentPlayer2}
            scorePlayer={scorePlayer2}
            setScorePlayer={setScorePlayer2}
            isFinished={isFinished}
            playerMessage={player2Message}
          />
          <Control
            setShowGame={setShowGame}
            handleRandomNumbers={(rand1, rand2) => {
              handleRollDice(rand1, rand2);
            }}
            handleHold={handleHold}
          />
        </div>
      ) : (
        <NewGame setTarget={setTarget} setShowGame={setShowGame} />
      )}
    </>
  );
}

export default Game;
