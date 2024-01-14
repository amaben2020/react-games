// display the questions
// select one option
// display green border for correct and red for wrong
// move to next question
// ensure each question has 3 attempts
// move to finish page with score when attempts are completed
// give time constraint with timer i.e 2mins per question

import { useState } from "react";
import { questions } from "../../../data/data";

const ConstraintQuizGame = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(3);

  const handleNextQuestion = (isCorrect) => {
    console.log(isCorrect);

    if (isCorrect) {
      const correctOption = questions[currentQuestion].options.find(
        (item) => item.isCorrect,
      );
      // setCurrentQuestion((p) => p + 1);
      // setScore(score + 1);
      setSelectedAnswer(correctOption);
    }

    setAttempts((p) => (p === 0 ? 0 : p - 1));
  };
  return (
    <div>
      <h1>Number of attempts {attempts}</h1>
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
