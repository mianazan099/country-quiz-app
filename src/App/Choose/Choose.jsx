import "./Choose.css";

const Choose = ({ setQuiz }) => {
  return (
    <>
      <h1 className="quiz-title">Country Quiz</h1>
      <div className="inner-card choose-card">
        <p className="choose-text">What Type of Game You Want to Play</p>
        <button
          className="choose-btn"
          onClick={() => {
            setQuiz("capital");
          }}
        >
          Guess the Capital
        </button>
        <button
          className="choose-btn"
          onClick={() => {
            setQuiz("flag");
          }}
        >
          Guess the Flag
        </button>
      </div>
    </>
  );
};

export default Choose;
