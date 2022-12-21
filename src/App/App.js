import { useReducer } from "react";
import Choose from "./Choose/Choose";
import Result from "./Result/Result";
import Quiz from "./Quiz";
import "./App.css";

function renderThis(state, dispatch) {
  switch (state.quiz) {
    case "choose":
      return <Choose dispatch={dispatch} />;
    default:
      return <Quiz state={state} dispatch={dispatch} />;
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "setQuiz":
      return {
        ...state,
        quiz: action.payload.quiz,
      };
    case "setQuestion":
      return {
        ...state,
        questionNum: action.payload.questionNum,
      };
    case "setScore":
      return {
        ...state,
        score: action.payload.score,
      };

    default:
      break;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    quiz: "choose",
    questionNum: 0,
    score: 0,
  });

  return (
    <div className="app">
      <div className="outer-card">
        {state.questionNum < 10 ? (
          renderThis(state, dispatch)
        ) : (
          <Result state={state} dispatch={dispatch} />
        )}
      </div>
    </div>
  );
};

export default App;
