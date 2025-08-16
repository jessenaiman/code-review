
import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const reviewCode = async (code: string, language: string): Promise<string> => {
    const prompt = `
You are an expert software engineer and senior code reviewer.
Analyze the following ${language} code snippet.

Provide a comprehensive review covering the following aspects:
1.  **Correctness**: Identify any potential bugs, logic errors, or edge cases that are not handled.
2.  **Best Practices**: Suggest improvements based on established ${language} conventions and best practices.
3.  **Performance**: Point out any potential performance bottlenecks and suggest optimizations.
4.  **Readability & Style**: Comment on code clarity, naming conventions, and overall style. Suggest ways to make the code more maintainable.
5.  **Security**: Highlight any potential security vulnerabilities.

Present your feedback in a structured and easy-to-read format using Markdown. Use headings, lists, and code blocks for clarity. Be constructive and provide actionable suggestions with code examples where applicable.

\`\`\`${language}
${code}
\`\`\`
`;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });
        return response.text;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        if (error instanceof Error) {
            return `An error occurred while reviewing the code: ${error.message}`;
        }
        return "An unknown error occurred while reviewing the code.";
    }
};
