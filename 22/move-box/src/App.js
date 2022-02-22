import "./App.css";
import { useState } from "react";

function App() {
  const [position, setPosition] = useState(0);
  console.log(position);

  const movePosition = () => {
    const isGreaterThan3 = position >= 2;
    const newNumber = isGreaterThan3 ? 0 : position + 1;
    setPosition(newNumber);
  };

  const innerBoxPosition = { left: `${position * 33}%` };

  return (
    <>
      <div className="outer-box">
        <div className="inner-box" style={innerBoxPosition} />
      </div>
      <button onClick={() => movePosition()}>move box</button>
    </>
  );
}

export default App;
