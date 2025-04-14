import React from "react";
import { Question } from "../types/Question";

interface Props {
  questions: Question[];
  userAnswers: { [id: number]: string };
  onRestart: () => void;
}

const FeedbackScreen: React.FC<Props> = ({ questions, userAnswers, onRestart }) => {
  const score = questions.reduce((acc, q) => {
    return acc + (userAnswers[q.id] === q.correctAnswer ? 1 : 0);
  }, 0);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Your Score: {score} / {questions.length}</h2>

      {questions.map((q) => {
        const userAnswer = userAnswers[q.id];
        const isCorrect = userAnswer === q.correctAnswer;

        return (
          <div key={q.id} className="mb-4 p-4 border rounded bg-white">
            <p className="font-medium">{q.sentence.replace("___", userAnswer || "______")}</p>
            {!isCorrect && (
              <p className="text-sm text-red-600">Correct Answer: <strong>{q.correctAnswer}</strong></p>
            )}
            <p className={`text-sm mt-1 ${isCorrect ? "text-green-600" : "text-red-600"}`}>
              {isCorrect ? "✔ Correct" : "✘ Incorrect"}
            </p>
          </div>
        );
      })}

      <button
        onClick={onRestart}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Try Again
      </button>
    </div>
  );
};

export default FeedbackScreen;
