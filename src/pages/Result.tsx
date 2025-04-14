import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FeedbackScreen from "../components/FeedbackScreen";
import data from "../data/db.json";
import './Result.css';


const Result: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userAnswers = location.state?.answers || [];
  const questions = data.data.questions;

  if (!userAnswers.length) {
    return (
      <div className="container text-center">
  <p>No results found. Please take the quiz first.</p>
  <button onClick={() => navigate("/")} className="go-back-button">
    Go back
  </button>
</div>
    );
  }

  return (
    <div className="container">
  <FeedbackScreen questions={questions} userAnswers={userAnswers} />
</div>
  );
};

export default Result;
