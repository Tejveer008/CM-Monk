import { useEffect, useState } from "react";

const Timer = ({ onTimeUp }: { onTimeUp: () => void }) => {
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp(); // Call time-up callback
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, onTimeUp]);

  return (
    <div className="w-full mb-4">
      <div className="text-lg font-semibold text-gray-800">
        Time Left: {timeLeft}s
      </div>
      <div className="w-full h-2 bg-gray-300 rounded mt-2 overflow-hidden">
        <div
          className="h-full bg-indigo-600 transition-all duration-1000"
          style={{ width: `${(timeLeft / 30) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default Timer;
