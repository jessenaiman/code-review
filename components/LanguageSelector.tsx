
import React from 'react';
import type { LanguageOption } from '../types';

interface LanguageSelectorProps {
  languages: LanguageOption[];
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ languages, selectedLanguage, onLanguageChange }) => {
  return (
    <div>
        <label htmlFor="language-select" className="block text-sm font-medium text-gray-400 mb-2">
            Language
        </label>
        <select
            id="language-select"
            value={selectedLanguage}
            onChange={(e) => onLanguageChange(e.target.value)}
            className="w-full bg-gray-900 border border-gray-700 text-gray-200 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 px-4 py-2"
        >
            {languages.map((lang) => (
                <option key={lang.value} value={lang.value}>
                    {lang.label}
                </option>
            ))}
        </select>
    </div>
  );
};

export default LanguageSelector;
