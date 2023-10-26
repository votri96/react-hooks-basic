import React, { useState, useEffect } from 'react';
import './App.css';
import Clock from './components/Clock';

function App() {
  const [showClock, setShowClock] = useState(true);

  return (
    <div className="app">
      {showClock && <Clock />}
      <button onClick={() => setShowClock(true)}>Show clock</button>
      <button onClick={() => setShowClock(false)}>Hide clock</button>
    </div>
  );
}

export default App;
