import { useState, useEffect } from "react";
import data from "./countryData.json";
import Button from "./Button/Button";
import adventure from "./images/adventure.svg";
import { ACTION } from "./App";

function getFourRandomCountries() {
  const countries = [];
  for (let i = 0; i < 4; i++) {
    countries.push(data[Math.floor(Math.random() * data.length)]);
  }
  return countries;
}

function getRandomCountry(countries) {
  return countries[Math.floor(Math.random() * countries.length)];
}

function nextQuestion() {
  document.querySelector(".quiz-next-question").style.display = "none";
  document.querySelectorAll(".option").forEach((e) => {
    e.classList.remove("right");
    e.classList.remove("wrong");
    e.disabled = false;
  });
}

const CapitalQuiz = ({ state, dispatch }) => {
  const [countries, setCountries] = useState(getFourRandomCountries());
  const [randomCountry, setRandomCountry] = useState(
    getRandomCountry(countries)
  );

  useEffect(() => {
    setRandomCountry(getRandomCountry(countries));
  }, [countries]);
  return (
    <>
      <h1 className="quiz-title up-title">Country Quiz</h1>
      <div className="quiz-image">
        <img src={adventure} alt="adventure" />
      </div>
      <div className="inner-card">
        {state.quiz === "capital" && (
          <p className="quiz-question">
            {state.questionNum + 1}. {randomCountry.capital} is the capital of
          </p>
        )}
        {state.quiz === "flag" && (
          <>
            <div className="flag-image">
              <img src={randomCountry.flag} alt="flag" />
            </div>
            <p className="quiz-question">
              {state.questionNum + 1}. Which country does this flag belong to?
            </p>
          </>
        )}
        <div className="quiz-options-container">
          {countries.map((country, index) => (
            <Button
              key={index}
              index={index}
              randomCountry={randomCountry}
              country={country}
              state={state}
              dispatch={dispatch}
            />
          ))}
        </div>
        <button
          className="quiz-next-question"
          onClick={() => {
            nextQuestion();
            setCountries(getFourRandomCountries());
            dispatch({ type: ACTION.NEXT_QUESTION });
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default CapitalQuiz;
