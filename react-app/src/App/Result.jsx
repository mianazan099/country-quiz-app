import winner from "./images/winners.svg";
import { useEffect } from "react";

const Result = ({ result, setScore, setQuestionNum }) => {
  useEffect(() => {
    document.querySelector(".title").style.marginBottom = "10px";
  }, []);
  return (
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
          document.querySelector(".title").style.marginBottom = "80px";
        }}
      >
        Try again
      </button>
    </div>
  );
};

export default Result;
