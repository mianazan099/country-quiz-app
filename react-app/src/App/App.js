import { useState } from "react";
import Quiz from "./Quiz";
import Result from "./Result";
import "./App.css";

const App = () => {
  const [questionNum, setQuestionNum] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <div className="app">
      <div className="outer-card">
        {questionNum < 10 ? (
          <Quiz
            questionNum={questionNum}
            setQuestionNum={setQuestionNum}
            score={score}
            setScore={setScore}
          />
        ) : (
          <Result
            result={score}
            setScore={setScore}
            setQuestionNum={setQuestionNum}
          />
        )}
      </div>
    </div>
  );
};

export default App;
