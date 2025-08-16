
import React from 'react';
import LoadingSpinner from './icons/LoadingSpinner';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ReviewOutputProps {
  review: string | null;
  isLoading: boolean;
  error: string | null;
}

const ReviewOutput: React.FC<ReviewOutputProps> = ({ review, isLoading, error }) => {
    
    const renderContent = () => {
        if (isLoading) {
            return <div className="flex items-center justify-center h-full"><LoadingSpinner /></div>;
        }
        if (error) {
            return (
                <div className="flex items-center justify-center h-full">
                    <div className="bg-red-900/50 border border-red-700 text-red-200 p-4 rounded-md">
                        <h3 className="font-bold mb-2">An Error Occurred</h3>
                        <p>{error}</p>
                    </div>
                </div>
            );
        }
        if (review) {
            return (
                <div 
                    className="prose prose-invert prose-sm md:prose-base max-w-none p-1 font-sans text-gray-300"
                >
                   <ReactMarkdown remarkPlugins={[remarkGfm]}>{review}</ReactMarkdown>
                </div>
            );
        }

        return (
            <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
                <div className="w-16 h-16 mb-4 border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center">
                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M12 14 8 10"/></svg>
                </div>
                <h3 className="text-lg font-medium text-gray-400">Review Output</h3>
                <p className="mt-1 text-sm">Your code review will appear here once submitted.</p>
            </div>
        );
    };

    return (
        <div className="flex flex-col h-full bg-gray-800/50 rounded-lg border border-gray-700/50">
           <div className="p-4 border-b border-gray-700/50">
             <h2 className="text-lg font-semibold text-gray-200">Gemini's Feedback</h2>
           </div>
           <div className="p-4 flex-grow overflow-y-auto">
               {renderContent()}
           </div>
        </div>
    );
};

export default ReviewOutput;
