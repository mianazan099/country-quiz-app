import { useState } from "react";
import CapitalQuiz from "./CapitalQuiz";
import Result from "./Result";
import Choose from "./Choose";
import FlagQuiz from "./FlagQuiz";
import "./App.css";

function renderThis(
  quiz,
  setQuiz,
  questionNum,
  setQuestionNum,
  score,
  setScore
) {
  switch (quiz) {
    case 0:
      return <Choose setQuiz={setQuiz} />;
      break;
    case 1:
      return (
        <CapitalQuiz
          questionNum={questionNum}
          setQuestionNum={setQuestionNum}
          score={score}
          setScore={setScore}
        />
      );
      break;
    case 2:
      return <FlagQuiz />;
      break;

    default:
      break;
  }
}

const App = () => {
  const [questionNum, setQuestionNum] = useState(0);
  const [score, setScore] = useState(0);
  const [quiz, setQuiz] = useState(0);

  return (
    <div className="app">
      <div className="outer-card">
        {questionNum < 10 ? (
          renderThis(
            quiz,
            setQuiz,
            questionNum,
            setQuestionNum,
            score,
            setScore
          )
        ) : (
          <Result
            result={score}
            setScore={setScore}
            setQuestionNum={setQuestionNum}
            setQuiz={setQuiz}
          />
        )}
      </div>
    </div>
  );
};

export default App;
