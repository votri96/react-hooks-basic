import React, { useState, useEffect } from 'react';
import './App.css';
import MagicBox from './components/MagicBox';

function App() {
  const [showClock, setShowClock] = useState(true);

  return (
    <div className="app">
      <MagicBox />
    </div>
  );
}

export default App;
