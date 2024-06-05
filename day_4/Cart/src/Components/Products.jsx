import React, { useState, useContext } from "react";
// import cartItems from "../data";
import { AppContext } from "../MyContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
function Products() {
  const { data, handleRemove, handleIncrement, handleDecrement } =
    useContext(AppContext);
  return (
    <div className="products-container">
      <h1>Your Bag</h1>
      {data.map((item) => {
        // console.log(item.amount > 0);
        // item.amount > 0 ?
        if (item.amount > 0)
          return (
            <div className="product" key={item.id}>
              <img src={item.img} alt="" />
              <div className="details">
                <p>{item.title}</p>
                <p>{item.price}</p>
                <button onClick={() => handleRemove(item)}>remove</button>
              </div>
              <div className="amount">
                <div className="arrow-up">
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    onClick={() => handleIncrement(item)}
                  />
                </div>
                <div className="number">{item.amount}</div>
                <div className="arrow-down">
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    onClick={() => handleDecrement(item)}
                  />
                </div>
              </div>
            </div>
          );
      })}
    </div>
  );
}

export default Products;
