import React, { useState } from "react";

function Tour(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  const { handler, data } = props;
  return (
    <div className="tour">
      <img src={`${data.image}`} alt="" />
      <div className="details">
        <h4>{data.name}</h4>
        <div className="info">
          {isExpanded ? (
            <span>{data.info}</span>
          ) : (
            <span>
              {data.info.substring(0, 200)}
              <span>...</span>
              <span onClick={handleReadMore} className="ReadMore">
                Read More
              </span>
            </span>
          )}
          {isExpanded && (
            <span onClick={handleReadMore} className="ReadMore">
              Read Less
            </span>
          )}
        </div>
        <button
          onClick={() => {
            handler(data);
          }}
        >
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default Tour;
