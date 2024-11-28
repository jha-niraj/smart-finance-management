import { GEMINI_API_KEY } from "../config";

export const getGeminiAnswer = async (question) => {
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: [{ parts: [{ text: question }] }] })
        });
        if (!response.ok) throw new Error('Failed to get answer');
        return (await response.json()).candidates[0].content.parts[0].text;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

// import fetch from 'node-fetch'; // Use node-fetch if on Node.js
// import { OPENAI_API_KEY } from '../config';

// export const getChatGPTResponse = async (question) => {
//     try {
//         const response = await fetch("https://api.openai.com/v1/chat/completions", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": `Bearer ${OPENAI_API_KEY}`,
//             },
//             body: JSON.stringify({
//                 model: "gpt-3.5-turbo", // or "gpt-4"
//                 messages: [{ role: "user", content: question }],
//                 max_tokens: 150, // Adjust based on your needs
//                 temperature: 0.7, // Controls creativity
//             }),
//         });

//         if (!response.ok) {
//             const error = await response.json();
//             throw new Error(error.error.message || "API request failed");
//         }

//         const data = await response.json();
//         return data.choices[0].message.content;
//     } catch (error) {
//         console.error("Error:", error);
//     }
// };
