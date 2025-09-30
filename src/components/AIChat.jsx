import React, { useState, useRef, useEffect } from 'react';
import { FiSend, FiMessageSquare, FiX, FiLoader } from 'react-icons/fi';

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! I'm your AI assistant. How can I help you today?",
      sender: "ai",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simulate AI response
  const getAIResponse = (userMessage) => {
    // This is a simple simulation - in a real app, you would connect to an AI API
    const responses = [
      "I understand your question about \"" + userMessage + "\". SassFlow is designed to help businesses streamline their operations with our comprehensive SaaS platform.",
      "That's a great question! Our platform offers features like workflow automation, team collaboration tools, and advanced analytics to boost your productivity.",
      "Thanks for your inquiry. SassFlow integrates with popular tools like Slack, Salesforce, and Google Workspace to enhance your existing workflows.",
      "I'd be happy to help with that. Our pricing plans start at $29/month for the Starter plan, which includes workflow automation for up to 5 users.",
      "Our platform is trusted by over 500 companies worldwide. We offer enterprise-grade security with GDPR compliance and SOC 2 certification.",
      "For a demo of our platform, you can schedule a personalized walkthrough with our product specialists. Would you like me to help you set that up?",
      "Our customer success team is available 24/7 to assist you. Response times are typically under 2 hours for all plans."
    ];
    
    // Return a random response for simulation
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        text: getAIResponse(inputValue),
        sender: "ai",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000 + Math.random() * 2000);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-indigo-600 text-white shadow-lg flex items-center justify-center z-50 hover:bg-indigo-700 transition-colors duration-300"
      >
        {isOpen ? <FiX className="text-xl" /> : <FiMessageSquare className="text-xl" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 w-80 h-96 bg-white rounded-2xl shadow-xl z-50 flex flex-col border border-gray-200">
          {/* Chat Header */}
          <div className="bg-indigo-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
              <h3 className="font-bold">AI Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <FiX className="text-white" />
            </button>
          </div>
          
          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-2xl ${message.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-white border border-gray-200'}`}
                >
                  <p>{message.text}</p>
                  <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-indigo-200' : 'text-gray-500'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="bg-white border border-gray-200 p-3 rounded-2xl">
                  <div className="flex items-center">
                    <FiLoader className="animate-spin mr-2" />
                    <span>Thinking...</span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Chat Input */}
          <form onSubmit={handleSend} className="p-4 border-t border-gray-200 flex">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              disabled={isLoading || inputValue.trim() === ''}
              className={`bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition-colors ${isLoading || inputValue.trim() === '' ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <FiSend />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AIChat;