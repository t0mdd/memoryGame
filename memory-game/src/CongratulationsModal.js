import parrot from "./imgs/congratulations/squawker.gif"

const CongratulationsModal = ( { currentScore, highestPossibleScore, startNewGame } ) => (
  <div className={ (currentScore === highestPossibleScore) ? 'congratulations-modal' : 'hidden'}>
    <div className="congratulations-modal-controls-container">
      <div class="congratulations-modal-controls">
        <button onClick = {startNewGame}>×</button>
      </div>
    </div>
    <section className="congratulations-modal-content">
      <h1>Congratulations!</h1>
      <div className="congratulations-modal-bottom">
        <img src={parrot}></img>
        <p>You have achieved the highest possible score of {highestPossibleScore} on this difficulty level!</p>
        <img src={parrot}></img>
      </div>
    </section>
  </div>
);

export default CongratulationsModal;
