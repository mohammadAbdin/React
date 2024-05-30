import { useState } from "react";

import "./App.css";
import Tours_menu from "./Tours_title";
import Tours from "./Tours";

function App() {
  const url = "https://www.course-api.com/react-tours-project";
  const [tours, setTours] = useState("full");
  const [notInterested, setNotInterested] = useState([]);

  const handleEmptyTours = () => {
    setTours("empty");
  };
  const handleRefresh = () => {
    setNotInterested([]);
    setTours("full");
  };

  return (
    <>
      <Tours_menu handlers={() => handleRefresh()} tours={tours} />
      <Tours
        notInterested={notInterested}
        setNotInterested={setNotInterested}
        handlers={() => handleEmptyTours()}
      />
    </>
  );
}

export default App;
