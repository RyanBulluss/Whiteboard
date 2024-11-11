import { useState } from "react";
import createWhiteboard from "./createWhiteboard";
import Pixel from "./Pixel";

function App() {
  const [whiteboard, setWhiteboard] = useState(createWhiteboard(100, 100))

  function handleClick(color, rowIdx, colIdx) {
    setWhiteboard(w => {
      const newW = [...w];
      newW[rowIdx][colIdx].color = color;
      return newW;
    })
  }

  return (
    <div className="flex flex-wrap">
      {whiteboard.map((arr, rowIdx) => arr.map((pixel, colIdx) => (
        <Pixel handleClick={handleClick} rowIdx={rowIdx} colIdx={colIdx} pixel={pixel} key={rowIdx * colIdx} />
      )))}
    </div>
  );
}

export default App;
