import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuizConstraintPage from "./views/QuizConstraintPage";
import TicTacToeGame from "./views/TicTacToe";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/quiz-constraint" element={<QuizConstraintPage />} />
        <Route path="/tic-tac-toe" element={<TicTacToeGame />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
