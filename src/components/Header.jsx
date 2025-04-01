import React from "react";

const Header = ({ userName, onExit }) => {
  return (
    <header className="border-b border-[#D9D9D9] px-4 md:px-12 py-4 flex justify-between items-center">
      <h1 className="text-xl md:text-2xl font-bold text-[#B92B5D]">QuizMania</h1>
      {userName && (
        <div className="flex items-center gap-4">
          <span className="text-gray-600">Welcome, {userName}</span>
          {onExit && (
            <button
              onClick={onExit}
              className="text-[#B92B5D] border border-[#B92B5D] px-2 md:px-4 py-2 rounded-lg cursor-pointer"
            >
              Exit Quiz
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
