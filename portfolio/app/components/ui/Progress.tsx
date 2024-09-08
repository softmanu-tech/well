import React from 'react';

interface ProgressProps {
  value: number;
  max?: number;
  className?: string;
}

const Progress: React.FC<ProgressProps> = ({ value, max = 100, className = '' }) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className={`w-full h-4 bg-gray-200 rounded-full overflow-hidden ${className}`}>
      <div 
        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
        style={{ 
          width: `${percentage}%`,
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }}
      >
        <div className="w-full h-full bg-white opacity-30 animate-wave"></div>
      </div>
    </div>
  );
};

export default Progress;