
import React from 'react';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Language {
  name: string;
  code: string;
  flag: string;
}

interface LanguageSelectorProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
  languages: Language[];
}

const LanguageSelector = ({ currentLanguage, onLanguageChange, languages }: LanguageSelectorProps) => {
  const currentLang = languages.find(lang => lang.name === currentLanguage);
  
  return (
    <div className="relative group">
      <Button variant="outline" size="sm" className="flex items-center space-x-2 font-inter">
        <Globe className="w-4 h-4" />
        <span className="text-sm">{currentLang?.flag}</span>
        <span className="hidden sm:block text-sm">{currentLanguage}</span>
      </Button>
      <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 max-h-80 overflow-y-auto">
        {languages.map((lang) => (
          <button
            key={lang.name}
            onClick={() => onLanguageChange(lang.name)}
            className={`block w-full text-left px-4 py-3 hover:bg-blue-50 first:rounded-t-lg last:rounded-b-lg transition-colors flex items-center space-x-3 font-inter ${
              currentLanguage === lang.name ? 'bg-blue-100 text-blue-700' : 'text-gray-700'
            }`}
          >
            <span className="text-lg">{lang.flag}</span>
            <span className="font-medium">{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
