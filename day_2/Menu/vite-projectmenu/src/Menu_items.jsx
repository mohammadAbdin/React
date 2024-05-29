import React, { useState } from "react";
import data from "./data.js";

function Menu_items({ data }) {
  // const [displayMenu, setDisplayMenu] = useState([...data]);

  const displayMenu = data;
  return (
    <div className="food-menu">
      {displayMenu.map((food) => {
        return (
          <div className="menu-item">
            <img src={`/src/assets${food.img}`} alt="" />
            <div className="important-info">
              <p className="title">{food.title}</p>
              <p className="price">{food.price}</p>
            </div>
            <p className="desc">{food.desc}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Menu_items;
