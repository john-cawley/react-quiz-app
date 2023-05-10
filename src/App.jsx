import { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const App = () => {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answers: [
        { id: 1, answerText: "Washington, D.C.", reason: "", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answers.map((answer) => (
              <button
                key={answer.id}
                onClick={() => handleAnswerClick(answer.isCorrect)}
              >
                {answer.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
