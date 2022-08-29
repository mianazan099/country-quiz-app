function checkAnswer(e, randomCountry, score, setScore) {
  const answer = randomCountry.name.toLocaleLowerCase();
  const name = e.target.innerHTML.slice(29, -30).toLocaleLowerCase();
  document.querySelector(".next-question").style.display = "block";
  document.querySelectorAll(".option").forEach((option) => {
    option.disabled = true;
    const optionName = option.innerHTML.slice(29, -30).toLocaleLowerCase();
    if (answer === optionName) {
      setTimeout(() => {
        option.classList.add("right");
      }, 300);
    }
  });
  if (answer === name) {
    e.target.classList.add("right");
    setScore(score + 1);
  } else {
    e.target.classList.add("wrong");
  }
}

const letters = ["A", "B", "C", "D"];

const Button = ({ index, randomCountry, country, score, setScore }) => (
  <button
    className="option"
    onClick={(e) => {
      checkAnswer(e, randomCountry, score, setScore);
    }}
  >
    <span className="letter">{letters[index]}</span>
    {country.name}
    <span className="identify"></span>
  </button>
);

export default Button;
