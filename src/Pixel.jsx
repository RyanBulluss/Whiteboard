

function Pixel({ pixel, handleMouseOver, colIdx, rowIdx }) {

  return (
    <div 
      onClick={() => handleMouseOver("white", rowIdx, colIdx, false)}
      onMouseOver={() => handleMouseOver("white", rowIdx, colIdx, true)} 
      className={`hover:bg-blue-400 w-[5px] h-[5px] ${pixel.color === "white" ? "bg-white" : "bg-blue-300"}`}>
    </div>
  );
}

export default Pixel;