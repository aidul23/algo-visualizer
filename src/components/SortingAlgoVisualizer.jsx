import React, { useEffect, useState } from "react";

function SortingAlgoVisualizer(props) {
  const [bars, setBars] = useState([]);

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const generateArray = () => {
    const bars = [];
    for (let i = 0; i < 100; i++) {
      bars.push(randomIntFromInterval(5, 400));
    }
    setBars(bars);
  };

  const sortArr = () => {
    const sortedArr = [...bars];
    sortedArr.sort((a,b) => a-b);
    setBars(sortedArr);
  };

  useEffect(() => {
    generateArray();
  }, []);


  return (
    <div className="container">
      <div className="bar-chart">
        {bars.map((value, index) => (
          <div key={index} className="bar" style={{ height: `${value}px` }} />
        ))}
        <div className="buttons">
          <button onClick={generateArray} className="btn">
            Generate Array
          </button>
          <button onClick={sortArr} className="btn">
            Bubble Sort
          </button>
          <button onClick={sortArr} className="btn">
            Sort
          </button>
        </div>
      </div>
    </div>
  );
}

export default SortingAlgoVisualizer;
