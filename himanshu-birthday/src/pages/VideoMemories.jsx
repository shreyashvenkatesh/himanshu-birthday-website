import "./VideoMemories.css";
import lilyImg from "../assets/lily-flower.png";

// Import your videos here
import clip1 from "../assets/clip1.mp4"; 

const videosData = [
  {
    id: 1,
    title: "The Funniest Moment",
    src: clip1,
    caption: "Can't stop laughing every time I watch this."
  }
];

function VideoMemories({ onNext }) {
  return (
    <div className="videos-container">
      <div className="videos-decor-lily">
        <img src={lilyImg} alt="Lily" />
      </div>

      <header className="videos-header">
        <p className="videos-subtitle">moving memories</p>
        <h1>Our Cute Clips & Reels 🎥</h1>
      </header>

      <div className="videos-grid">
        {videosData.map((item) => (
          <div key={item.id} className="video-card">
            <div className="video-frame">
              <video src={item.src} controls playsInline />
            </div>
            <div className="video-info">
              <h3>{item.title}</h3>
              <p>{item.caption}</p>
            </div>
          </div>
        ))}
      </div>

      <footer className="videos-footer">
        <button className="next-btn" onClick={onNext}>
          Onward to the next surprise →
        </button>
      </footer>
    </div>
  );
}

export default VideoMemories;