import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

const mockMessages = [
  { id: 1, sender: 'bot', text: "Hi 👋 I'm InovX AI. How can I help you today?" },
  { id: 2, sender: 'user', text: "I need AI automation" },
  { id: 3, sender: 'bot', text: "Great! We can help you automate workflows and improve efficiency." },
];

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  // Load mock messages with a slight delay for realism when opening
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const loadMessages = async () => {
        for (let i = 0; i < mockMessages.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 600));
          setMessages((prev) => [...prev, mockMessages[i]]);
        }
      };
      loadMessages();
    }
  }, [isOpen]);

  // Scroll to bottom when messages update
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const newUserMsg = { id: Date.now(), sender: 'user', text: inputValue };
    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue('');

    // Mock bot reply
    setTimeout(() => {
      const botReply = {
        id: Date.now() + 1,
        sender: 'bot',
        text: "Thanks for sharing! Our team will get back to you with a tailored AI solution soon.",
      };
      setMessages((prev) => [...prev, botReply]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="mb-4 w-80 sm:w-[340px] h-[440px] bg-white/[0.05] backdrop-blur-2xl border border-white/15 rounded-2xl flex flex-col overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-white/[0.05] backdrop-blur-xl">
              <div className="flex items-center gap-3">
                {/* Small Header Robot Icon */}
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <div className="w-4 h-2.5 bg-black rounded-full flex items-center justify-center gap-[2px]">
                    <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
                    <div className="w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '200ms' }} />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-semibold text-sm">InovX AI</span>
                  <span className="text-white/50 text-[10px] flex items-center gap-1 uppercase tracking-wider">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Online
                  </span>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="text-white/50 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-4 scrollbar-hide">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${
                    msg.sender === 'user'
                      ? 'bg-white/90 text-black font-medium self-end rounded-br-sm shadow-lg shadow-white/10 backdrop-blur-sm'
                      : 'bg-white/[0.08] text-white/90 self-start rounded-bl-sm border border-white/10 backdrop-blur-sm'
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/10 bg-white/[0.05] backdrop-blur-xl">
              <form
                onSubmit={handleSend}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-white/[0.03] border border-white/10 rounded-full px-4 py-2.5 text-white text-sm focus:outline-none focus:border-white/50 focus:bg-white/[0.05] focus:shadow-[0_0_15px_rgba(255,255,255,0.1)] placeholder:text-white/30 transition-all duration-300"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-black disabled:opacity-50 disabled:bg-white/10 disabled:text-white/30 transition-colors duration-300 shadow-lg shadow-white/20 disabled:shadow-none"
                  aria-label="Send message"
                >
                  <Send size={16} className={inputValue.trim() ? "ml-0.5" : ""} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-16 h-16 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] transition-colors hover:bg-white/20"
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <X size={28} />
        ) : (
          /* Custom Robot Face */
          <div className="w-8 h-5 bg-black rounded-full flex items-center justify-center gap-1 shadow-inner">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-[0_0_8px_white]" />
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-[0_0_8px_white]" style={{ animationDelay: '300ms' }} />
          </div>
        )}
      </motion.button>
    </div>
  );
};
