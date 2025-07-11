import {useState} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

const EmojiGame = ({emojisList}) => {
  const [clickedEmojis, setClickedEmojis] = useState([])
  const [score, setScore] = useState(0)
  const [topScore, setTopScore] = useState(0)
  const [isGameOver, setIsGameOver] = useState(false)

  const shuffleEmojisList = list => [...list].sort(() => Math.random() - 0.5)

  const resetGame = () => {
    setClickedEmojis([])
    setScore(0)
    setIsGameOver(false)
  }

  const onEmojiClick = id => {
    if (clickedEmojis.includes(id)) {
      setIsGameOver(true)
    } else {
      const updatedClickedEmojis = [...clickedEmojis, id]
      const newScore = score + 1
      setClickedEmojis(updatedClickedEmojis)
      setScore(newScore)

      if (newScore === emojisList.length) {
        setIsGameOver(true)
      }

      if (newScore > topScore) {
        setTopScore(newScore)
      }
    }
  }

  const shuffledList = shuffleEmojisList(emojisList)

  return (
    <div className="emoji-game-container">
      <NavBar score={score} topScore={topScore} isGameOver={isGameOver} />

      <div
        className="modal fade"
        id="infoModal"
        tabIndex="-1"
        aria-labelledby="infoModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="infoModalLabel">
                How to Play?
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              Click on emojis without repeating. Each unique click earns a
              point. Repeat one — game over!
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="emoji-body">
        {isGameOver ? (
          <WinOrLoseCard
            isWon={score === emojisList.length}
            score={score}
            totalScore={emojisList.length}
            onClickPlayAgain={resetGame}
          />
        ) : (
          <ul className="emoji-list">
            {shuffledList.map(emoji => (
              <EmojiCard
                key={emoji.id}
                emojiDetails={emoji}
                onEmojiClick={onEmojiClick}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default EmojiGame
