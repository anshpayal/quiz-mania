import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { QuizProvider } from "./context/QuizContext";
import CategorySelection from "./components/CategorySelection";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

function App() {
  return (
    <QuizProvider>
      <Router>
        <Routes>
          <Route path="/" element={<CategorySelection />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<Result />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </QuizProvider>
  );
}

export default App;
