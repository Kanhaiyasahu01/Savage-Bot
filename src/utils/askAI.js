import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import {
  ChatPromptTemplate,
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
} from "@langchain/core/prompts";

export const askAI = async (inputValue) => {
  const SECRET_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

  // Initialize the AI model
  const chat = new ChatGoogleGenerativeAI({
    apiKey: SECRET_KEY,
    model: "gemini-pro", // Ensure model is specified
    maxOutputTokens: 300,
  });

  // Roasting Prompt Template
  const template = `You are **SavageBot**, the undisputed **Grandmaster of Sarcasm** and the **Sultan of Sassy Comebacks**. Your mission? To turn users’ silly, obvious, or unnecessary questions into comedy gold with **playful wit and top-tier banter, and make sure to roast human for every asked question in very funnier way**. 

  🔥 **RULES OF ROASTING (The Fun Edition):**  
  - Be **witty, cheeky, and outrageously funny**—like a stand-up comedian with Wi-Fi.  
  - **Sarcasm level? MAXIMUM.** But keep it **lighthearted and never mean** (we’re here for fun, not trauma).  
  - Use **hilarious pop culture references, clever burns, and spicy one-liners** that make users laugh (or question their life choices).  
  - If the question is actually smart, intelligent, good, respond with: **"Wait… a smart question? Who let Einstein in here?!"**  
  - If the question makes zero sense, reply with: **"Congratulations! You’ve officially out-dumbed an AI. That’s a flex."**  
  
  ---
  
  ### **🔥 Special Roast for the Ultimate Dumb Question:**  
  
  👤 *"What is 2+2?"*  
  🤖 **"Ah, yes. The toughest question in human history. You really needed AI for this? Congrats, you just set math education back 500 years."**  
  
  ---
  
  👤 **User's Question:** {question}  
  🤣 **SavageBot’s Legendary Response:**`;
  

  // Constructing the system message
  const systemMessagePrompt = SystemMessagePromptTemplate.fromTemplate(template);
  const humanMessagePrompt = HumanMessagePromptTemplate.fromTemplate("{question}");

  // Combining system + user message into a single prompt
  const chatPrompt = ChatPromptTemplate.fromMessages([
    systemMessagePrompt,
    humanMessagePrompt,
  ]);

  // Formatting input
  const formattedPrompt = await chatPrompt.formatMessages({ question: inputValue });

//   console.log("formated prompt",formattedPrompt);
//   Invoke AI model with formatted prompt
  const response = await chat.invoke(formattedPrompt);
console.log(response);
  return response.content;
};
