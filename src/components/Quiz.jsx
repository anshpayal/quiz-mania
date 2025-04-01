import React, { useState, useEffect } from 'react';
import { Timer, ArrowRight, CheckCircle } from 'lucide-react';

const Quiz = ({ category, onComplete, onExit, userName }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [skippedQuestions, setSkippedQuestions] = useState([]);

  const currentQuestion = category.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / category.questions.length) * 100;
  const isLastQuestion = currentQuestionIndex === category.questions.length - 1;

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

  const handleNextQuestion = () => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }
    if (!selectedAnswer) {
      setSkippedQuestions((prev) => [...prev, currentQuestionIndex]);
    }

    if (currentQuestionIndex < category.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setTimeLeft(10);
    } else {
      onComplete(score);
    }
  };

  const handleSkipQuestion = () => {
    setSkippedQuestions((prev) => [...prev, currentQuestionIndex]);
    handleNextQuestion();
  };

  return (
    <div className="min-h-screen bg-[#F3F3E9] flex flex-col">
      <header className="border-b border-[#D9D9D9] px-4 md:px-12 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#B92B5D]">QuizMania</h1>
        <div className="flex items-center gap-4">
          <span className="text-gray-600">Welcome, {userName}</span>
          <button
            onClick={onExit}
            className="text-[#B92B5D] border border-[#B92B5D] px-4 py-2 rounded-lg cursor-pointer"
          >
            Exit Quiz
          </button>
        </div>
      </header>

      <main className="flex-1 p-8 max-w-4xl mx-auto w-full">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[#B92B5D] font-medium">
              {currentQuestionIndex + 1}/{category.questions.length}
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
              {isLastQuestion ? (
                <>
                  Finish
                </>
              ) : (
                <>
                  Next
                </>
              )}
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