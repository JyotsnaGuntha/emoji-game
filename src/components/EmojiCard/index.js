import './index.css'

const EmojiCard = ({emojiDetails, onEmojiClick}) => {
  const {id, emojiName, emojiUrl} = emojiDetails

  const handleClick = () => {
    onEmojiClick(id)
  }

  return (
    <li className="emoji-item">
      <button type="button" className="emoji-button" onClick={handleClick}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
