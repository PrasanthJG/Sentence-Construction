import React, { useEffect, useState } from "react";

interface TimerProps {
  minute?: number;
  seconds?: number;
  onTimeUp: () => void;
}

const Timer: React.FC<TimerProps> = ({ minute = 0, seconds = 0, onTimeUp }) => {
  const totalSeconds = minute * 60 + seconds;
  const [timeLeft, setTimeLeft] = useState(totalSeconds);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="text-xl font-semibold text-center py-2 text-blue-600">
      Time Left: {formatTime(timeLeft)}
    </div>
  );
};

export default Timer;
