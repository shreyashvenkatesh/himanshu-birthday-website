import "./Welcome.css"

function Welcome({ onNext }) {
  return (
    <div className="welcome">
      <div className="welcome-content">
        <p className="small-text">hey, birthday boy.</p>

        <h1>Yes, you, Motu.</h1>

        <p className="message">
          I made something for you.
          <br />
          But there are rules.
        </p>

        <button onClick={onNext}>Okay... what?</button>
      </div>
    </div>
  )
}

export default Welcome