import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Pencil } from 'lucide-react';
import { Separator } from '../components/ui/Separator';

const SentenceConstructionStart: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-8">
            <div className="text-center mb-6">
        <div className="flex justify-center mb-4">
          <Pencil className="h-10 w-10 text-gray-700" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Sentence Construction</h1>
        <p className="text-gray-500 max-w-md mx-auto">
          User has to construct a sentence with random words by placing them in the correct order.
        </p>
      </div>

      
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-4">
          <div>
            <h2 className="text-sm text-gray-600 mb-1">Time Per Question</h2>
            <p className="text-lg font-medium">1 minute</p>
          </div>
          <div>
            <h2 className="text-sm text-gray-600 mb-1">Total Questions</h2>
            <p className="text-lg font-medium">10</p>
          </div>
          <div>
            <h2 className="text-sm text-gray-600 mb-1">Coins</h2>
            <p className="text-lg font-medium flex justify-center items-center gap-2">
              <span className="h-2 w-2 bg-yellow-400 rounded-full" />
              🪙 20 coins
            </p>
          </div>
        </div>

                <div className="my-6">
          <Separator />
        </div>

        <p className="text-sm text-gray-600 text-center mb-6">
          In this round, construct the sentence using the provided options. Select words in the correct order.
        </p>

        <div className="text-center">
          <Button onClick={() => navigate('/')} className="text-white font-semibold">
            Back
          </Button>
          <Button onClick={() => navigate('/quiz')} className="text-white font-semibold">
            Start
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SentenceConstructionStart;
