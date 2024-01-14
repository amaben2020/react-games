// display the questions
// select one option
// display green border for correct and red for wrong
// move to next question
// ensure each question has 3 attempts
// move to finish page with score when attempts are completed
// give time constraint with timer i.e 2mins per question

import { questions } from "../../../data/data";

const ConstraintQuizGame = () => {
  return (
    <div>
      {questions.map((question) => (
        <>{question.text}</>
      ))}
    </div>
  );
};

export default ConstraintQuizGame;
