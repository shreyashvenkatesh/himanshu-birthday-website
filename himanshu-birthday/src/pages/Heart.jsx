import { useState } from "react"
import "./Heart.css"

function Heart({ onNext }) {
  const [found, setFound] = useState(false)

  return (
    <div className="heart-page">
      <div className="heart-content">
        {!found ? (
          <>
            <p className="heart-small">your first task</p>

            <h1>Find the heart.</h1>

            <p>
              It’s somewhere around here.
              <br />
              Look carefully.
            </p>
          </>
        ) : (
          <>
            <p className="heart-small">...there you are.</p>

            <h1>Good choice.</h1>

            <p>
              Okay.
              <br />
              Maybe you’re allowed to continue.
            </p>

            <button onClick={onNext}>
              Continue →
            </button>
          </>
        )}
      </div>

      {!found && (
        <button
          className="hidden-heart"
          onClick={() => setFound(true)}
          aria-label="Find the heart"
        >
          ♡
        </button>
      )}
    </div>
  )
}

export default Heart