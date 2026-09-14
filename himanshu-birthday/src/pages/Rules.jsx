import "./Rules.css";
import lilyImg from "../assets/lily-flower.png";

function Rules({ onNext }) {
  return (
    <div className="rules">
      <div className="rules-layer-container">
        <div className="scrapbook-botanical-lily">
          <img src={lilyImg} alt="Lily Flower" />
        </div>

        <div className="rules-card">
          <p className="rules-small">before we begin...</p>

          <h1>There are rules.</h1>

          <div className="rule-list">
            <p>01 — You have to click everything.</p>
            <p>02 — No skipping.</p>
            <p>03 — Don't ask questions. 😌</p>
          </div>

          <div className="divider-torn-paper" />

          <p className="rules-note">Just trust me.</p>

          <button onClick={onNext}>
            I guess I'll play along →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rules;