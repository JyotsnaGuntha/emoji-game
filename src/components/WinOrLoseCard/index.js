// Write your code here.
// src/components/WinOrLoseCard/index.js
import './index.css'

const WinOrLoseCard = ({isWon, score, totalScore, onClickPlayAgain}) => {
  const resultText = isWon ? 'You Won' : 'You Lose'
  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-lose-card">
      <div className="text-container">
        <h1 className="result-text">{resultText}</h1>
        <p className="score-label">{scoreLabel}</p>
        <p className="score-value">
          {score}/{totalScore}
        </p>
        <button
          type="button"
          className="play-again-button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <img src={imageUrl} alt="win or lose" className="result-image" />
    </div>
  )
}

export default WinOrLoseCard
