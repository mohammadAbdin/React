import React, { useState, useRef } from "react";
import text from "../data";
function LoremIpsum() {
  const [inputValue, setInputValue] = useState(1);
  const articleRef = useRef(null);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleGenerate = (e) => {
    articleRef.current.innerHTML = "";
    e.preventDefault();
    console.log(articleRef.current);
    for (let i = 0; i < inputValue; i++) {
      <p></p>;
      console.log((articleRef.current.innerHTML += `<p>${text[i]}</p>`));
    }
  };

  return (
    <div className="container">
      <form>
        <h1>Tired of boring Lorem ipsum?</h1>
        <section className="generating-section">
          <p>Paragraphs:</p>
          <input
            value={inputValue}
            onChange={handleInputChange}
            type="number"
          />
          <button onClick={handleGenerate}>Generate</button>
        </section>
      </form>
      <article className="article" ref={articleRef}></article>
    </div>
  );
}

export default LoremIpsum;
