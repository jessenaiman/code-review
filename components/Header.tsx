
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full p-4 border-b border-gray-700/50 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
      <div className="container mx-auto flex items-center gap-3">
         <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
         </div>
        <h1 className="text-xl font-bold text-gray-100 tracking-tight">
          Gemini Code Reviewer
        </h1>
      </div>
    </header>
  );
};

export default Header;
