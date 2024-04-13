// app/components/ChatPopup.js
'use client'

import { useState } from 'react'

export default function ChatPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [userInput, setUserInput] = useState('')
  const [messages, setMessages] = useState([])

  const apiKey = ''

  const openForm = () => {
    setIsOpen(true)
  }

  const closeForm = () => {
    setIsOpen(false)
  }

  const sendMessage = async () => {
    if (userInput.trim() === '') return;
  
    // Display user message in the chatbox
    setMessages((prevMessages) => [...prevMessages, { sender: 'user', text: userInput }]);
  
    // Clear the input field
    setUserInput('');
  
    // Send user message to OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant.',
          },
          {
            role: 'user',
            content: userInput,
          },
        ],
      }),
    });
  
    const data = await response.json();
    const botResponse = data.choices[0].message.content.trim();
  
    // Display bot response in the chatbox
    setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: botResponse }]);
  };
  return (
    <>
      <button
        className="  right-4 bg-green-500 text-white px-4 py-2 rounded absolute z-10 "
        onClick={openForm}
      >
        Chat
      </button>

      {isOpen && (
        <div className=" right-4  mt-96 w-80 bg-white border border-gray-300 rounded shadow-lg absolute z-10">
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Chat with AI</h2>
            <div className="h-64 overflow-y-auto mb-4">
              {messages.map((message, index) => (
                <div key={index} className="mb-2">
                  <strong>{message.sender}:</strong> {message.text}
                </div>
              ))}
            </div>
            <input
              type="text"
              className="w-full px-2 py-1 border border-gray-300 rounded mb-2"
              placeholder="Type your message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <div className="flex justify-between">
              <button
                className="bg-blue-500 text-white px-4 py-1 rounded"
                onClick={sendMessage}
              >
                Send
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-4 py-1 rounded"
                onClick={closeForm}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}