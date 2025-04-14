import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ListCheck } from 'lucide-react';
import { Separator } from '../components/ui/Separator';
import './SentenceConstructionStart.css';

const SentenceConstructionStart: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="sentence-construction-container">
      <div className="header">
        <div className="icon-container">
          <ListCheck className="icon" />
        </div>
        <h1 className="title">Sentence Construction</h1>
        <p className="description">
          User has to construct a sentence with random words by placing them in the correct order.
        </p>
      </div>

      <div className="info-card">
        <div className="info-grid">
          <div>
            <h2 className="info-title">Time Per Question</h2>
            <p className="info-value">1 minute</p>
          </div>
          <div>
            <h2 className="info-title">Total Questions</h2>
            <p className="info-value">10</p>
          </div>
          <div>
            <h2 className="info-title">Coins</h2>
            <p className="info-value coin-info">
              <span className="coin-icon" />
              🪙 20 coins
            </p>
          </div>
        </div>

        <div className="separator-container">
          <Separator />
        </div>

        <div className="button-container">
          <Button onClick={() => navigate('/')} className="button back-button">
            Back
          </Button>
          <Button onClick={() => navigate('/quiz')} className="button start-button">
            Start
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SentenceConstructionStart;
