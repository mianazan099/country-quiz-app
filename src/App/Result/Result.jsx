import winner from "../assets/images/winners.svg";
import "./Result.css";

const Result = ({ state, dispatch }) => {
  return (
    <>
      <h1 className="quiz-title">Country Quiz</h1>
      <div className="inner-card result-card">
        <div className="result-image">
          <img src={winner} alt="winner" />
        </div>
        <p className="result">Results</p>
        <p className="your-result">
          You got <span>{state.score}</span> correct answers
        </p>
        <button
          className="try-again"
          onClick={() => {
            dispatch({ type: "setScore", payload: { score: 0 } });
            dispatch({
              type: "setQuestion",
              payload: { questionNum: 0 },
            });
            dispatch({ type: "setQuiz", payload: { quiz: "choose" } });
          }}
        >
          Try again
        </button>
      </div>
    </>
  );
};

export default Result;
