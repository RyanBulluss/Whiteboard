import { useEffect, useState, useRef } from "react";
import createWhiteboard from "./createWhiteboard";
import Pixel from "./Pixel";

function App() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });


  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'black';

    const startDrawing = (e) => {
      setIsDrawing(true);
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setLastPos({ x, y });
    };


    const stopDrawing = () => setIsDrawing(false);


    const draw = (x, y) => {
      ctx.beginPath();
      ctx.arc(x, y, 1, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawLine = (x1, y1, x2, y2) => {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    };

    const handleMouseMove = (e) => {
      if (!isDrawing) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      drawLine(lastPos.x, lastPos.y, x, y);
      setLastPos({ x, y });

    };


    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseleave', stopDrawing);

    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mouseleave', stopDrawing);
    };
  }, [isDrawing, lastPos]);

  return (
    <canvas ref={canvasRef} width={300} height={600} style={{ border: '1px solid black', cursor: 'crosshair' }} />
    // <div className="flex flex-wrap">
    //   {whiteboard.map((arr, rowIdx) => arr.map((pixel, colIdx) => (
    //     <Pixel handleMouseOver={handleMouseOver} rowIdx={rowIdx} colIdx={colIdx} pixel={pixel} key={rowIdx * colIdx} />
    //   )))}
    // </div>
  );
}

export default App;
