import React, { useState } from "react";
import { quizData } from "./data/quizData";
import CategorySelection from "./components/CategorySelection";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [userName, setUserName] = useState("");
  const [skippedQuestions, setSkippedQuestions] = useState(0);

  const handleCategorySelect = (category, name) => {
    setSelectedCategory(category);
    setUserName(name);
    setShowResults(false);
    setScore(0);
    setSkippedQuestions(0);
  };

  const handleQuizComplete = (finalScore, skipped) => {
    setScore(finalScore);
    setSkippedQuestions(skipped);
    setShowResults(true);
  };

  const handleRestart = () => {
    setSelectedCategory(null);
    setShowResults(false);
    setScore(0);
    setSkippedQuestions(0);
  };

  const handleExitQuiz = () => {
    setSelectedCategory(null);
    setShowResults(false);
    setScore(0);
    setSkippedQuestions(0);
  };

  if (showResults && selectedCategory) {
    return (
      <Result
        score={score}
        totalQuestions={selectedCategory.questions.length}
        onRestart={handleRestart}
        userName={userName}
        skippedQuestions={skippedQuestions}
      />
    );
  }

  if (selectedCategory) {
    return (
      <Quiz
        category={selectedCategory}
        onComplete={handleQuizComplete}
        onExit={handleExitQuiz}
        userName={userName}
      />
    );
  }

  return (
    <CategorySelection
      categories={quizData.categories}
      onSelectCategory={handleCategorySelect}
    />
  );
}

export default App;
