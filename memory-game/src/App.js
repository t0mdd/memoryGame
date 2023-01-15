import { useEffect, useState } from 'react';
import './App.css';
import ImageGrid from './ImageGrid';
import CongratulationsModal from './CongratulationsModal';
import { randomSubarrayOfSize, randomDerangementOfArray } from './ArrayTools';

const imageContext = require.context('./imgs/game', false);
const imageSrcs = imageContext.keys().map((path) => imageContext(path));
const initialGridSize = 3;

function App() {
  const [gridSize, setGridSize] = useState(initialGridSize);

  const generateNewImageSrcs = () => (
    randomSubarrayOfSize(gridSize**2, imageSrcs)
  );

  const [imageSrcsInCurrentGame, setImageSrcsInCurrentGame] = useState(
    generateNewImageSrcs()
  );
  
  const shuffleImageSrcs = () => setImageSrcsInCurrentGame(
    randomDerangementOfArray(imageSrcsInCurrentGame)
  );
  
  const [previousSelections, setPreviousSelections] = useState([]);
  const [personalBest, setPersonalBest] = useState(0);
  
  const progressGame = (clickedImgSrc) => () => {
    if (previousSelections.includes(clickedImgSrc)) { 
      setPreviousSelections([]);
    }
    else {
      const currentScore = previousSelections.length + 1;
      if (currentScore > personalBest) setPersonalBest(currentScore);
      setPreviousSelections([...previousSelections, clickedImgSrc]);
    }
    shuffleImageSrcs();
  };

  const startNewGame = () => {
    setPreviousSelections([]);
    setImageSrcsInCurrentGame(generateNewImageSrcs());
  }
  
  useEffect(startNewGame, [gridSize]);

  return (
    <div className="App">
      <section className="top">
        <h1>Memory game</h1>
        <p>How to play: Try to click each picture exactly once. Your score will reset to 0 if you click the same picture twice.</p>
        <span>Difficulty: </span>
        <select
        onChange = { (e) => setGridSize(+e.target.value) }
        >
          <option value='3'>Easy</option>
          <option value='4'>Medium</option>
          <option value='5'>Hard</option>
        </select>
        <button
        onClick = { startNewGame }
        >
        New Game
        </button>
        <p>Score: { previousSelections.length }</p>
        <p>Personal Best: { personalBest }</p>
      </section>
      <ImageGrid 
      srcArray = { imageSrcsInCurrentGame }
      noRows = { gridSize }
      noCols = { gridSize }
      onClick = { progressGame }
      >
      </ImageGrid>
      <CongratulationsModal 
      currentScore = { previousSelections.length }
      highestPossibleScore = { imageSrcsInCurrentGame.length }
      startNewGame = {startNewGame}
      >
      </CongratulationsModal>
    </div>
  );
}

export default App;
