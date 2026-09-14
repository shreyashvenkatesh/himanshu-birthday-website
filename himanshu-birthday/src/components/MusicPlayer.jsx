import { useState, useRef } from "react";
import "./MusicPlayer.css";

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Replace this URL with your favorite MP3 audio link or local audio file in src/assets/
  const musicSrc = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3";

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player-widget">
      <audio ref={audioRef} src={musicSrc} loop />
      <button 
        className={`music-btn ${isPlaying ? "playing" : ""}`} 
        onClick={togglePlay}
        title={isPlaying ? "Mute Music" : "Play Music"}
      >
        <span className="music-icon">{isPlaying ? "🎵" : "🔇"}</span>
        <span className="music-label">{isPlaying ? "Sound ON" : "Music"}</span>
      </button>
    </div>
  );
}

export default MusicPlayer;