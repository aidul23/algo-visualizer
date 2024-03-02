import React, { useCallback, useEffect, useState } from "react";
import { LuRefreshCcw } from "react-icons/lu";

function SortingAlgoVisualizer({ arrSize, viewSpeed }) {
  const [bars, setBars] = useState([]);
  const [sortingInProgress, setSortingInProgress] = useState(false);
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
    setSortingInProgress(true);
    const arrForSort = [...bars];
    //let isSwapped = false;

    for (let i = 0; i < arrForSort.length - 1; i++) {
      for (let j = 0; j < arrForSort.length - i - 1; j++) {
        if (arrForSort[j] > arrForSort[j + 1]) {
          setSelectedBarIndex([j, j + 1]);
          [arrForSort[j], arrForSort[j + 1]] = [
            arrForSort[j + 1],
            arrForSort[j],
          ];

          await new Promise((resolve) => {
            setTimeout(() => {
              setBars([...arrForSort]);
              resolve();
            }, reverseSpeed); // Adjust the delay time as needed
          });
          //isSwapped = true;
        }
      }

      //if (isSwapped === false) break;
    }

    setSelectedBarIndex([null, null]);
    setSortingInProgress(false);
  };

  const selectionSort = async () => {
    setSortingInProgress(true);
    const arrForSort = [...bars];

    for (let i = 0; i < arrSize - 1; i++) {
      let min_idx = i;
      for (let j = i + 1; j < arrSize; j++) {
        if (arrForSort[j] < arrForSort[min_idx]) {
          min_idx = j;
        }
      }

      setSelectedBarIndex([i, min_idx]);

      [arrForSort[i], arrForSort[min_idx]] = [
        arrForSort[min_idx],
        arrForSort[i],
      ];


      await new Promise((resolve) => {
        setTimeout(() => {
          setBars([...arrForSort]);
          resolve();
        }, reverseSpeed);
      });
    }
    setSelectedBarIndex([null, null]);
    setSortingInProgress(false);
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
        <button
            onClick={generateArray}
            className="btn-gen"
          >
            <LuRefreshCcw />
            {/* Assuming LuRefreshCcw is your icon component */}
            <span style={{ marginLeft: "0.5rem" }}>Generate Array</span>
          </button>
        <div className="buttons" >
          
          <button
            disabled={sortingInProgress}
            onClick={bubbleSort}
            className="btn"
          >
            Bubble Sort
          </button>
          <button
            disabled={sortingInProgress}
            onClick={selectionSort}
            className="btn"
          >
            Selection Sort
          </button>
        </div>
      </div>
    </div>
  );
}

export default SortingAlgoVisualizer;
