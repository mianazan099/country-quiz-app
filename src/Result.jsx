import winner from "./images/winners.svg";
import { ACTION } from "./App";

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
            dispatch({ type: ACTION.RESET_STATE });
          }}
        >
          Try again
        </button>
      </div>
    </>
  );
};

export default Result;
