import winner from "./images/winners.svg";

const Result = ({ result, setScore, setQuestionNum }) => {
  return (
    <>
      <h1 className="title result-title">Country Quiz</h1>
      <div className="inner-card-two">
        <div className="win-image">
          <img src={winner} alt="winner" />
        </div>
        <p className="result">Results</p>
        <p className="your-result">
          You got <span>{result}</span> correct answers
        </p>
        <button
          className="try-again"
          onClick={() => {
            setScore(0);
            setQuestionNum(0);
          }}
        >
          Try again
        </button>
      </div>
    </>
  );
};

export default Result;
