"use client";

import { useState } from "react";

export type SelectOption = {
  value: string;
  label: string;
};

interface SelectProps {
  options: SelectOption[];
  //   selectedOption: string;
  onChange: (option: SelectOption) => void;
}

export default function Select({ options, onChange }: SelectProps) {
  const [selectedOption, setSelectedOption] = useState({} as SelectOption);
  const [isOpen, setIsOpen] = useState(false);
  const hasOption = !!selectedOption.value;

  function handleOptionClick(option: SelectOption) {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  }

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative h-10 w-96 rounded bg-white border border-gray-300">
      <div
        className="flex items-center px-4 w-full h-full"
        onClick={toggleSelect}
      >
        {hasOption ? selectedOption.label : "Selecione"}
      </div>
      {isOpen && (
        <ul
          className="absolute mt-1 py-4 top-full left-0 right-0 bg-white z-50 shadow rounded"
          role="listbox"
        >
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className={[
                "flex items-center h-10 w-full px-4 hover:bg-gray-100",
                selectedOption.value === option.value ? "!bg-gray-200" : "",
              ].join(" ")}
              role="option"
              aria-selected={selectedOption.value === option.value}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
