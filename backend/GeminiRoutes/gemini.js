const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require('dotenv');
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const buildPrompt = (length, tone, inputText) => {
  return `
Summarize the following content based on the provided parameters:

Length: ${length}
Tone: ${tone}

Content:
"""
${inputText}
"""

Ensure the summary captures the core ideas accurately, adheres to the specified tone, and matches the desired length. Use clear and concise language. If bullet points are required, format the output accordingly.
  `.trim();
};

const generateSummary = async (length, tone, inputText) => {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
    const prompt = buildPrompt(length, tone, inputText);
    const result = await model.generateContent([{ text: prompt }]);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating summary:', error);
    throw error;
  }
};

module.exports = { generateSummary };
