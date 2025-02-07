import React, { useState } from "react";
import { askAI } from "../utils/askAI";

const SavageBot = () => {
  const [inputValue, setInputValue] = useState("");
  const [savageReply, setSavageReply] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSavageReply("");

    try {
      const response = await askAI(inputValue);
      setSavageReply(response);
    } catch (error) {
      setSavageReply("Oops! The AI got too savage and broke. Try again! 🤖💥");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-6 bg-gradient-to-br from-purple-900 via-black to-gray-900 text-white">
      {/* 🚀 Project Name & Caption */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-green-400 neon-glow-green">
          <span className="block sm:hidden">SavageBot</span>
          <span className="hidden sm:block">🧠 SavageBot 🔥</span>
        </h1>
      </div>

      {/* ⚠️ Warning Heading */}
      <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-400 border-l-4 p-2 rounded-md mb-16 md:mb-20">
        ⚠️ Ask at your own risk! SavageBot takes no prisoners. 💀🔥
      </p>

      {/* 💬 Form Section */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md md:max-w-lg flex flex-col items-center gap-4"
      >
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Ask something... if you dare! 😈"
          className="w-full p-3 text-base md:text-lg border-2 border-green-400 bg-black text-white rounded-lg focus:ring-2 focus:ring-green-400 outline-none transition-all duration-300 placeholder-gray-400"
        />
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 text-base md:text-lg font-bold bg-green-500 text-white rounded-lg hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          {loading ? "Thinking... 🤔" : "Roast Me! 🔥"}
        </button>
      </form>

      {/* 🎤 SavageBot Reply Section */}
      {loading ? (
        <div className="mt-6 text-sm md:text-lg text-gray-400">Loading... Preparing your roast! 🔥</div>
      ) : (
        savageReply && (
          <pre
            className="mt-6 p-4 w-full max-w-lg md:max-w-5xl bg-gray-900 text-green-400 font-mono text-sm md:text-lg border border-gray-700 rounded-lg overflow-auto min-h-[80px] md:min-h-[100px] animate-pulse"
            style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
          >
            {savageReply}
          </pre>
        )
      )}

      {/* 🚨 Disclaimer */}
      <p className="mt-12 md:mt-16 text-xs sm:text-sm text-gray-400 text-center">
        🚨 **Disclaimer:** SavageBot is purely for entertainment purposes. 😆🔥
      </p>

      {/* ✨ Custom Styling for Neon Glow */}
      <style>
        {`
          @keyframes neonGlowGreen {
            0% { text-shadow: 0 0 5px green, 0 0 10px green, 0 0 20px green; }
            50% { text-shadow: 0 0 10px green, 0 0 20px green, 0 0 40px green; }
            100% { text-shadow: 0 0 5px green, 0 0 10px green, 0 0 20px green; }
          }
          .neon-glow-green {
            animation: neonGlowGreen 1.5s infinite alternate;
          }
        `}
      </style>
    </div>
  );
};

export default SavageBot;
