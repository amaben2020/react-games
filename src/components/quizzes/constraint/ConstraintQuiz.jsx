import { useState } from "react";
import { questions } from "../../../data/data";
import Modal from "./components/Modal/Modal";
import useTimer from "./hooks/useTimer";
const ConstraintQuizGame = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  console.log(selectedAnswer);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(0);

  const [attempts, setAttempts] = useState(3);

  const sessionAttempts = sessionStorage.getItem("attempts");

  const { hours, minutes, seconds, timerExpired } = useTimer(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen((p) => !p);
  };

  const handleNextQuestion = (isCorrect, id) => {
    const correctOption = questions[currentQuestion].options.find(
      (item) => item.isCorrect,
    );
    const inCorrectOption = questions[currentQuestion].options.find(
      (elem) => elem.id === id,
    );

    if (isCorrect) {
      setSelectedAnswer(correctOption);
      setTimeout(() => {
        setCurrentQuestion((p) => p + 1);
        setSelectedAnswer(null);
      }, 200000);
      setScore(score + 1);
    } else {
      setTimeout(() => {
        setCurrentQuestion((p) => p + 1);
        setSelectedAnswer(null);
      }, 2000);
      setAttempts((p) => (p === 0 ? 0 : p - 1));
      setSelectedAnswer(inCorrectOption);
      // move to useEffect
      sessionStorage.setItem("attempts", attempts === 1 ? 1 : attempts - 1);
    }

    console.log(isCorrect);
  };
  console.log(selectedAnswer);
  console.log(
    selectedAnswer?.isCorrect ? "green" : selectedAnswer === null ? "" : "red",
  );
  return (
    <div
      style={{
        background: timerExpired ? "red" : "",
      }}
    >
      <h1>Score: {score}</h1>
      {timerExpired ||
        (isModalOpen && <Modal handleModalClose={handleModalClose} />)}
      <h1>Number of attempts {sessionAttempts}</h1> {hours}:{minutes}:{seconds}
      <h2> {questions[currentQuestion]?.text} </h2>
      <div
        className="flex gap-4"
        style={{
          display: "flex",
          gap: 10,
        }}
      >
        {questions[currentQuestion]?.options.map((option) => {
          let correctOpt = false;
          if (option.isCorrect) {
            console.log(option);
            correctOpt = option;
          }

          console.log(selectedAnswer);
          console.log(option);
          console.log(correctOpt);

          // if (selectedAnswer) {
          // }

          return (
            <button
              onClick={() => handleNextQuestion(option.isCorrect, option.id)}
              key={option.id}
              style={{
                background:
                  selectedAnswer === null
                    ? ""
                    : option.isCorrect
                    ? "green"
                    : "red",
              }}
            >
              {option.text}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ConstraintQuizGame;
