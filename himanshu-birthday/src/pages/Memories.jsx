import { useState } from "react";
import "./Memories.css";
import lilyImg from "../assets/lily-flower.png";
import tapeImg from "../assets/tape.png";
import pic1 from "../assets/pic1.jpeg";
import pic2 from "../assets/pic2.jpeg";
import pic3 from "../assets/pic3.jpeg";
import pic4 from "../assets/pic4.jpeg";

const memoriesData = [
  {
    id: 1,
    title: "Our First Date",
    caption: "The chaotic Photoshoot (i still dk how to click), and the best Dosa.",
    image: pic1,
    date: "APR 7TH"
  },
  {
    id: 2,
    title: "First Flower Bouquet",
    caption: "Love how you remember my fav color always",
    image: pic2,
    date: "MAY 6"
  },
  {
    id: 3,
    title: "Random Art Making",
    caption: "i really hope you enjoy our artistic dates",
    image: pic3,
    date: "AUG 15"
  }, // <-- ADDED MISSING COMMA HERE
  {
    id: 4,
    title: "the unplanned trip",
    caption: "best experience ever",
    image: pic4,
    date: "AUG 17"
  }
];

function Memories({ onNext }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="memories-container">
      <div className="memories-decor-lily">
        <img src={lilyImg} alt="Lily" />
      </div>

      <header className="memories-header">
        <p className="memories-subtitle">a look back</p>
        <h1>Favorite Chapter & Moments</h1>
      </header>

      <div className="polaroid-grid">
        {memoriesData.map((item, index) => (
          <div
            key={item.id}
            className={`polaroid-card tilt-${(index % 3) + 1}`}
            onClick={() => setSelectedPhoto(item)}
          >
            <div className="tape-wrapper">
              <img src={tapeImg} alt="Tape" className="tape-graphic" />
            </div>

            <div className="polaroid-img-frame">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="polaroid-caption">
              <span className="memory-date">{item.date}</span>
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal view when a Polaroid is clicked */}
      {selectedPhoto && (
        <div className="memory-modal-backdrop" onClick={() => setSelectedPhoto(null)}>
          <div className="memory-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedPhoto(null)}>×</button>
            <img src={selectedPhoto.image} alt={selectedPhoto.title} />
            <div className="modal-text">
              <span className="modal-date">{selectedPhoto.date}</span>
              <h2>{selectedPhoto.title}</h2>
              <p>{selectedPhoto.caption}</p>
            </div>
          </div>
        </div>
      )}

      <footer className="memories-footer">
        <button className="next-btn" onClick={onNext}>
          Ready for the next surprise →
        </button>
      </footer>
    </div>
  );
}

export default Memories;