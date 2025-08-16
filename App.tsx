
import React, { useState, useCallback } from 'react';
import CodeInput from './components/CodeInput';
import ReviewOutput from './components/ReviewOutput';
import Header from './components/Header';
import { reviewCode } from './services/geminiService';
import { DEFAULT_CODE_SNIPPET, SUPPORTED_LANGUAGES } from './constants';

const App: React.FC = () => {
  const [code, setCode] = useState<string>(DEFAULT_CODE_SNIPPET);
  const [language, setLanguage] = useState<string>(SUPPORTED_LANGUAGES[0].value);
  const [review, setReview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleReview = useCallback(async () => {
    if (!code.trim()) return;

    setIsLoading(true);
    setReview(null);
    setError(null);

    try {
      const result = await reviewCode(code, language);
      setReview(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [code, language]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full min-h-[calc(100vh-150px)]">
          <CodeInput
            code={code}
            onCodeChange={setCode}
            language={language}
            onLanguageChange={setLanguage}
            onSubmit={handleReview}
            isLoading={isLoading}
          />
          <ReviewOutput
            review={review}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
