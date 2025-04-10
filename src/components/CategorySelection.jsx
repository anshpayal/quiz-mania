import React, { useState } from "react";
import Header from "./Header";
import RulesModal from "./RulesModal";

const CategorySelection = ({ categories, onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [userName, setUserName] = useState("");
  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);

  const handleStartQuiz = () => {
    if (selectedCategory && userName.trim()) {
      onSelectCategory(selectedCategory, userName);
    }
  };

  const openRulesModal = () => {
    setIsRulesModalOpen(true);
  };

  const closeRulesModal = () => {
    setIsRulesModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F3F3E9] flex flex-col">
      <Header userName="" onExit={null} />

      <main className="flex-1 p-8 max-w-3xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to <span className="text-[#B92B5D]">QuizMania</span>
          </h2>
          <p className="text-black mb-2 p-4 bg-[#D9D9D94D]">
            Please read all the rules about this quiz before you start.<br/>
            <button
            onClick={openRulesModal}
            className="text-[#B92B5D] font-semibold hover:underline"
          >
            Quiz Rules
          </button>
          </p>
        </div>

        <div className="space-y-6">
          <div className="mb-8 w-full">
            <p className="text-gray-700 font-medium mb-3 ">Full Name</p>
            <input
              type="text"
              placeholder="Full name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#B92B5D] focus:outline-none"
            />
          </div>
          <h3 className="text-gray-700 font-medium">
            Please select topic to continue
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category)}
                className={`border-2 rounded-lg p-3 transition-all duration-200 flex flex-col items-center gap-4 ${
                  selectedCategory?.id === category.id
                    ? "border-[#B92B5D]"
                    : "border-gray-300 hover:border-[#B92B5D]"
                }`}
              >
                <h2 className="text-lg font-semibold text-gray-700">
                  {category.name}
                </h2>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={handleStartQuiz}
            disabled={!selectedCategory || !userName.trim()}
            className={`px-8 py-3 rounded-lg text-white text-xl font-medium flex items-center gap-2 cursor-pointer ${
              selectedCategory && userName.trim()
                ? "bg-[#B92B5D]"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Start Quiz
          </button>
        </div>
      </main>

      <RulesModal isOpen={isRulesModalOpen} onClose={closeRulesModal} />
    </div>
  );
};

export default CategorySelection;
