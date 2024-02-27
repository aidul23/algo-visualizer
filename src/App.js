import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SortingAlgoVisualizer from './components/SortingAlgoVisualizer';

function App() {
  const [arrSize, setArrSize] = useState(100);
  const [viewSpeed, setViewSpeed] = useState(25);

  const handleArrSizeChange = (value) => {
    setArrSize(value);
  };

  const handleViewSpeedChange = (value) => {
    setViewSpeed(value);
  };
  return (
    <div className="App">
      <Header handleArrSizeChange={handleArrSizeChange} handleViewSpeedChange={handleViewSpeedChange}/>
      <SortingAlgoVisualizer arrSize={arrSize} viewSpeed={viewSpeed}/>
    </div>
  );
}

export default App;
