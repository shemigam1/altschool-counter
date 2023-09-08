import React, {useState} from 'react';
import './style.css';
import './reset.css';
import {
  ChevronUp,
  ChevronDown,
  ChevronsUp,
  ChevronsDown,
  Hash,
  RotateCcw,
} from 'react-feather';

export default function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1); // Increment the count state by 1
  };

  const handleIncrementBy10 = () => {
    setCount(count + 10); // Increment the count state by 1
  };

  const handleDecrement = () => {
    setCount(count - 1); // Decrement the count state by 1
  };

  const handleDecrementBy10 = () => {
    setCount(count - 10); // Decrement the count state by 1
  };

  const handleReset = () => {
    setCount(0); // Reset the count state to 0
  };

  const handleRandomNumber = () => {
    setCount(Math.floor(Math.random() * 101));
  };
  return (
    <div className="main">
      <div className="card">
        <p>Current Value:</p>
        <h1 className="count">{count}</h1>
        <div className="btns">
          <button className="btn" onClick={handleIncrement}>
            <ChevronUp />
          </button>
          <button className="btn" onClick={handleIncrementBy10}>
            <ChevronsUp />
          </button>
          <button className="btn" onClick={handleReset}>
            <RotateCcw />
          </button>
          <button className="btn" onClick={handleRandomNumber}>
            <Hash />
          </button>
          <button className="btn" onClick={handleDecrementBy10}>
            <ChevronsDown />
          </button>
          <button className="btn" onClick={handleDecrement}>
            <ChevronDown />
          </button>
        </div>
      </div>
    </div>
  );
}
