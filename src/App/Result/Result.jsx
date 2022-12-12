import winner from "../assets/images/winners.svg";
import "./Result.css";

const Result = ({ result, setScore, setQuestionNum, setQuiz }) => {
  return (
    <>
      <h1 className="quiz-title">Country Quiz</h1>
      <div className="inner-card result-card">
        <div className="result-image">
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
            setQuiz("choose");
          }}
        >
          Try again
        </button>
      </div>
    </>
  );
};

export default Result;
