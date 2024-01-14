import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuizConstraintPage from "./views/QuizConstraintPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/quiz-constraint" element={<QuizConstraintPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
