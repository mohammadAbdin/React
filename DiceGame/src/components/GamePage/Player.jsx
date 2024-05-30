import React, { useState } from "react";

function Player(props) {
  const {
    player,
    target,
    scorePlayer,
    setScorePlayer,
    currentPlayer,
    setCurrentPlayer,
    isFinished,
    playerMessage,
  } = props;
  const spanClassName = playerMessage === "Won" ? "Won" : "Lose";
  console.log(player + " :" + playerMessage);
  return (
    <div className="player">
      <h2 className="playerName">{player}</h2>
      <h1 className="playerScore">{scorePlayer}</h1>
      {isFinished ? (
        <span>
          You <span className={playerMessage}>{playerMessage}</span>{" "}
        </span>
      ) : (
        <div></div>
      )}
      <div className="playerCurrent">
        <p>Current</p>
        <p>{currentPlayer}</p>
      </div>
    </div>
  );
}

export default Player;
