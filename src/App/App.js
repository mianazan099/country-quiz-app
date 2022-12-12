import { useState } from "react";
import Choose from "./Choose/Choose";
import Result from "./Result/Result";
import Quiz from "./Quiz";
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
    case "choose":
      return <Choose setQuiz={setQuiz} />;
    default:
      return (
        <Quiz
          quiz={quiz}
          questionNum={questionNum}
          setQuestionNum={setQuestionNum}
          score={score}
          setScore={setScore}
        />
      );
  }
}

const App = () => {
  const [quiz, setQuiz] = useState("choose");
  const [questionNum, setQuestionNum] = useState(0);
  const [score, setScore] = useState(0);

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
