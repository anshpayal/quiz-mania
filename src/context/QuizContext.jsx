// File: src/context/QuizContext.jsx
import React, { createContext, useContext, useState } from "react";
import { quizData } from "../data/quizData";

const QuizContext = createContext();

export const useQuiz = () => useContext(QuizContext);

export const QuizProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);
  const [skippedQuestions, setSkippedQuestions] = useState([]);

  const handleCategorySelect = (category, name) => {
    setSelectedCategory(category);
    setUserName(name);
    setScore(0);
    setSkippedQuestions([]);
  };

  const handleQuizComplete = (finalScore, skipped) => {
    setScore(finalScore);
  };

  const handleRestart = () => {
    setSelectedCategory(null);
    setScore(0);
    setSkippedQuestions([]);
  };

  const value = {
    categories: quizData.categories,
    selectedCategory,
    userName,
    score,
    skippedQuestions,
    setSkippedQuestions,
    handleCategorySelect,
    handleQuizComplete,
    handleRestart,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
