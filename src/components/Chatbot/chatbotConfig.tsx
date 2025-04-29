import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

const BotAvatar = () => (
  <div className="react-chatbot-kit-chat-bot-avatar-container">
    <div className="react-chatbot-kit-chat-bot-avatar">
      <div className="react-chatbot-kit-chat-bot-avatar-letter">
        K
      </div>
    </div>
  </div>
);

export const config = {
    botName: "KOAN Assistant",
    initialMessages: [
      createChatBotMessage("Hello! How can I help you with KOAN Petroleum today?", {})
    ],
    customStyles: {
      botMessageBox: {
        backgroundColor: "#4A00C3",
      },
      chatButton: {
        backgroundColor: "#4A00C3",
      }, 
    },
    customComponents: {
      botAvatar: BotAvatar,
    },
};

export default config;