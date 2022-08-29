const Choose = ({ setQuiz }) => {
  return (
    <>
      <h1 className="title result-title">Country Quiz</h1>
      <div className="inner-card choose-card">
        <p className="choose">What Type of Game You Want to Play</p>
        <button
          className="choose-btn"
          onClick={() => {
            setQuiz(1);
          }}
        >
          Guess the Capital
        </button>
        <button
          className="choose-btn"
          onClick={() => {
            setQuiz(2);
          }}
        >
          Guess the Flag
        </button>
      </div>
    </>
  );
};

export default Choose;
