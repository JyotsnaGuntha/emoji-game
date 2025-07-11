import './index.css'

const NavBar = ({score, topScore, isGameOver}) => (
  <nav className="navbar">
    <div className="nav-logo">
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="emoji logo"
        className="logo"
      />
      <h1 className="title">Emoji Game</h1>
    </div>

    {!isGameOver && (
      <div className="scores">
        <p className="score">Score: {score}</p>
        <p className="score">Top Score: {topScore}</p>
      </div>
    )}

    <button
      type="button"
      className="btn btn-outline-light btn-sm info-button"
      data-bs-toggle="modal"
      data-bs-target="#infoModal"
      aria-label="How to play"
    >
      ℹ
    </button>
  </nav>
)

export default NavBar
