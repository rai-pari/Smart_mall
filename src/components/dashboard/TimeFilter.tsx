import React from 'react';
import { Clock } from 'lucide-react';

interface TimeFilterProps {
  selected: string;
  onChange: (value: string) => void;
}

export const TimeFilter = ({ selected, onChange }: TimeFilterProps) => {
  const options = ['24h', '7d', '30d', '90d'];

  return (
    <div className="flex items-center space-x-2 bg-gray-50 p-1 rounded-lg">
      <Clock className="w-4 h-4 text-gray-500 ml-2" />
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
            selected === option
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};