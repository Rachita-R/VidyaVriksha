
import React from 'react';
import { Heart, Globe, Users } from 'lucide-react';

interface FooterProps {
  currentLanguage: string;
}

const Footer = ({ currentLanguage }: FooterProps) => {
  const translations = {
    'English': {
      tagline: 'Where knowledge breathes and dreams take root',
      mission: 'Empowering marginalized communities through voice-first, culturally-inclusive education',
      quickLinks: 'Quick Links',
      about: 'About',
      features: 'Features',
      community: 'Community',
      support: 'Support',
      impact: 'Our Impact',
      languages: 'Languages Supported',
      offlineCapable: 'Offline Learning',
      voiceFirst: 'Voice-First Design',
      culturallyRelevant: 'Culturally Relevant',
      connect: 'Connect With Us',
      builtWith: 'Built with',
      forCommunities: 'for communities everywhere',
      copyright: '© 2024 VidyaVriksha. Empowering education for all.'
    },
    'हिंदी': {
      tagline: 'जहाँ ज्ञान सांस लेता है और सपने जड़ें जमाते हैं',
      mission: 'आवाज़-पहले, सांस्कृतिक रूप से समावेशी शिक्षा के माध्यम से हाशिए पर रहने वाले समुदायों को सशक्त बनाना',
      quickLinks: 'त्वरित लिंक',
      about: 'के बारे में',
      features: 'विशेषताएं',
      community: 'समुदाय',
      support: 'सहायता',
      impact: 'हमारा प्रभाव',
      languages: 'समर्थित भाषाएं',
      offlineCapable: 'ऑफ़लाइन शिक्षा',
      voiceFirst: 'आवाज़-पहले डिज़ाइन',
      culturallyRelevant: 'सांस्कृतिक रूप से प्रासंगिक',
      connect: 'हमसे जुड़ें',
      builtWith: 'के साथ बनाया गया',
      forCommunities: 'हर जगह के समुदायों के लिए',
      copyright: '© 2024 VidyaVriksha. सभी के लिए शिक्षा को सशक्त बनाना।'
    },
    'বাংলা': {
      tagline: 'যেখানে জ্ঞান শ্বাস নেয় এবং স্বপ্ন শিকড় গাড়ে',
      mission: 'ভয়েস-প্রথম, সাংস্কৃতিকভাবে অন্তর্ভুক্তিমূলক শিক্ষার মাধ্যমে প্রান্তিক সম্প্রদায়গুলিকে ক্ষমতায়ন',
      quickLinks: 'দ্রুত লিঙ্ক',
      about: 'সম্পর্কে',
      features: 'বৈশিষ্ট্য',
      community: 'সম্প্রদায়',
      support: 'সহায়তা',
      impact: 'আমাদের প্রভাব',
      languages: 'সমর্থিত ভাষা',
      offlineCapable: 'অফলাইন শিক্ষা',
      voiceFirst: 'ভয়েস-প্রথম ডিজাইন',
      culturallyRelevant: 'সাংস্কৃতিকভাবে প্রাসঙ্গিক',
      connect: 'আমাদের সাথে যোগাযোগ করুন',
      builtWith: 'দিয়ে তৈরি',
      forCommunities: 'সর্বত্র সম্প্রদায়ের জন্য',
      copyright: '© 2024 VidyaVriksha. সবার জন্য শিক্ষার ক্ষমতায়ন।'
    }
  };

  const getCurrentTranslation = () => {
    return translations[currentLanguage as keyof typeof translations] || translations['English'];
  };

  const t = getCurrentTranslation();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg font-playfair">V</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-playfair">VidyaVriksha</h3>
                <p className="text-sm text-gray-400 font-inter">विद्या वृक्ष</p>
              </div>
            </div>
            <p className="text-blue-300 text-lg mb-3 font-inter italic">
              {t.tagline}
            </p>
            <p className="text-gray-300 leading-relaxed font-inter">
              {t.mission}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-playfair">{t.quickLinks}</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors font-inter">{t.about}</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors font-inter">{t.features}</a></li>
              <li><a href="#community" className="text-gray-300 hover:text-blue-400 transition-colors font-inter">{t.community}</a></li>
              <li><a href="#support" className="text-gray-300 hover:text-blue-400 transition-colors font-inter">{t.support}</a></li>
            </ul>
          </div>

          {/* Impact Metrics */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-playfair">{t.impact}</h4>
            <ul className="space-y-2">
              <li className="text-gray-300 font-inter">
                <span className="text-blue-400 font-semibold">15+</span> {t.languages}
              </li>
              <li className="text-gray-300 font-inter">
                <span className="text-green-400 font-semibold">100%</span> {t.offlineCapable}
              </li>
              <li className="text-gray-300 font-inter">
                <span className="text-purple-400 font-semibold">✓</span> {t.voiceFirst}
              </li>
              <li className="text-gray-300 font-inter">
                <span className="text-yellow-400 font-semibold">✓</span> {t.culturallyRelevant}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-gray-400 font-inter">{t.builtWith}</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span className="text-gray-400 font-inter">{t.forCommunities}</span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400 text-sm font-inter">{currentLanguage}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-green-400" />
                <span className="text-gray-400 text-sm font-inter">{t.connect}</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-500 text-sm font-inter">{t.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
