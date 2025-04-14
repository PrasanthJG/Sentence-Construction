import React, { useState } from "react";
import SentenceCard from "../components/SentenceCard";
import Timer from "../components/Timer";
import { Question } from "../types/Question";
import data from "../data/db.json";
import { useNavigate } from "react-router-dom";
import "./Quiz.css";


const Quiz: React.FC = () => {
  const navigate = useNavigate();
  const questions: Question[] = data.data.questions;
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[][]>(Array(10).fill([]));
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelect = (word: string) => {
    if (selected.length < questions[current].correctAnswer.length) {
      setSelected([...selected, word]);
    }
  };

  const handleRemove = (index: number) => {
    const newSelected = [...selected];
    newSelected.splice(index, 1);
    setSelected(newSelected);
  };

  const handleNext = () => {
    const newAnswers = [...answers];
    newAnswers[current] = selected;
    setAnswers(newAnswers);
    if (current === questions.length - 1) {
      navigate("/result", { state: { answers: newAnswers } });
    } else {
      setCurrent(current + 1);
      setSelected([]);
    }
  };

  return (
    <div className="quiz-container">
      <Timer minute={5} onTimeUp={handleNext} />
      <SentenceCard
        question={questions[current]}
        selectedWords={selected}
        onSelectWord={handleSelect}
        onRemoveWord={handleRemove}
      />
      <button
        onClick={handleNext}
        disabled={selected.length !== questions[current].correctAnswer.length}
        className="sentence-card"
      >
        {current === questions.length - 1 ? "Submit" : "Next"}
      </button>
    </div>
  );
};

export default Quiz;
