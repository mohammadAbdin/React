import React, { useState } from "react";

function Colors_container({ colors }) {
  const styleWhite = {
    color: "white",
  };
  const styleBlack = {
    color: "black",
  };
  return (
    <div className="Colors_container">
      {colors &&
        colors.map((color, index) => {
          console.log(index);
          return (
            <div
              className="colorDiv"
              style={{
                backgroundColor: `rgb(${color.rgb})`,
              }}
            >
              {/* {(style.color = "white") : null} */}
              <p style={index > colors.length / 2 ? styleWhite : styleBlack}>
                {color.weight}%
              </p>
              <p style={index > colors.length / 2 ? styleWhite : styleBlack}>
                #{color.hex}
              </p>
            </div>
          );
        })}
    </div>
  );
}

export default Colors_container;
