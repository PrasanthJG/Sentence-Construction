import React from "react";
import { Question } from "../types/Question";

interface Props {
  questions: Question[];
  userAnswers: string[][];
}

const FeedbackScreen: React.FC<Props> = ({ questions, userAnswers }) => {
  const getScore = () => {
    return questions.reduce((score, q, i) => {
      const isCorrect = q.correctAnswer.every((word, idx) => word === userAnswers[i][idx]);
      return isCorrect ? score + 1 : score;
    }, 0);
  };

  return (
    <div className="space-y-4 p-4">
      <h2 className="text-2xl font-bold mb-4">Your Score: {getScore()}/10</h2>
      {questions.map((q, i) => {
        const isCorrect = q.correctAnswer.every((word, idx) => word === userAnswers[i][idx]);
        return (
          <div
            key={q.questionId}
            className={`p-4 border rounded-xl ${isCorrect ? "bg-green-100" : "bg-red-100"}`}
          >
            <p className="font-semibold mb-2">{q.question}</p>
            <p><strong>Your Answer:</strong> {userAnswers[i].join(", ")}</p>
            {!isCorrect && (
              <p><strong>Correct Answer:</strong> {q.correctAnswer.join(", ")}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FeedbackScreen;
