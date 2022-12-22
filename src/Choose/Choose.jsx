import "./Choose.css";
import { ACTION } from "../App";

const Choose = ({ dispatch }) => {
  return (
    <>
      <h1 className="quiz-title">Country Quiz</h1>
      <div className="inner-card choose-card">
        <p className="choose-text">What Type of Game You Want to Play</p>
        <button
          className="choose-btn"
          onClick={() => {
            dispatch({ type: ACTION.SET_QUIZ_CAPITAL });
          }}
        >
          Guess the Capital
        </button>
        <button
          className="choose-btn"
          onClick={() => {
            dispatch({ type: ACTION.SET_QUIZ_FLAG });
          }}
        >
          Guess the Flag
        </button>
      </div>
    </>
  );
};

export default Choose;
