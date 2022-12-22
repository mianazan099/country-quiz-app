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

export const ACTION = {
  NEXT_QUESTION: "nextQuestion",
  INCREMENT_SCORE: "incrementScore",
  RESET_STATE: "resetState",
  SET_QUIZ_FLAG: "setQuizFlag",
  SET_QUIZ_CAPITAL: "setQuizCapital",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION.SET_QUIZ_FLAG:
      return {
        ...state,
        quiz: "flag",
      };
    case ACTION.SET_QUIZ_CAPITAL:
      return {
        ...state,
        quiz: "capital",
      };
    case ACTION.NEXT_QUESTION:
      return {
        ...state,
        questionNum: state.questionNum + 1,
      };
    case ACTION.INCREMENT_SCORE:
      return {
        ...state,
        score: state.score + 1,
      };
    case ACTION.RESET_STATE:
      return {
        quiz: "choose",
        questionNum: 0,
        score: 0,
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
