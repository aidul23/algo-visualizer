import React, { useCallback, useEffect, useState } from "react";

function SortingAlgoVisualizer({ arrSize, viewSpeed }) {
  const [bars, setBars] = useState([]);
  const [selectedBarIndex, setSelectedBarIndex] = useState([null, null]);

  const reverseSpeed = 100 - viewSpeed + 25;

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const generateArray = useCallback(() => {
    const bars = [];
    for (let i = 0; i < arrSize; i++) {
      bars.push(randomIntFromInterval(5, 400));
    }
    setBars(bars);
  }, [arrSize]);

  useEffect(() => {
    generateArray();
  }, [generateArray]);

  const bubbleSort = async () => {
    const arrForBubbleSort = [...bars];
    let isSwapped = false;

    for (let i = 0; i < arrForBubbleSort.length - 1; i++) {
      for (let j = 0; j < arrForBubbleSort.length - i - 1; j++) {
        if (arrForBubbleSort[j] > arrForBubbleSort[j + 1]) {
          [arrForBubbleSort[j], arrForBubbleSort[j + 1]] = [
            arrForBubbleSort[j + 1],
            arrForBubbleSort[j],
          ];

          setSelectedBarIndex([j, j + 1]);

          await new Promise((resolve) => {
            setTimeout(() => {
              setBars([...arrForBubbleSort]);
              resolve();
            }, reverseSpeed); // Adjust the delay time as needed
          });
          isSwapped = true;
        }
      }

      if (isSwapped === false) break;
    }

    setSelectedBarIndex([null, null]);
  };

  const selectionSort = async () => {
    const arrForBubbleSort = [...bars];

    for (let i = 0; i < arrSize - 1; i++) {
      let min_idx = i;
      setSelectedBarIndex([min_idx, null]);
      for (let j = i + 1; j < arrSize; j++) {
        if (arrForBubbleSort[j] < arrForBubbleSort[min_idx]) {
          min_idx = j;
          setSelectedBarIndex([min_idx, j]);
        } 
      }

      [arrForBubbleSort[i], arrForBubbleSort[min_idx]] = [
        arrForBubbleSort[min_idx],
        arrForBubbleSort[i],
      ];

      setSelectedBarIndex([i, min_idx]);

      await new Promise((resolve) => {
        setTimeout(() => {
          setBars([...arrForBubbleSort]);
          resolve();
        }, reverseSpeed);
      });
    }
    setSelectedBarIndex([null, null]);
  };

  return (
    <div className="container">
      <div className="bar-chart">
        {bars.map((value, index) => (
          <div
            key={index}
            className={`bar ${
              selectedBarIndex.includes(index) ? "selected" : ""
            }`}
            style={{ height: `${value}px` }}
          />
        ))}
        <div className="buttons">
          <button onClick={generateArray} className="btn">
            Generate Array
          </button>
          <button onClick={bubbleSort} className="btn">
            Bubble Sort
          </button>
          <button onClick={selectionSort} className="btn">
            Selection Sort
          </button>
        </div>
      </div>
    </div>
  );
}

export default SortingAlgoVisualizer;
