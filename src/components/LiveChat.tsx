"use client";
import { MessageCircle, X, Send, Paperclip, Smile, Phone, Video } from "lucide-react";
import { useState } from "react";

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'agent',
      text: "Hi there! 👋 I'm your AI support assistant. How can I help you today?",
      time: '2:30 PM'
    }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'user',
        text: message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setMessage('');
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          sender: 'agent',
          text: "Thanks for reaching out! Let me help you with that. I'm analyzing your request and will provide a detailed response shortly.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  return (
    <>
      {/* Chat Widget Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
          <div className="relative">
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <MessageCircle className="w-6 h-6" />
            )}
          </div>
          
          {/* Notification Badge */}
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
            1
          </div>
          
          {/* Pulse Animation */}
          <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-20"></div>
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-40 flex flex-col overflow-hidden animate-fade-in-up">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h3 className="font-semibold">AI Support Assistant</h3>
                  <div className="flex items-center gap-2 text-sm opacity-90">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Online • Typically replies instantly</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors">
                  <Phone className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors">
                  <Video className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                  msg.sender === 'user' 
                    ? 'bg-blue-500 text-white rounded-tr-sm' 
                    : 'bg-white text-gray-800 rounded-tl-sm shadow-sm border border-gray-100'
                }`}>
                  <p className="text-sm">{msg.text}</p>
                  <p className={`text-xs mt-1 ${
                    msg.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            <div className="flex justify-start">
              <div className="bg-white px-4 py-2 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-2 bg-white border-t border-gray-100">
            <div className="flex gap-2 flex-wrap">
              <button className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition-colors">
                Order Status
              </button>
              <button className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition-colors">
                Return Policy
              </button>
              <button className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition-colors">
                Shipping Info
              </button>
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2">
              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                <Paperclip className="w-5 h-5" />
              </button>
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="w-full px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                  <Smile className="w-5 h-5" />
                </button>
              </div>
              <button 
                onClick={handleSendMessage}
                className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors disabled:opacity-50"
                disabled={!message.trim()}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Powered by AI • We typically reply in a few seconds
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChat; 