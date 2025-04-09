import React from "react";

const RulesModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-90 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg w-full max-w-xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          <span className="text-xl font-bold">×</span>
        </button>

        <h2 className="text-3xl font-bold text-[#333]">Quiz rules</h2>

        <div className="mt-6 space-y-6">
          <div className="">
            <h3 className="font-semibold text-lg mb-2 px-4 rounded-md bg-[#f9f7e8] ">
              10-Second Timer
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Each question comes with a 10-second timer.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  If you don't answer within the time limit, the app will
                  automatically move to the next question.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2 rounded-md bg-[#f9f7e8] px-4">
              Manual Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  You can navigate to the next question manually before the
                  timer expires.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Use the "Next" button to move ahead if you're ready before the
                  timer runs out.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2 rounded-md bg-[#f9f7e8] px-4">
              Final Score and Performance Message
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  After all questions are answered, your final score will be
                  displayed.
                </span>
              </li>
              <li>
                <span className="mr-2">•</span>
                <span>
                  Based on your performance, you will receive a personalized
                  message:
                </span>
                <ul className="ml-6 mt-2 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Great job!: If you score <strong>above 70%</strong>.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Keep practicing!: If you score <strong>below 70%</strong>.
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulesModal;
