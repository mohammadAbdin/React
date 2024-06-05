import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
    <div className="navbar-container">
      <h1>Use Reducer</h1>
      <span>
        {" "}
        <FontAwesomeIcon className="cart" icon={faShoppingCart} />
      </span>
    </div>
  );
}

export default Navbar;
