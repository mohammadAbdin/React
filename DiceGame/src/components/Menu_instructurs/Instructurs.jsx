import React from "react";

function Instructurs() {
  const instructurs = [
    'in your turn -roll the dice(at least once) and accumulate the result in "current".',
    'You can roll again or click "Hold" to save the points from "Current" and end the turn.',
    'Note: if you get 6-6 - you will lose all the points from "current" and the turn will go to your oppenent.',
    "if you managed to reach exactly the target score -you win if you passed it you loose.",
  ];
  return (
    <ul>
      {instructurs.map((item, index) => (
        <li className="instructur" key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default Instructurs;
