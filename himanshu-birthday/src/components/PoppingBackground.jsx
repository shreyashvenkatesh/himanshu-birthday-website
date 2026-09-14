import { useEffect, useState } from "react";
import "./PoppingBackground.css";

// Import pic5 through pic8
import bg1 from "../assets/pic5.jpeg";
import bg2 from "../assets/pic6.jpeg";
import bg3 from "../assets/pic7.jpeg";
import bg4 from "../assets/pic8.jpeg";

const bgPhotos = [bg1, bg2, bg3, bg4];

function PoppingBackground() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bgPhotos.length);
    }, 4000); // Changes image every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="cute-bg-container">
      {bgPhotos.map((photo, index) => (
        <div
          key={index}
          className={`cute-bg-frame ${index === currentIndex ? "active" : ""}`}
        >
          <img src={photo} alt="Himanshu background" />
        </div>
      ))}
      <div className="cute-bg-overlay" />
    </div>
  );
}

export default PoppingBackground;