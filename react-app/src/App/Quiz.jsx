import { useState, useEffect } from "react";
import Button from "./Button";
import data from "./countryData.json";
import adventure from "./images/adventure.svg";

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
  document.querySelector(".next-question").style.display = "none";
  document.querySelectorAll(".option").forEach((e) => {
    e.classList.remove("right");
    e.classList.remove("wrong");
    e.disabled = false;
  });
}

const Quiz = ({ questionNum, setQuestionNum, score, setScore }) => {
  const [countries, setCountries] = useState(getFourRandomCountries());
  const [randomCountry, setRandomCountry] = useState(
    getRandomCountry(countries)
  );

  useEffect(() => {
    setRandomCountry(getRandomCountry(countries));
  }, [countries]);

  return (
    <>
      <h1 className="title">Country Quiz</h1>
      <div className="image">
        <img src={adventure} alt="adventure" />
      </div>
      <div className="inner-card">
        <p className="question">
          {questionNum + 1}. {randomCountry.capital} is the capital of
        </p>
        <div className="options-container">
          {countries.map((country, index) => (
            <Button
              key={index}
              index={index}
              randomCountry={randomCountry}
              country={country}
              score={score}
              setScore={setScore}
            />
          ))}
        </div>
        <button
          className="next-question"
          onClick={() => {
            nextQuestion();
            setCountries(getFourRandomCountries());
            setQuestionNum(questionNum + 1);
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Quiz;
