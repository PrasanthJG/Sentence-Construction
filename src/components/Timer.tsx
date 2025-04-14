import React, { useEffect } from "react";

interface Props {
  timeLeft: number;
  onTimeUp: () => void;
}

const Timer: React.FC<Props> = ({ timeLeft, onTimeUp }) => {
  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    const timer = setTimeout(() => {
      onTimeUp();
    }, timeLeft * 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="text-right font-semibold text-red-600">
      Time Left: {timeLeft}s
    </div>
  );
};

export default Timer;
