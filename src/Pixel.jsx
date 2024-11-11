

function Pixel({ pixel, handleClick, colIdx, rowIdx }) {

  return (
    <div 
      onClick={() => handleClick("white", rowIdx, colIdx)} 
      className={`hover:bg-blue-400 w-[5px] h-[5px] ${pixel.color === "white" ? "bg-white" : "bg-blue-300"}`}>
    </div>
  );
}

export default Pixel;