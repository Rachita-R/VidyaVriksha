
import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Volume2, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSelector from './LanguageSelector';
import VoiceIndicator from './VoiceIndicator';

interface HeaderProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

const Header = ({ currentLanguage, onLanguageChange }: HeaderProps) => {
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);

  const languages = [
    { name: 'English', code: 'en-US', flag: '🇺🇸' },
    { name: 'हिंदी', code: 'hi-IN', flag: '🇮🇳' },
    { name: 'বাংলা', code: 'bn-IN', flag: '🇧🇩' },
    { name: 'తెలుగు', code: 'te-IN', flag: '🇮🇳' },
    { name: 'मराठी', code: 'mr-IN', flag: '🇮🇳' },
    { name: 'தமிழ்', code: 'ta-IN', flag: '🇮🇳' },
    { name: 'ગુજરાતી', code: 'gu-IN', flag: '🇮🇳' },
    { name: 'ಕನ್ನಡ', code: 'kn-IN', flag: '🇮🇳' },
    { name: 'ଓଡିଆ', code: 'or-IN', flag: '🇮🇳' },
    { name: 'മലയാളം', code: 'ml-IN', flag: '🇮🇳' },
    { name: 'ਪੰਜਾਬੀ', code: 'pa-IN', flag: '🇮🇳' },
    { name: 'অসমীয়া', code: 'as-IN', flag: '🇮🇳' }
  ];

  // Content translations
  const translations = {
    'English': {
      features: 'Features',
      community: 'Community',
      about: 'About',
      voiceOn: 'Voice On',
      voiceOff: 'Voice Off',
      voiceActivated: 'Voice navigation activated. Say help for available commands.',
      voiceDeactivated: 'Voice navigation deactivated',
      menuOpened: 'Menu opened',
      navigatingToFeatures: 'Navigating to features',
      navigatingToCommunity: 'Navigating to community',
      helpMessage: 'Available commands: say menu, features, community, or start learning',
      languageChanged: 'Language changed to',
      voiceActiveMessage: 'Voice navigation active. Say "Help" for commands or "Menu" for navigation.'
    },
    'हिंदी': {
      features: 'विशेषताएं',
      community: 'समुदाय',
      about: 'हमारे बारे में',
      voiceOn: 'आवाज़ चालू',
      voiceOff: 'आवाज़ बंद',
      voiceActivated: 'आवाज़ नेविगेशन सक्रिय। उपलब्ध कमांड के लिए सहायता कहें।',
      voiceDeactivated: 'आवाज़ नेविगेशन निष्क्रिय',
      menuOpened: 'मेनू खोला गया',
      navigatingToFeatures: 'विशेषताओं पर जा रहे हैं',
      navigatingToCommunity: 'समुदाय पर जा रहे हैं',
      helpMessage: 'उपलब्ध कमांड: मेनू, विशेषताएं, समुदाय, या सीखना शुरू करें कहें',
      languageChanged: 'भाषा बदली गई',
      voiceActiveMessage: 'आवाज़ नेविगेशन सक्रिय। कमांड के लिए "सहायता" या नेविगेशन के लिए "मेनू" कहें।'
    },
    'বাংলা': {
      features: 'বৈশিষ্ট্য',
      community: 'সম্প্রদায়',
      about: 'আমাদের সম্পর্কে',
      voiceOn: 'ভয়েস চালু',
      voiceOff: 'ভয়েস বন্ধ',
      voiceActivated: 'ভয়েস নেভিগেশন সক্রিয়। উপলব্ধ কমান্ডের জন্য সাহায্য বলুন।',
      voiceDeactivated: 'ভয়েস নেভিগেশন নিষ্ক্রিয়',
      menuOpened: 'মেনু খোলা হয়েছে',
      navigatingToFeatures: 'বৈশিষ্ট্যে যাচ্ছি',
      navigatingToCommunity: 'সম্প্রদায়ে যাচ্ছি',
      helpMessage: 'উপলব্ধ কমান্ড: মেনু, বৈশিষ্ট্য, সম্প্রদায়, বা শেখা শুরু বলুন',
      languageChanged: 'ভাষা পরিবর্তন করা হয়েছে',
      voiceActiveMessage: 'ভয়েস নেভিগেশন সক্রিয়। কমান্ডের জন্য "সাহায্য" বা নেভিগেশনের জন্য "মেনু" বলুন।'
    }
  };

  const getCurrentTranslation = () => {
    return translations[currentLanguage as keyof typeof translations] || translations['English'];
  };

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = true;
      
      const currentLang = languages.find(lang => lang.name === currentLanguage);
      recognitionInstance.lang = currentLang?.code || 'en-US';

      recognitionInstance.onstart = () => {
        setIsListening(true);
      };

      recognitionInstance.onend = () => {
        setIsListening(false);
      };

      recognitionInstance.onresult = (event) => {
        const transcript = event.results[event.results.length - 1][0].transcript;
        console.log('Voice command:', transcript);
        handleVoiceCommand(transcript.toLowerCase());
      };

      setRecognition(recognitionInstance);
    }
  }, [currentLanguage]);

  const handleVoiceCommand = (command: string) => {
    const t = getCurrentTranslation();
    if (command.includes('menu') || command.includes('navigation')) {
      setIsMobileMenuOpen(true);
      speak(t.menuOpened);
    } else if (command.includes('features')) {
      document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
      speak(t.navigatingToFeatures);
    } else if (command.includes('community')) {
      document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' });
      speak(t.navigatingToCommunity);
    } else if (command.includes('help')) {
      speak(t.helpMessage);
    }
  };

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      const currentLang = languages.find(lang => lang.name === currentLanguage);
      utterance.lang = currentLang?.code || 'en-US';
      speechSynthesis.speak(utterance);
    }
  };

  const toggleVoice = () => {
    const t = getCurrentTranslation();
    if (!recognition) {
      alert('Speech recognition not supported in this browser');
      return;
    }

    if (isVoiceActive) {
      recognition.stop();
      setIsVoiceActive(false);
      speak(t.voiceDeactivated);
    } else {
      recognition.start();
      setIsVoiceActive(true);
      speak(t.voiceActivated);
    }
  };

  const changeLanguage = (langName: string) => {
    onLanguageChange(langName);
    const selectedLang = languages.find(lang => lang.name === langName);
    if (recognition && selectedLang) {
      recognition.lang = selectedLang.code;
    }
    const t = translations[langName as keyof typeof translations] || translations['English'];
    speak(`${t.languageChanged} ${langName}`);
  };

  const t = getCurrentTranslation();

  return (
    <>
      <header className="bg-white shadow-lg border-b-4 border-blue-400 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg font-playfair">V</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 font-playfair">VidyaVriksha</h1>
                <p className="text-xs text-gray-500 hidden sm:block font-inter">विद्या वृक्ष</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium transition-colors font-inter">
                {t.features}
              </a>
              <a href="#community" className="text-gray-700 hover:text-blue-600 font-medium transition-colors font-inter">
                {t.community}
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors font-inter">
                {t.about}
              </a>
            </nav>

            {/* Voice & Language Controls */}
            <div className="flex items-center space-x-3">
              <LanguageSelector 
                currentLanguage={currentLanguage}
                onLanguageChange={changeLanguage}
                languages={languages}
              />

              {/* Voice Toggle */}
              <Button
                onClick={toggleVoice}
                variant={isVoiceActive ? "default" : "outline"}
                size="sm"
                className={`flex items-center space-x-1 font-inter ${
                  isVoiceActive 
                    ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                    : 'hover:bg-blue-50'
                }`}
              >
                {isListening ? (
                  <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse" />
                ) : isVoiceActive ? (
                  <Mic className="w-4 h-4" />
                ) : (
                  <MicOff className="w-4 h-4" />
                )}
                <Volume2 className="w-4 h-4" />
                <span className="hidden sm:block">
                  {isVoiceActive ? t.voiceOn : t.voiceOff}
                </span>
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="outline"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-3">
                <a 
                  href="#features" 
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors font-inter"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t.features}
                </a>
                <a 
                  href="#community" 
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors font-inter"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t.community}
                </a>
                <a 
                  href="#about" 
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors font-inter"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t.about}
                </a>
              </nav>
            </div>
          )}

          {/* Voice Status Indicator */}
          {isVoiceActive && (
            <div className="bg-blue-100 border-l-4 border-blue-500 p-3 mb-0">
              <div className="flex items-center">
                <div className="flex">
                  <Mic className="w-5 h-5 text-blue-500 mr-2" />
                </div>
                <div>
                  <p className="text-sm text-blue-700 font-inter">
                    {t.voiceActiveMessage.replace('{language}', currentLanguage)}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <VoiceIndicator 
        isVoiceActive={isVoiceActive}
        isListening={isListening}
        currentLanguage={currentLanguage}
      />
    </>
  );
};

export default Header;
