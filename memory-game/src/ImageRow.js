const ImageRow = ( { srcArray, rowIndex, onClick } ) => {
  
  const imageElements = srcArray.map((src, index) => {
    return (
      <div onClick={onClick(src)} className="image-container" key={index}>
        <img
        src={src}
        alt="Game Tile"
        ></img>
      </div>
    );
  });

  return (
    <div className="image-row" key={rowIndex}>
      {imageElements}
    </div>
  );
};

export default ImageRow;

