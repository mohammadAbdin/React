import React, { useState, useEffect } from "react";
import axios from "axios";
import Tour from "./Tour";

function Tours({ handlers, setNotInterested, notInterested }) {
  const url = "https://www.course-api.com/react-tours-project";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const handleNotInterested = (tour) => {
    if (!notInterested.includes(tour))
      setNotInterested([...notInterested, tour]);
    console.log(notInterested);
  };
  const handleEmptyTours = () => handlers();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        // console.log(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
    console.log(data);
  }, []);

  if (loading) {
    return <div className="loading"> Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="Tours">
      {data.map((tour) => {
        if (!notInterested.includes(tour))
          return (
            <Tour
              handler={() => {
                handleNotInterested(tour);
              }}
              data={tour}
            />
          );
        else if (notInterested.length == data.length) {
          handleEmptyTours();

          console.log("props");
        }
      })}
    </div>
  );
}

export default Tours;
