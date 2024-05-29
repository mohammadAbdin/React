import { useState } from "react";
import data from "./data.js";
import "./App.css";
import Catagories from "./Catagories";
import item1 from "./assets/images/item-1.jpeg";
import Menu_items from "./Menu_items.jsx";

function App() {
  const arr = ["All", "Breakfast", "Lunch", "Shakes"];
  const [displayMenu, setDisplayMenu] = useState([...data]);

  // console.log(i);
  const handleMenuType = (type) => {
    setDisplayMenu((currentDisplayMenu) => {
      if (type === "All") {
        return [...data];
      } else {
        return data.filter((item) => {
          return item.category.toLowerCase() === type.toLowerCase();
        });
      }
    });

    console.log(displayMenu);
  };
  return (
    <>
      <h1>Our Menu</h1>
      <hr />
      <Catagories handlers={handleMenuType} />
      <Menu_items data={displayMenu} />
    </>
  );
}

export default App;
