import React, { useEffect, useState } from "react";

function SortingAlgoVisualizer({arrSize, viewSpeed}) {
  const [bars, setBars] = useState([]);
  const [selectedBarIndex, setSelectedBarIndex] = useState([null, null]);

  
  const reverseSpeed = (100 - viewSpeed) + 25;
  
  console.log(arrSize, reverseSpeed);

  useEffect(() => {
    generateArray();
  }, [arrSize]);

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const generateArray = () => {
    const bars = [];
    for (let i = 0; i < arrSize; i++) {
      bars.push(randomIntFromInterval(5, 400));
    }
    setBars(bars);
  };

  const bubbleSort = async() => {
    const arrForBubbleSort = [...bars];
    let isSwapped = false;

    for(let i = 0 ; i < arrForBubbleSort.length - 1 ; i++) {
        for(let j = 0 ; j < arrForBubbleSort.length - i -1 ; j++) {
            if(arrForBubbleSort[j] > arrForBubbleSort[j + 1]) {
                [arrForBubbleSort[j], arrForBubbleSort[j+1]] = [arrForBubbleSort[j+1], arrForBubbleSort[j]];

                setSelectedBarIndex([j,j+1]);

                await new Promise((resolve) => {
                  setTimeout(() => {
                    setBars([...arrForBubbleSort]);
                    resolve();
                  }, reverseSpeed); // Adjust the delay time as needed
                });
                isSwapped = true;    
            }
        }

        if (isSwapped === false)
            break;
    }

    setSelectedBarIndex([null,null]);
    
  };


  return (
    <div className="container">
      <div className="bar-chart">
        {bars.map((value, index) => (
          <div key={index} className={`bar ${selectedBarIndex.includes(index) ? 'selected' : ''}`} style={{ height: `${value}px` }} />
        ))}
        <div className="buttons">
          <button onClick={generateArray} className="btn">
            Generate Array
          </button>
          <button onClick={bubbleSort} className="btn">
            Bubble Sort
          </button>
          <button disabled className="btn">
            Merge Sort
          </button>
        </div>
      </div>
    </div>
  );
}

export default SortingAlgoVisualizer;
