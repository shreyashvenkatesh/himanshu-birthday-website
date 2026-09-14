import { useState } from "react";
import confetti from "canvas-confetti";
import "./Letter.css";
import lilyImg from "../assets/lily-flower.png";
import tapeImg from "../assets/tape.png";

function Letter({ onRestart }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenLetter = () => {
    setIsOpen(true);

    // Fire confetti celebration burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#81706d", "#d4b8b1", "#e3d2c9", "#514845"]
    });
  };

  return (
    <div className="letter-container">
      <div className="letter-decor-lily">
        <img src={lilyImg} alt="Lily" />
      </div>

      <header className="letter-header">
        <p className="letter-subtitle">the final chapter</p>
        <h1>Happy Birthday! 🎂</h1>
      </header>

      <div className={`envelope-wrapper ${isOpen ? "open" : ""}`}>
        {!isOpen ? (
          <div className="envelope-closed" onClick={handleOpenLetter}>
            <div className="tape-top">
              <img src={tapeImg} alt="Tape" />
            </div>
            <div className="wax-seal">🤍</div>
            <p className="seal-prompt">Tap to unseal your letter</p>
          </div>
        ) : (
          <div className="letter-paper">
            <div className="letter-content">
              <p className="letter-salutation">Dear Motu,</p>

              <p className="letter-body">
                Happy Birthday! I wanted to build smth which makes you feel more special, but i couldn't (im really sorryyy ☹️) also i even told you about this specific surprise, but well here it is, i hope you'll like it.
              </p>

              <p className="letter-body">
                Ahmm, Thank you for all the laughs, the late-night talks, and every memory 
                we've built so far, me annoying you to the core, you rage baiting me, i really love every second w you, you're the most precious and the best thing i ever got 🧿. I Really hope you'll have the best year, the best people, and the life (obv w me 🐨).
              </p>

              <p className="letter-closing">
                Always,<br />
                <span>Your Ollie ✨</span>
              </p>
            </div>
          </div>
        )}
      </div>

      {isOpen && (
        <footer className="letter-footer">
          <button className="restart-btn" onClick={onRestart}>
            ↺ Replay from beginning
          </button>
        </footer>
      )}
    </div>
  );
}

export default Letter;