import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import "./CakeAndStats.css";
import tapeImg from "../assets/tape.png";
import couplePic from "../assets/pic1.jpeg";
import ishaareySong from "../assets/ishaarey.mp3";

function CakeAndStats({ onNext }) {
  const [isBlown, setIsBlown] = useState(false);
  const [isPlayingTrack, setIsPlayingTrack] = useState(false);
  const audioRef = useRef(null);

  const blowCandle = () => {
    if (!isBlown) {
      setIsBlown(true);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#f7d1cd", "#e8c2ca", "#d8e2dc", "#ffe5ec"]
      });
    }
  };

  const toggleSpecialTrack = () => {
    if (audioRef.current) {
      if (isPlayingTrack) {
        audioRef.current.pause();
        setIsPlayingTrack(false);
      } else {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        setIsPlayingTrack(true);
      }
    }
  };

  return (
    <div className="cake-stats-container">
      <audio ref={audioRef} src={ishaareySong} onEnded={() => setIsPlayingTrack(false)} />

      <header className="cake-header">
        <p className="cake-subtitle">time to celebrate</p>
        <h1>Make a Wish, Motu ✨</h1>
      </header>

      {/* 1. INTERACTIVE CAKE SECTION */}
      <div className="cake-card">
        <div className="tape-wrapper">
          <img src={tapeImg} alt="Tape" className="tape-graphic" />
        </div>
        
        <div className="cake-interactive-area" onClick={blowCandle}>
          <div className="candle">
            {!isBlown ? (
              <div className="flame"></div>
            ) : (
              <div className="smoke"></div>
            )}
            <div className="wick"></div>
          </div>
          <div className="cake-illustration">🎂</div>
        </div>

        <p className="cake-instruction">
          {isBlown ? "✨ Wish sent into the universe! ✨" : "Tap the flame to blow out your candle!"}
        </p>
      </div>

      {/* 2. RELATIONSHIP STATS DASHBOARD */}
      <section className="stats-section">
        <h2 className="section-title">The Official Motu Stats 📊</h2>
        <div className="stats-grid">
          <div className="stat-box">
            <span className="stat-number">402+</span>
            <span className="stat-label">Inside Jokes</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">∞</span>
            <span className="stat-label">Dosas Shared</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">#1</span>
            <span className="stat-label">Favorite Person</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">100%</span>
            <span className="stat-label">Cutest Couple</span>
          </div>
        </div>
      </section>

      {/* 3. CUSTOM TRACK PLAYER CARD */}
      <section className="spotify-widget">
        <div className="tape-wrapper-center">
          <img src={tapeImg} alt="Tape" className="tape-graphic" />
        </div>
        <div className="custom-track-card">
          <div className="track-art">
            <img src={couplePic} alt="Ishaarey" />
          </div>
          <div className="track-info">
            <span className="track-badge">OUR SPECIAL SONG 🎵</span>
            <h3>Ishaarey</h3>
            <p>Atharva</p>
            <button 
              className={`play-track-btn ${isPlayingTrack ? "playing" : ""}`}
              onClick={toggleSpecialTrack}
            >
              {isPlayingTrack ? "⏸ Pause Clip" : "▶ Play Favorite Part"}
            </button>
          </div>
        </div>
      </section>

      <footer className="cake-footer">
        <button className="next-btn" onClick={onNext}>
          Read your final letter →
        </button>
      </footer>
    </div>
  );
}

export default CakeAndStats;