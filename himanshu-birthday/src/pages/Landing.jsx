import "./Landing.css";
import lilyImg from "../assets/lily-flower.png";

function Landing({ onNext }) {
  return (
    <div className="landing-container">
      <div className="landing-decor-lily">
        <img src={lilyImg} alt="Lily" />
      </div>

      <div className="landing-card">
        <p className="landing-subtitle">hey there,</p>
        <h1>yes you motu 🤍</h1>

        <p className="landing-description">
          I made a little something for you. Tap below when you're ready.
        </p>

        <button className="landing-btn" onClick={onNext}>
          Let's Begin →
        </button>
      </div>
    </div>
  );
}

export default Landing;