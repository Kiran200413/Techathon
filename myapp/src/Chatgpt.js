import { useState } from 'react'
import './App.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const API_KEY = "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";
const MAX_RETRIES = 3;
const INITIAL_DELAY = 1000; // in milliseconds

function Chatgpt() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm Edutech! platform Bot",
      sentTime: "just now",
      sender: "ChatGPT"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];
    
    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages, retries = 0) { 
    if (!chatMessages || chatMessages.length === 0) {
      setIsTyping(false);
      return;
    }

    let apiMessages = chatMessages.map((messageObject) => {
      let role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
      return { role: role, content: messageObject.message };
    });

    const systemMessage = {
      role: "system",
      content: "System message content goes here"
    };

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,
        ...apiMessages
      ]
    };

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + API_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(apiRequestBody)
      });

      if (!response.ok) {
        if (response.status === 429 && retries < MAX_RETRIES) {
          const delay = Math.pow(2, retries) * INITIAL_DELAY;
          console.log(`Rate limit exceeded. Retrying in ${delay} milliseconds.`);
          setTimeout(() => {
            processMessageToChatGPT(chatMessages, retries + 1);
          }, delay);
        } else {
          throw new Error("Failed to fetch data. Status: " + response.status);
        }
      } else {
        const data = await response.json();
        if (data.choices && data.choices.length > 0 && data.choices[0].message && data.choices[0].message.content) {
          setMessages([...chatMessages, {
            message: data.choices[0].message.content,
            sender: "ChatGPT"
          }]);
        }
      }
    } catch (error) {
      console.error("Error processing message:", error);
    }

    setIsTyping(false);
  }

  return (
    <div className="App">
      <div style={{ position:"relative", height: "100%", width: "100%"  }}>
        <MainContainer>
          <ChatContainer>       
            <MessageList 
              scrollBehavior="smooth" 
              typingIndicator={isTyping ? <TypingIndicator content="EDutech Bot is typing" /> : null}
            >
              {messages.map((message, i) => {
                return <Message key={i} model={message} />
              })}
            </MessageList>
            <MessageInput placeholder="Type your Query Here" onSend={handleSend} />        
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  )
}

export default Chatgpt;