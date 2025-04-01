import React from "react";
import { Trophy } from "lucide-react";

const Result = ({ score, totalQuestions, onRestart, userName }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const isHighScore = percentage > 70;

  return (
    <div className="min-h-screen bg-[#F3F3E9] flex flex-col">
      <header className="px-12 py-4 border-b border-[#D9D9D9] flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#B92B5D]">QuizMania</h1>
        <span className="text-gray-600">Welcome, {userName}</span>
      </header>

      <main className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <div
              className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
                isHighScore ? "bg-green-100" : "bg-red-100"
              }`}
            >
              {isHighScore ? (
                <Trophy className="w-12 h-12 text-green-500" />
              ) : (
                <span className="text-6xl">😕</span>
              )}
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {isHighScore ? "CONGRATULATIONS" : "BETTER LUCK NEXT TIME"}
            </h2>
            <p className="text-gray-600">You successfully completed the Quiz</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-700 mb-4">
              Your Score
            </h3>
            <div
              className={`text-6xl font-bold mb-2 ${
                isHighScore ? "text-green-500" : "text-red-500"
              }`}
            >
              {percentage}%
            </div>
            <p className="text-xl text-gray-800">
              {isHighScore ? "Great Job!" : "Keep Practicing!"}
            </p>
          </div>

          <div className="rounded-md border border-gray-300 p-6 mb-8">
            <h4 className="text-gray-700 mb-4">
              Out of {totalQuestions} questions
            </h4>
            <div className="flex justify-center gap-8">
              <div>
                <div className="text-green-500 font-bold text-xl">{score}</div>
                <div className="text-sm text-gray-600">Correct</div>
              </div>
              <div>
                <div className="text-red-500 font-bold text-xl">
                  {totalQuestions - score}
                </div>
                <div className="text-sm text-gray-600">Incorrect</div>
              </div>
            </div>
          </div>

          <button
            onClick={onRestart}
            className="bg-[#B92B5D] cursor-pointer text-white px-8 py-3 rounded-lg inline-flex items-center gap-2 transition-colors duration-200"
          >
            Retake Quiz
          </button>
        </div>
      </main>
    </div>
  );
};

export default Result;
