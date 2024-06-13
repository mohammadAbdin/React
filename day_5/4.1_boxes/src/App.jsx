import { useState } from "react";
import Block from "./Block";
import "./App.css";

function App() {
  return (
    <>
      <div className="box1">
        <div className="box2">
          <div className="box3">
            <Block />
            <Block />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
