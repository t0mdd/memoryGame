import ImageRow from "./ImageRow";

const ImageGrid = ( { srcArray, noRows, noCols, onClick } ) => {
  const createImageRow = (rowIndex) => {
    const firstSrcIndex = noCols*rowIndex;
    return (
      <ImageRow 
      srcArray = {srcArray.slice(firstSrcIndex, firstSrcIndex + noCols)}
      rowIndex = {rowIndex}
      key = {rowIndex}
      onClick = {onClick}
      >
      </ImageRow>
    );
  }

  return (
    <div className="image-grid-container">
      <div className="image-grid" onClick = {onClick}>
        {Array(noRows).fill(null).map((slot, rowIndex) => (
          createImageRow(rowIndex)
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;

