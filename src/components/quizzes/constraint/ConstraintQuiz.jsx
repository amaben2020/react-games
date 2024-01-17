import { useState } from "react";
import { questions } from "../../../data/data";
import Modal from "./components/Modal/Modal";
import useTimer from "./hooks/useTimer";
const ConstraintQuizGame = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(3);

  const [attempts, setAttempts] = useState(3);

  const sessionAttempts = sessionStorage.getItem("attempts");

  const { hours, minutes, seconds, timerExpired } = useTimer(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen((p) => !p);
  };

  const handleNextQuestion = (isCorrect) => {
    if (isCorrect) {
      const correctOption = questions[currentQuestion].options.find(
        (item) => item.isCorrect,
      );
      setCurrentQuestion((p) => p + 1);
      setScore(score + 1);
      setSelectedAnswer(correctOption);
    }

    setAttempts((p) => (p === 0 ? 0 : p - 1));
    sessionStorage.setItem("attempts", attempts - 1);
  };

  return (
    <div
      style={{
        background: timerExpired ? "red" : "",
      }}
    >
      {(timerExpired || isModalOpen) && (
        <Modal handleModalClose={handleModalClose} />
      )}
      <h1>Number of attempts {sessionAttempts}</h1> {hours}:{minutes}:{seconds}
      <h2> {questions[currentQuestion].text} </h2>
      <div
        className="flex gap-4"
        style={{
          display: "flex",
          gap: 10,
        }}
      >
        {questions[currentQuestion].options.map((option) => (
          <button
            onClick={() => handleNextQuestion(option.isCorrect)}
            key={option.id}
            style={{
              background:
                selectedAnswer === null
                  ? ""
                  : selectedAnswer?.id === option.id
                  ? "green"
                  : "red",
            }}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ConstraintQuizGame;
