import React from "react";
import { Question } from "../types/Question";

interface Props {
  question: Question;
  selectedAnswer: string | null;
  onSelect: (word: string) => void;
  onUnselect: () => void;
}

const SentenceCard: React.FC<Props> = ({ question, selectedAnswer, onSelect, onUnselect }) => {
  const sentenceParts = question.sentence.split("___");

  return (
    <div className="text-lg mb-6">
      <p className="mb-4">
        {sentenceParts[0]}
        <span
          onClick={() => selectedAnswer && onUnselect()}
          className="inline-block border-b-2 border-dashed min-w-[60px] px-2 cursor-pointer hover:bg-gray-200"
        >
          {selectedAnswer || "______"}
        </span>
        {sentenceParts[1]}
      </p>
      <div className="flex flex-wrap gap-4">
        {question.options.map((option) => (
          <button
            key={option}
            className={`px-4 py-2 rounded bg-blue-100 hover:bg-blue-300 ${
              selectedAnswer === option ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => onSelect(option)}
            disabled={!!selectedAnswer}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SentenceCard;
