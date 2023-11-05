import React, { useState, useEffect } from 'react';
import Index from "./Index";
import Start from './Start';

function App() {
  const [start, setStart] = useState(true);
  const handleStartClick = () => {
    setStart(false);
  };

  return (start == true) ? (
    <>
      <Start onStartClick={handleStartClick}></Start>
    </>
  ) : (
    <>
      <Index></Index>
    </>
  )
}

export default App;