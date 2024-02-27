import React, { useEffect, useState } from "react";

function SortingAlgoVisualizer(props) {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    generateArray();
  }, []);

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

//   function swap(arr, index1, index2) {
//     if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
//         return arr;
//     }

//     [arr[index1], arr[index2]] = [arr[index2], arr[index1]];

//     return arr;
// }

  const sortArr = () => {
    const sortedArr = [...bars];
    sortedArr.sort((a,b) => a-b);
    setBars(sortedArr);
  };

  const bubbleSort = () => {
    const arrForBubbleSort = [...bars];
    let isSwapped = false;

    for(let i = 0 ; i < arrForBubbleSort.length - 1 ; i++) {
        for(let j = 0 ; j < arrForBubbleSort.length - i -1 ; j++) {
            if(arrForBubbleSort[j] > arrForBubbleSort[j + 1]) {
                [arrForBubbleSort[j], arrForBubbleSort[j+1]] = [arrForBubbleSort[j+1], arrForBubbleSort[j]];
                isSwapped = true;
            }
        }

        if (isSwapped === false)
            break;
    }
    setBars(arrForBubbleSort);
  };

  


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
          <button onClick={bubbleSort} className="btn">
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
