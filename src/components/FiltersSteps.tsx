import React, { useState } from 'react';

interface FilterOption {
  id: string;
  label: string;
  icon?: JSX.Element; // SVG or Image component
}

interface FilterProps {
  title: string;
  options: FilterOption[];
}

const FiltersSteps: React.FC<FilterProps> = ({ title, options }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (id: string) => {
    setSelectedOption(id);
  };

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="flex gap-4 flex-wrap">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleOptionClick(option.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md border ${
              selectedOption === option.id
                ? 'bg-black text-white border-black'
                : 'bg-white text-black border-gray-300'
            }`}
          >
            {option.icon && <span>{option.icon}</span>}
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FiltersSteps;
