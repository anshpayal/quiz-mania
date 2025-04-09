// File: src/components/Quiz.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Timer } from "lucide-react";
import { useQuiz } from "../context/QuizContext";
import Header from "./Header";

const Quiz = () => {
  const {
    selectedCategory,
    userName,
    handleQuizComplete,
    setSkippedQuestions,
  } = useQuiz();
  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [skippedArray, setSkippedArray] = useState([]);

  // Redirect if no category is selected
  // useEffect(() => {
  //   if (!selectedCategory) {
  //     navigate("/");
  //   }
  // }, [selectedCategory, navigate]);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleNextQuestion();
          return 10;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestionIndex]);

  // Return null while potentially redirecting
  if (!selectedCategory) return null;

  const currentQuestion = selectedCategory.questions[currentQuestionIndex];
  const progress =
    ((currentQuestionIndex + 1) / selectedCategory.questions.length) * 100;
  const isLastQuestion =
    currentQuestionIndex === selectedCategory.questions.length - 1;

  const handleNextQuestion = () => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }
    if (!selectedAnswer) {
      setSkippedArray((prev) => [...prev, currentQuestionIndex]);
    }

    if (currentQuestionIndex < selectedCategory.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setTimeLeft(10);
    } else {
      // Update context with final score and skipped questions
      handleQuizComplete(
        score + (selectedAnswer === currentQuestion.correctAnswer ? 1 : 0)
      );
      setSkippedQuestions(skippedArray);
      navigate("/results");
    }
  };

  const handleSkipQuestion = () => {
    setSkippedArray((prev) => [...prev, currentQuestionIndex]);
    handleNextQuestion();
  };

  const handleExitQuiz = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#F3F3E9] flex flex-col">
      <Header userName={userName} onExit={handleExitQuiz} />

      <main className="flex-1 p-8 max-w-4xl mx-auto w-full">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[#B92B5D] font-medium">
              {currentQuestionIndex + 1}/{selectedCategory.questions.length}
            </span>
            <div className="flex items-center gap-2">
              <Timer className="w-5 h-5 text-[#B92B5D]" />
              <span className="font-medium">{timeLeft}s</span>
            </div>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-[#B92B5D] rounded-lg transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-xl text-gray-800">{currentQuestion.question}</h2>

          <div className="space-y-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedAnswer(option.charAt(0))}
                className={`w-full p-4 rounded-lg text-left border-2 transition-all duration-200 ${
                  selectedAnswer === option.charAt(0)
                    ? "border-[#B92B5D]"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="flex gap-4 items-center pt-4">
            <button
              onClick={handleNextQuestion}
              className="bg-[#B92B5D] text-white px-8 py-3 rounded-lg flex items-center gap-2 cursor-pointer transition-colors duration-200"
            >
              {isLastQuestion ? "Finish" : "Next"}
            </button>
            <button
              onClick={handleSkipQuestion}
              className="text-gray-600 hover:text-gray-700 cursor-pointer"
            >
              Skip this question
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Quiz;
