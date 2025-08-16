
import React from 'react';
import LanguageSelector from './LanguageSelector';
import SparklesIcon from './icons/SparklesIcon';
import type { LanguageOption } from '../types';
import { SUPPORTED_LANGUAGES } from '../constants';

interface CodeInputProps {
  code: string;
  onCodeChange: (code: string) => void;
  language: string;
  onLanguageChange: (language:string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const CodeInput: React.FC<CodeInputProps> = ({ code, onCodeChange, language, onLanguageChange, onSubmit, isLoading }) => {
  return (
    <div className="flex flex-col h-full bg-gray-800/50 rounded-lg border border-gray-700/50 p-4">
      <LanguageSelector 
        languages={SUPPORTED_LANGUAGES}
        selectedLanguage={language}
        onLanguageChange={onLanguageChange}
      />
      <div className="flex-grow mt-4 flex flex-col">
        <label htmlFor="code-textarea" className="block text-sm font-medium text-gray-400 mb-2">
          Your Code
        </label>
        <textarea
          id="code-textarea"
          value={code}
          onChange={(e) => onCodeChange(e.target.value)}
          placeholder="Paste your code here..."
          className="w-full flex-grow bg-gray-900 text-gray-200 font-mono p-4 rounded-md border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200 resize-none"
          spellCheck="false"
        />
      </div>
      <button
        onClick={onSubmit}
        disabled={isLoading || !code.trim()}
        className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-3 px-4 rounded-md hover:bg-blue-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Reviewing...
          </>
        ) : (
          <>
            <SparklesIcon className="w-5 h-5" />
            Review Code
          </>
        )}
      </button>
    </div>
  );
};

export default CodeInput;
