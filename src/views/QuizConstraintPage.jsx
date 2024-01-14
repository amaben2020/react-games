// display the questions
// select one option
// display green border for correct and red for wrong
// move to next question
// ensure each question has 3 attempts
// move to finish page with score when attempts are completed

import ConstraintQuizGame from "../components/quizzes/constraint/ConstraintQuiz";

// give time constraint with timer i.e 2mins per question
const QuizConstraintPage = () => {
  return (
    <div>
      <ConstraintQuizGame />
    </div>
  );
};

export default QuizConstraintPage;
