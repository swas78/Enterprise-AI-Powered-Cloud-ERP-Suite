import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'bot', text: 'Hello! I am Amdox AI. How can I help you with the portal today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputValue
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Mock an AI response
    setTimeout(() => {
      setIsTyping(false);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: generateBotResponse(userMessage.text)
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000 + Math.random() * 1000); // 1-2 seconds delay
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const generateBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
      return 'Hello there! Need help navigating the ERP?';
    } else if (lowerInput.includes('purchase order') || lowerInput.includes('po')) {
      return 'You can create a new Purchase Order in the Supply Chain > Purchase Orders section. Click the "+" button there!';
    } else if (lowerInput.includes('vendor')) {
      return 'Vendor management is located in Supply Chain > Vendor Portal. You can register new vendors there.';
    } else if (lowerInput.includes('inventory') || lowerInput.includes('receive')) {
      return 'To receive goods, go to Supply Chain > Inventory Dashboard and click the "Receive Goods" button.';
    } else if (lowerInput.includes('export')) {
      return 'You can export tables to CSV by clicking the "Export" button located near the top right of most data tables.';
    } else {
      return 'I can help you find your way around the Amdox Enterprise Portal. Try asking me where to find Purchase Orders, Vendors, or Inventory!';
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 z-[100]"
          aria-label="Open Chatbot"
        >
          <span className="material-symbols-outlined text-[28px]">smart_toy</span>
          {/* Notification dot */}
          <span className="absolute top-0 right-0 w-3 h-3 bg-error rounded-full border-2 border-background animate-pulse"></span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 h-[500px] max-h-[80vh] bg-surface rounded-2xl shadow-2xl border border-outline-variant flex flex-col overflow-hidden z-[100] animate-in slide-in-from-bottom-10 fade-in duration-200">
          {/* Header */}
          <div className="bg-primary text-white p-4 flex justify-between items-center shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">smart_toy</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-md">Amdox AI Assistant</h3>
                <p className="text-xs text-primary-container opacity-90">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 custom-scrollbar bg-surface-container-lowest">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.sender === 'user'
                      ? 'bg-primary text-white rounded-br-none'
                      : 'bg-surface-container border border-outline-variant text-on-surface rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-surface-container border border-outline-variant text-on-surface p-3 rounded-2xl rounded-bl-none flex items-center gap-1">
                  <span className="w-2 h-2 bg-secondary rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-secondary rounded-full animate-bounce delay-100"></span>
                  <span className="w-2 h-2 bg-secondary rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-outline-variant bg-surface flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
              className="flex-1 h-10 bg-surface-container-low border border-outline-variant rounded-full px-4 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            />
            <button
              onClick={handleSend}
              disabled={!inputValue.trim()}
              className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center disabled:opacity-50 hover:bg-primary-fixed-dim transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
