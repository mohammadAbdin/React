import { useEffect, useState } from "react";
import data from "./data.js";
import "./App.css";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function App() {
  const [index, setIndex] = useState(0);
  const [person, setPerson] = useState(data[index]);
  // console.log(person);

  const handleFaChevronRight = () => {
    setIndex(index + 1);

    if (index === data.length - 1) {
      setIndex(0);
    }
    // console.log(i);
    setPerson(data[index]);
    // console.log(person);
  };

  const handleFaChevronLeft = () => {
    // console.log(i);
    setIndex((prev) => prev - 1);

    // console.log(i);
    if (index <= 0) {
      console.log("it is smaller");
      setIndex(data.length - 1);
    }
    // console.log(i);
    setPerson(data[index]);
  };
  const handleSuprize = () => {
    setIndex(Math.floor(Math.random() * data.length));
    setPerson(data[index]);
  };

  return (
    <>
      <div className="person">
        <div className="image-container">
          <img className="person-img" src={`${person.image}`} />
          <span className="quote-icon">
            <FaQuoteRight className="quote" />
          </span>
        </div>
        <h1>{person.name}</h1>
        <p className="job">
          {person.job}index in array:{person.id}+{index}
        </p>
        <p className="text">{person.text}</p>
        <div className="FaChevrons">
          <FaChevronLeft onClick={handleFaChevronLeft} />
          <FaChevronRight onClick={handleFaChevronRight} />
        </div>
        <button onClick={handleSuprize}>Surprize me!</button>
      </div>
    </>
  );
}

export default App;
