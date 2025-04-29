"use client";

import Chatbot from "react-chatbot-kit";
import { useState } from "react";
import "react-chatbot-kit/build/main.css";
import config from "./chatbotConfig";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import "./chatbot-styles.css";
import { IoClose } from "react-icons/io5";
import Button from "../Button";
import { BsChatLeftFill } from "react-icons/bs";

const KoanChatbot = () => {
  const [showChat, setShowChat] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-50 font-montserrat">
      {!showChat && (
        <Button isIconOnly size="lg" radius="full" color="primary" className="" onPress={() => setShowChat(true)}>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg> */}
          <BsChatLeftFill />
        </Button>
      )}
      {showChat && (
        <div className="relative">
          <Button
            className="absolute -top-10 right-0 p-2"
            onPress={() => setShowChat(false)}
            isIconOnly
            color="primary"
    
            radius="full"
            variant="solid"
          >
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg> */}

            <IoClose className="w-5 h-5 text-white" />
          </Button>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
    </div>
  );
};

export default KoanChatbot;
