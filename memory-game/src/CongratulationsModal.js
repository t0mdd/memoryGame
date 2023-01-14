const CongratulationsModal = ( { currentScore, highestPossibleScore } ) => (
  <div className={ (currentScore === highestPossibleScore) ? 'congratulations-modal' : 'hidden'}>
    Congratulations, you achieved the highest possible score of {highestPossibleScore} on this difficulty level!
  </div>
);

export default CongratulationsModal;
