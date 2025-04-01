export const quizData = {
  categories: [
    {
      id: "js_basics",
      name: "JavaScript Basics",
      questions: [
        {
          id: "q1",
          question: "Which method can be used to round a number to the nearest integer in JavaScript?",
          options: ["A. Math.round()", "B. Math.floor()", "C. Math.ceil()", "D. Math.random()"],
          correctAnswer: "A",
          timeLimit: 10
        },
        {
          id: "q2",
          question: "What is the correct way to declare a variable in JavaScript?",
          options: ["A. variable name = value", "B. let name = value", "C. var = name = value", "D. const: name = value"],
          correctAnswer: "B",
          timeLimit: 10
        },
        {
          id: "q3",
          question: "Which operator is used for strict equality comparison in JavaScript?",
          options: ["A. ==", "B. ===", "C. =", "D. !="],
          correctAnswer: "B",
          timeLimit: 10
        },
        {
          id: "q4",
          question: "What is the purpose of the 'typeof' operator in JavaScript?",
          options: ["A. To check if a variable exists", "B. To determine the type of a value", "C. To convert between types", "D. To create new types"],
          correctAnswer: "B",
          timeLimit: 10
        },
        {
          id: "q5",
          question: "Which method is used to add elements to the end of an array?",
          options: ["A. push()", "B. append()", "C. add()", "D. insert()"],
          correctAnswer: "A",
          timeLimit: 10
        },
        {
          id: "q6",
          question: "Which keyword is used to define a constant variable in JavaScript?",
          options: ["A. let", "B. var", "C. const", "D. static"],
          correctAnswer: "C",
          timeLimit: 10
        },
        {
          id: "q7",
          question: "How do you write a single-line comment in JavaScript?",
          options: ["A. <!-- comment -->", "B. // comment", "C. /* comment */", "D. ** comment"],
          correctAnswer: "B",
          timeLimit: 10
        },
        {
          id: "q8",
          question: "What will `typeof null` return in JavaScript?",
          options: ["A. 'null'", "B. 'object'", "C. 'undefined'", "D. 'string'"],
          correctAnswer: "B",
          timeLimit: 10
        },
        {
          id: "q9",
          question: "Which function is used to parse a JSON string into an object?",
          options: ["A. JSON.parse()", "B. JSON.stringify()", "C. JSON.toObject()", "D. JSON.decode()"],
          correctAnswer: "A",
          timeLimit: 10
        },
        {
          id: "q10",
          question: "What does the `map` function do in JavaScript?",
          options: ["A. Modifies an array in place", "B. Creates a new array with transformed elements", "C. Filters elements from an array", "D. Sorts an array"],
          correctAnswer: "B",
          timeLimit: 10
        }
      ]
    },
    {
      id: "react_basics",
      name: "React Basics",
      questions: [
        {
          id: "q1",
          question: "What hook is used to manage state in React functional components?",
          options: ["A. useEffect", "B. useState", "C. useContext", "D. useReducer"],
          correctAnswer: "B",
          timeLimit: 10
        },
        {
          id: "q2",
          question: "What is JSX in React?",
          options: ["A. A JavaScript XML syntax extension", "B. A new programming language", "C. A database query language", "D. A styling framework"],
          correctAnswer: "A",
          timeLimit: 10
        },
        {
          id: "q3",
          question: "How do you pass data from parent to child component?",
          options: ["A. Using state", "B. Using props", "C. Using context", "D. Using refs"],
          correctAnswer: "B",
          timeLimit: 10
        },
        {
          id: "q4",
          question: "What is the purpose of useEffect hook?",
          options: ["A. To handle events", "B. To manage state", "C. To perform side effects", "D. To create components"],
          correctAnswer: "C",
          timeLimit: 10
        },
        {
          id: "q5",
          question: "What is the virtual DOM in React?",
          options: ["A. A direct copy of the browser DOM", "B. A lightweight copy of the actual DOM", "C. A database management system", "D. A styling framework"],
          correctAnswer: "B",
          timeLimit: 10
        },
        {
          id: "q6",
          question: "What is the purpose of keys in React lists?",
          options: ["A. To optimize rendering performance", "B. To store component state", "C. To define CSS styles", "D. To handle events"],
          correctAnswer: "A",
          timeLimit: 10
        },
        {
          id: "q7",
          question: "How can you optimize performance in React applications?",
          options: ["A. Using React.memo", "B. Using useEffect", "C. Avoiding JSX", "D. Using more class components"],
          correctAnswer: "A",
          timeLimit: 10
        },
        {
          id: "q8",
          question: "Which statement about React fragments is true?",
          options: ["A. Fragments prevent unnecessary div elements", "B. Fragments replace components", "C. Fragments are required in all components", "D. Fragments handle CSS styling"],
          correctAnswer: "A",
          timeLimit: 10
        },
        {
          id: "q9",
          question: "What does useRef hook return?",
          options: ["A. A function", "B. A mutable object with a .current property", "C. A DOM element", "D. A state variable"],
          correctAnswer: "B",
          timeLimit: 10
        },
        {
          id: "q10",
          question: "How can you conditionally render a component in React?",
          options: ["A. Using if-else", "B. Using ternary operator", "C. Using && operator", "D. All of the above"],
          correctAnswer: "D",
          timeLimit: 10
        }
      ]
    }
  ]
};