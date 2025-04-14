import React, { useEffect, useState } from "react";
import SentenceCard from "../components/SentenceCard";
import Timer from "../components/Timer";
import FeedbackScreen from "../components/FeedbackScreen";
import { Question } from "../types/Question";

const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [userAnswers, setUserAnswers] = useState<{ [id: number]: string }>({});
  const [timeLeft, setTimeLeft] = useState(30);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  useEffect(() => {
    if (timeLeft > 0 && !showResults) {
      const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
      return () => clearInterval(timer);
    }
    if (timeLeft === 0) handleNext();
  });

  const handleSelect = (word: string) => {
    setSelectedAnswer(word);
  };

  const handleUnselect = () => {
    setSelectedAnswer(null);
  };

  const handleNext = () => {
    if (questions.length === 0) return;

    const current = questions[currentIndex];
    if (selectedAnswer) {
      setUserAnswers({ ...userAnswers, [current.id]: selectedAnswer });
    }

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setTimeLeft(30);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setUserAnswers({});
    setTimeLeft(30);
    setShowResults(false);
  };

  if (questions.length === 0) return <div className="p-4">Loading...</div>;

  if (showResults) {
    return <FeedbackScreen questions={questions} userAnswers={userAnswers} onRestart={handleRestart} />;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex justify-between mb-2">
        <span>Question {currentIndex + 1} / {questions.length}</span>
        <Timer timeLeft={timeLeft} onTimeUp={() => setTimeLeft(0)} />
      </div>

      <SentenceCard
        question={questions[currentIndex]}
        selectedAnswer={selectedAnswer}
        onSelect={handleSelect}
        onUnselect={handleUnselect}
      />

      <button
        onClick={handleNext}
        disabled={!selectedAnswer}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
      >
        {currentIndex + 1 === questions.length ? "Finish" : "Next"}
      </button>
    </div>
  );
};

export default Quiz;
