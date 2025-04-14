import React from "react";
import { Question } from "../types/Question";
import { Button } from "../components/ui/Button";

interface Props {
  question: Question;
  selectedWords: string[];
  onSelectWord: (word: string) => void;
  onRemoveWord: (index: number) => void;
}

const SentenceCard: React.FC<Props> = ({ question, selectedWords, onSelectWord, onRemoveWord }) => {
  const blanks = question.correctAnswer.length;

  const renderSentence = () => {
    const parts = question.question.split("___");
    return parts.map((part, i) => (
      <React.Fragment key={i}>
        <span>{part}</span>
        {i < blanks && (
          <button
            className="border-b-2 border-gray-500 px-2 text-blue-700 font-medium mx-1"
            onClick={() => onRemoveWord(i)}
          >
            {selectedWords[i] || "_______"}
          </button>
        )}
      </React.Fragment>
    ));
  };

  return (
    <div className="p-4 border rounded-xl shadow bg-white space-y-4">
      <p className="text-lg">{renderSentence()}</p>
      <div className="flex flex-wrap gap-2">
        {question.options.map((option) => (
          <Button
            key={option}
            variant="outline"
            onClick={() => onSelectWord(option)}
            disabled={selectedWords.includes(option)}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SentenceCard;
