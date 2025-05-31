
import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, MicOff, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface VidyaChatProps {
  currentLanguage: string;
}

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'vidya';
  timestamp: Date;
}

const VidyaChat = ({ currentLanguage }: VidyaChatProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Translations for different languages
  const translations = {
    'English': {
      chatTitle: 'Chat with Vidya',
      placeholder: 'Ask me anything about learning...',
      greeting: 'Hello! I\'m Vidya, your learning companion. How can I help you today?',
      voicePrompt: 'I\'m listening... speak now',
      sendButton: 'Send'
    },
    'हिंदी': {
      chatTitle: 'विद्या से बात करें',
      placeholder: 'सीखने के बारे में कुछ भी पूछें...',
      greeting: 'नमस्ते! मैं विद्या हूं, आपकी सीखने की साथी। आज मैं आपकी कैसे मदद कर सकती हूं?',
      voicePrompt: 'मैं सुन रही हूं... अब बोलें',
      sendButton: 'भेजें'
    },
    'বাংলা': {
      chatTitle: 'বিদ্যার সাথে কথা বলুন',
      placeholder: 'শেখার বিষয়ে যেকোনো প্রশ্ন করুন...',
      greeting: 'হ্যালো! আমি বিদ্যা, আপনার শেখার সঙ্গী। আজ আমি কীভাবে আপনাকে সাহায্য করতে পারি?',
      voicePrompt: 'আমি শুনছি... এখন বলুন',
      sendButton: 'পাঠান'
    }
  };

  const getCurrentTranslation = () => {
    return translations[currentLanguage as keyof typeof translations] || translations['English'];
  };

  // Initialize with greeting message
  useEffect(() => {
    const t = getCurrentTranslation();
    if (messages.length === 0) {
      setMessages([{
        id: 1,
        text: t.greeting,
        sender: 'vidya',
        timestamp: new Date()
      }]);
    }
  }, [currentLanguage]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const generateVidyaResponse = (userMessage: string): string => {
    const t = getCurrentTranslation();
    const lowerMessage = userMessage.toLowerCase();
    
    // Language-specific responses
    if (currentLanguage === 'हिंदी') {
      if (lowerMessage.includes('पाठ') || lowerMessage.includes('सीख')) {
        return 'मैं आपको उपयुक्त पाठ सुझा सकती हूं। आप किस विषय में रुचि रखते हैं - साक्षरता, गणित, या डिजिटल कौशल?';
      } else if (lowerMessage.includes('मदद')) {
        return 'मैं यहां आपकी सहायता के लिए हूं! आप पाठ खोज सकते हैं, प्रगति देख सकते हैं, या अपने समुदाय से जुड़ सकते हैं।';
      }
      return 'यह एक दिलचस्प सवाल है! मैं आपकी सीखने की यात्रा में मदद करना चाहती हूं।';
    } else if (currentLanguage === 'বাংলা') {
      if (lowerMessage.includes('পাঠ') || lowerMessage.includes('শিখ')) {
        return 'আমি আপনাকে উপযুক্ত পাঠ সুপারিশ করতে পারি। আপনি কোন বিষয়ে আগ্রহী - সাক্ষরতা, গণিত, নাকি ডিজিটাল দক্ষতা?';
      } else if (lowerMessage.includes('সাহায্য')) {
        return 'আমি এখানে আপনাকে সাহায্য করার জন্য আছি! আপনি পাঠ খুঁজতে পারেন, অগ্রগতি দেখতে পারেন, বা আপনার সম্প্রদায়ের সাথে যুক্ত হতে পারেন।';
      }
      return 'এটি একটি আকর্ষণীয় প্রশ্ন! আমি আপনার শেখার যাত্রায় সাহায্য করতে চাই।';
    } else {
      // English responses
      if (lowerMessage.includes('lesson') || lowerMessage.includes('learn')) {
        return 'I can recommend lessons based on your interests! Are you looking to improve literacy, numeracy, digital skills, or explore other subjects?';
      } else if (lowerMessage.includes('help')) {
        return 'I\'m here to support your learning journey! You can ask about lessons, track your progress, connect with your community, or get help with any topic.';
      } else if (lowerMessage.includes('progress')) {
        return 'You can view your learning progress in the Progress tab. Keep up the great work on your educational journey!';
      } else if (lowerMessage.includes('community')) {
        return 'Our community features help you connect with fellow learners, join study groups, and find mentors. Check out the Community tab!';
      }
      return 'That\'s an interesting question! I\'m here to help guide your learning experience. What would you like to explore today?';
    }
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Simulate Vidya's response after a short delay
    setTimeout(() => {
      const vidyaResponse: Message = {
        id: messages.length + 2,
        text: generateVidyaResponse(inputText),
        sender: 'vidya',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, vidyaResponse]);
    }, 1000);
  };

  const handleVoiceInput = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      
      // Set language based on current selection
      const languageCodes = {
        'English': 'en-US',
        'हिंदी': 'hi-IN',
        'বাংলা': 'bn-IN'
      };
      
      recognition.lang = languageCodes[currentLanguage as keyof typeof languageCodes] || 'en-US';
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    }
  };

  const t = getCurrentTranslation();

  if (isMinimized) {
    return (
      <Button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-4 right-4 rounded-full w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 shadow-lg z-50"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </Button>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg border-0 bg-white/95 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold text-gray-900 flex items-center font-playfair">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mr-2">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            {t.chatTitle}
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMinimized(true)}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Messages Container */}
        <div className="h-64 overflow-y-auto space-y-3 p-2 bg-gray-50 rounded-lg">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-3 py-2 rounded-lg font-inter ${
                  message.sender === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-800 shadow-sm border'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="flex space-x-2">
          <Input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={isListening ? t.voicePrompt : t.placeholder}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className={`flex-1 font-inter ${isListening ? 'border-red-300 bg-red-50' : ''}`}
            disabled={isListening}
          />
          <Button
            onClick={handleVoiceInput}
            variant="outline"
            size="sm"
            className={`${isListening ? 'bg-red-100 border-red-300' : ''}`}
            disabled={isListening}
          >
            {isListening ? (
              <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse" />
            ) : (
              <Mic className="w-4 h-4" />
            )}
          </Button>
          <Button onClick={handleSendMessage} size="sm" disabled={!inputText.trim()}>
            <Send className="w-4 h-4" />
          </Button>
        </div>

        <p className="text-xs text-gray-500 text-center font-inter">
          {t.sendButton} a message or use voice input to chat with Vidya
        </p>
      </CardContent>
    </Card>
  );
};

export default VidyaChat;
