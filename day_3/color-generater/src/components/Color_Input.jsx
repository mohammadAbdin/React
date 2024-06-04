import React, { useState } from "react";
import Values from "values.js";
import Colors_container from "./Colors_container";
function Color_Input() {
  const [color, setColor] = useState("#00000");
  const [colors, setColors] = useState("");
  const handleOnChangeColor = (e) => {
    setColor(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setColors(new Values(color).all(10));
  };

  //   console.log();

  return (
    <>
      <section className="input-container">
        <h1>Color Generator</h1>
        {/* <div className="inputs"> */}
        <form className="inputs">
          <input
            className="input color"
            type="color"
            onChange={handleOnChangeColor}
          />

          <input value={color} className="input text" type="text" />
          <button style={{ backgroundColor: color }} onClick={handleSubmit}>
            Submit
          </button>
        </form>
        {/* </div> */}
      </section>
      <Colors_container colors={colors} />
    </>
  );
}

export default Color_Input;

// at Color_Input (http://localhost:5173/src/components/Color_Input.jsx?t=1717491940726:14:31)
