import React from 'react';

interface ProgressBarProps {
  currentCount: number; // how many blanks are filled
  totalCount: number;   // total number of blanks
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentCount, totalCount }) => {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: totalCount }).map((_, index) => (
        <div
          key={index}
          className={`h-1 flex-1 rounded-sm transition-all duration-300 ${
            index < currentCount ? 'bg-orange-500' : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
