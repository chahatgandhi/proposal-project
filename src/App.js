import React, { useState } from "react";
import happy from './happy-excited.gif';
import ask from './bunny-rabbit.gif';
import './App.css';

function App() {
  const [accepted, setAccepted] = useState(false);
  const [noButtonStyle, setNoButtonStyle] = useState({});

  const handleYes = () => {
    setAccepted(true);
  };

  const handleNo = () => {
    const newStyle = {
      position: 'absolute',
      top: `${Math.random() * 80}%`,
      left: `${Math.random() * 80}%`
    };
    setNoButtonStyle(newStyle);
  };

  return (
    <div className="App">
      {accepted ? (
        <div className="response">
          <img src={happy} alt="Happy" />
          <p>Yay! I'm so happy!</p> 
        </div>
      ) : (
        <div className="proposal">
          <img src={ask} alt="Ask" />
          <p>Will you go on a date with me?</p>
          <div className="buttons">
            <button onClick={handleYes}>Yes</button>
            <button onClick={handleNo} style={noButtonStyle}>No</button>
          </div>
        </div>
      )}
    </div>
  );
}


export default App;
