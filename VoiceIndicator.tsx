
import React from 'react';
import { Mic, MicOff, Volume2 } from 'lucide-react';

interface VoiceIndicatorProps {
  isVoiceActive: boolean;
  isListening: boolean;
  currentLanguage: string;
}

const VoiceIndicator = ({ isVoiceActive, isListening, currentLanguage }: VoiceIndicatorProps) => {
  if (!isVoiceActive) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-blue-500 text-white rounded-full p-4 shadow-lg flex items-center space-x-2">
        {isListening ? (
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            <Mic className="w-5 h-5" />
          </div>
        ) : (
          <Volume2 className="w-5 h-5" />
        )}
        <span className="text-sm font-medium">{currentLanguage}</span>
      </div>
    </div>
  );
};

export default VoiceIndicator;
