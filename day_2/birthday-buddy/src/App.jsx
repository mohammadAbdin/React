import { useState } from "react";
import data from "./data.js";
import "./App.css";

function App() {
  const [people, setPeople] = useState(data);
  const handleClearAll = () => {
    setPeople([]);
    console.log(data);
  };

  return (
    <>
      <div className="container">
        <h2>{people.length} Birthday Today</h2>
        {people.map((person) => {
          return (
            <div className="card">
              <img src={person.image} alt={person.name} />
              <div className="details">
                <h5>{person.name}</h5>
                <p>{person.age} Years</p>
              </div>
            </div>
          );
        })}
        <button onClick={handleClearAll}>Clear All</button>
      </div>
    </>
  );
}

export default App;
