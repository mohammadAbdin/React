import React, { useEffect, useState } from "react";

function Tours_menu({ tours, handlers }) {
  const [title, setTitle] = useState("Our Tours");
  console.log(tours);
  useEffect(() => {
    if (tours == "empty") {
      setTitle("No Tours Left");
      console.log(title);
    } else if (tours == "full") {
      setTitle("our Tours");
    }
  }, [tours]);
  return (
    <>
      <h3>{title}</h3>
      {title === "No Tours Left" ? (
        <button
          className="refresh"
          onClick={() => {
            handlers();
          }}
        >
          Refresh
        </button>
      ) : null}
    </>
  );
}

export default Tours_menu;
