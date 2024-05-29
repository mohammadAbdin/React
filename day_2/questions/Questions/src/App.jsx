// import { useState } from "react";
// import data from "./data.js";
// import "./App.css";

// function App() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const handleClick = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <>
//       <div className="container">
//         <h1>Questions</h1>
//         {data.map((item, index) => {
//           const isOpen = openIndex === index;
//           return (
//             <div className="question-container" key={index}>
//               <div className="question">
//                 <h3>{item.title}</h3>
//                 <button
//                   onClick={() => handleClick(index)}
//                   className="open The Question"
//                 >
//                   {isOpen ? "-" : "+"}
//                 </button>
//               </div>
//               {isOpen && <div className="answer">{item.info}</div>}
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export default App;
import { useState } from "react";
import data from "./data.js";
import "./App.css";

function App() {
  const [openIndices, setOpenIndices] = useState([]);

  const handleClick = (index) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Questions</h1>
        {data.map((item, index) => {
          const isOpen = openIndices.includes(index);
          return (
            <div className="question-container" key={index}>
              <div className="question">
                <h3>{item.title}</h3>
                <button
                  onClick={() => handleClick(index)}
                  className="open The Question"
                >
                  {isOpen ? "-" : "+"}
                </button>
              </div>
              {isOpen && <div className="answer">{item.info}</div>}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
