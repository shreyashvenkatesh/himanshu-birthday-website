import { useState } from "react"
import "./Verification.css"

function Verification({ onNext }) {
  const [selected, setSelected] = useState(null)
  const [showVerdict, setShowVerdict] = useState(false)

  const options = [
    { id: "A", text: "Being dramatic" },
    { id: "B", text: "Watching too many reality shows" },
    { id: "C", text: "Not loving me" },
    { id: "D", text: "All of the above" },
  ]

  const handleSelect = (id) => {
    setSelected(id)
    if (id === "D") {
      setTimeout(() => {
        setShowVerdict(true)
      }, 700)
    }
  }

  return (
    <div className="verification-page">
      <div className="verification-card">
        <p className="verification-tag">step 02 — security check</p>
        
        {!showVerdict ? (
          <>
            <h1>THE OFFICIAL HIMANSHU VERIFICATION™</h1>
            <p className="question-text">
              Before we proceed, we need to verify your identity.
              <br />
              <strong>Question:</strong> What am I most likely to accuse you of?
            </p>

            <div className="options-grid">
              {options.map((opt) => (
                <button
                  key={opt.id}
                  className={`option-btn ${selected === opt.id ? "selected" : ""} ${
                    selected && opt.id === "D" ? "correct" : ""
                  } ${selected && selected !== "D" && opt.id === selected ? "wrong" : ""}`}
                  onClick={() => handleSelect(opt.id)}
                >
                  <span className="opt-letter">{opt.id}</span>
                  <span className="opt-text">{opt.text}</span>
                </button>
              ))}
            </div>

            {selected && selected !== "D" && (
              <p className="feedback-hint">
                Hmm... close, but you know that's not the complete truth. Try again, Motu. 😉
              </p>
            )}
          </>
        ) : (
          <div className="verdict-container">
            <span className="verdict-stamp">VERDICT</span>
            <h2>Himanshu has been successfully verified. ✓</h2>
            
            <div className="verdict-box">
              <p className="verdict-notice">
                Unfortunately, your membership cannot be cancelled.
              </p>
              <p className="verdict-reason">
                <strong>Reason:</strong> You have a boyfriend who is annoyingly attached to you.
              </p>
            </div>

            <button className="continue-btn" onClick={onNext}>
              Continue →
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Verification