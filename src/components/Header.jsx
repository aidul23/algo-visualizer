import React, { useState } from "react";

function Header({ handleArrSizeChange, handleViewSpeedChange }) {
  const [arrSize, setArrSize] = useState(100);
  const [viewSpeed, setViewSpeed] = useState(25);

  const handleArrSizeRangeChange = (e) => {
    const value = parseInt(e.target.value);
    setArrSize(value);
    handleArrSizeChange(value);
  };

  const handleViewSpeedRangeChange = (e) => {
    const value = parseInt(e.target.value);
    setViewSpeed(value);
    handleViewSpeedChange(value);
  };

  return (
    <>
      <div className="header">
        <h1>Sorting Algorithm Visualizer</h1>
        <div className="slidecontainer">
          <label>Array Size:</label>
          <input
            type="range"
            min="50"
            max="150"
            className="slider"
            step="50"
            value={arrSize}
            id="arrSizeRange"
            onChange={handleArrSizeRangeChange}
          />
        </div>
        <div className="slidecontainer">
          <label>View Speed:</label>
          <input
            type="range"
            min="25"
            max="100"
            className="slider"
            step="25"
            value={viewSpeed}
            onChange={handleViewSpeedRangeChange}
            id="viewSpeedRange"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
