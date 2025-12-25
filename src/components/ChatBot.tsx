import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const ChatBot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const sendMessage = async () => {
        if (!inputValue.trim() || isLoading) return;

        const userMessage: Message = { role: 'user', content: inputValue.trim() };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInputValue('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ messages: newMessages }),
            });

            if (!response.ok) {
                throw new Error('Erreur de communication');
            }

            const data = await response.json();
            const assistantMessage: Message = {
                role: 'assistant',
                content: data.message
            };
            setMessages([...newMessages, assistantMessage]);
        } catch (error) {
            console.error('Chat error:', error);
            const errorMessage: Message = {
                role: 'assistant',
                content: 'Désolé, une erreur est survenue. Veuillez réessayer ou nous contacter directement.'
            };
            setMessages([...newMessages, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <>
            {/* Floating Chat Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 ${isOpen
                        ? 'bg-gotam-charcoal text-gotam-cream rotate-90'
                        : 'bg-gradient-to-br from-gotam-gold to-gotam-gold-dark text-gotam-black'
                    }`}
                aria-label={isOpen ? 'Fermer le chat' : 'Ouvrir le chat'}
            >
                {isOpen ? (
                    <X size={28} className="transition-transform duration-300" />
                ) : (
                    <MessageCircle size={28} className="transition-transform duration-300" />
                )}
            </button>

            {/* Chat Interface */}
            <div
                className={`fixed bottom-24 right-6 z-40 w-[380px] max-w-[calc(100vw-3rem)] bg-gotam-charcoal rounded-2xl shadow-2xl border border-gotam-gold/20 overflow-hidden transition-all duration-500 transform ${isOpen
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
                    }`}
            >
                {/* Header */}
                <div className="bg-gradient-to-r from-gotam-gold to-gotam-gold-dark px-5 py-4">
                    <h3 className="font-display text-xl font-semibold text-gotam-black">
                        Assistant Gotam Events
                    </h3>
                    <p className="text-gotam-black/70 text-sm mt-0.5">
                        Comment puis-je vous aider ?
                    </p>
                </div>

                {/* Messages Container */}
                <div className="h-[350px] overflow-y-auto p-4 space-y-4 bg-gotam-black/50">
                    {messages.length === 0 && (
                        <div className="text-center text-gotam-cream/50 py-8">
                            <MessageCircle size={40} className="mx-auto mb-3 text-gotam-gold/30" />
                            <p className="text-sm">
                                Bienvenue ! Posez-nous vos questions sur nos services de location de véhicules de luxe.
                            </p>
                        </div>
                    )}

                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-[85%] rounded-2xl px-4 py-3 ${message.role === 'user'
                                        ? 'bg-gotam-gold text-gotam-black rounded-br-md'
                                        : 'bg-gotam-charcoal border border-gotam-cream/10 text-gotam-cream rounded-bl-md'
                                    }`}
                            >
                                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                                    {message.content}
                                </p>
                            </div>
                        </div>
                    ))}

                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-gotam-charcoal border border-gotam-cream/10 rounded-2xl rounded-bl-md px-4 py-3">
                                <div className="flex items-center space-x-2 text-gotam-gold">
                                    <Loader2 size={18} className="animate-spin" />
                                    <span className="text-sm text-gotam-cream/70">En train d'écrire...</span>
                                </div>
                            </div>
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-gotam-cream/10 bg-gotam-charcoal">
                    <div className="flex items-center space-x-3">
                        <input
                            ref={inputRef}
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Écrivez votre message..."
                            disabled={isLoading}
                            className="flex-1 bg-gotam-black/50 border border-gotam-cream/10 rounded-xl px-4 py-3 text-gotam-cream placeholder-gotam-cream/40 focus:outline-none focus:border-gotam-gold/50 transition-colors text-sm disabled:opacity-50"
                        />
                        <button
                            onClick={sendMessage}
                            disabled={!inputValue.trim() || isLoading}
                            className="w-12 h-12 rounded-xl bg-gotam-gold text-gotam-black flex items-center justify-center transition-all duration-300 hover:bg-gotam-gold-light disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
                            aria-label="Envoyer"
                        >
                            <Send size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Backdrop for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/30 z-30 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default ChatBot;
