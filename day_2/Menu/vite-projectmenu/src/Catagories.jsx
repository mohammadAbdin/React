import React from "react";

function Catagories(props) {
  const arr = ["All", "Breakfast", "Lunch", "Shakes"];
  return (
    <div className="menu-types">
      {arr.map((item) => {
        return (
          <div className="menu-type" onClick={() => props.handlers(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default Catagories;
