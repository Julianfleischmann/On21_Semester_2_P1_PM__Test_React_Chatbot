// Config starter code
import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./components/BotAvatar";

const config = {
  initialMessages: [createChatBotMessage(`Hello world`)],
  botName: "crazy bot",
  customComponents: {
      botAvatar: (props) => <BotAvatar {...props} />
  },
  customStyles: {
    // Overrides the chatbot message styles
    botMessageBox: {
      backgroundColor: "purple",
    },
    // Overrides the chat button styles
    chatButton: {
      backgroundColor: "purple",
    },
  }
}

export default config