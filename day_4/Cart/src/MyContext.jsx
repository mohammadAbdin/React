import { createContext, useContext, useState } from "react";
import cartItems from "./data";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  // const [counter, setCounter] = useState(0);

  // const increaseCounter = () => setCounter((prev) => prev + 1);
  // const decreaseCounter = () => setCounter((prev) => prev - 1);
  // const resetCounter = () => setCounter(0);
  // const setToGoku = () => setCounter(9001);

  const [data, setData] = useState(cartItems);
  const handleRemove = (item) => {
    cartItems.map((phone, index) => {
      if (phone == item) {
        cartItems.splice(index, 1);
      }
    });
    setData([...cartItems]);
  };
  const handleIncrement = (item) => {
    cartItems.map((phone, index) => {
      if (phone == item) {
        cartItems[index].amount++;
      }
    });
    setData([...cartItems]);
  };
  const handleDecrement = (item) => {
    cartItems.map((phone, index) => {
      if (phone == item) {
        cartItems[index].amount--;
      }
    });
    setData([...cartItems]);
  };
  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        handleRemove,
        handleIncrement,
        handleDecrement, // setToGoku,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

export const useAppContext = () => {
  return useContext(AppContext);
};
