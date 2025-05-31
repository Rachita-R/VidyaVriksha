
import React, { useState, useEffect } from 'react';
import { Play, Users, Globe, Heart, Volume2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

interface HeroProps {
  currentLanguage: string;
}

const Hero = ({ currentLanguage }: HeroProps) => {
  const [currentStory, setCurrentStory] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

  const translations = {
    'English': {
      tagline: 'Where knowledge breathes and dreams take root',
      description: 'Bridging the digital divide with voice-first learning in 15+ languages. Empowering marginalized communities through culturally relevant education that works offline and celebrates local wisdom.',
      languages: 'Languages Supported',
      offline: 'Offline Capable',
      voiceFirst: 'Voice First Navigation',
      startLearning: 'Start Learning Journey',
      exploreCommunity: 'Explore Community',
      voiceNavigation: 'Voice Navigation',
      speakToLearn: 'Speak to learn',
      culturalStories: 'Cultural Stories',
      localWisdom: 'Local wisdom',
      communityBuilt: 'Community Built',
      togetherWeGrow: 'Together we grow',
      inspiringJourneys: 'Inspiring Journeys',
      listen: 'Listen',
      playing: 'Playing...',
      readyToTransform: 'Ready to Transform Your Learning Experience?',
      joinThousands: 'Join thousands of learners who are discovering the power of voice-first, culturally-rich education',
      beginJourney: 'Begin Your Journey Today'
    },
    'हिंदी': {
      tagline: 'जहाँ ज्ञान सांस लेता है और सपने जड़ें जमाते हैं',
      description: '15+ भाषाओं में आवाज़-पहले सीखने के साथ डिजिटल विभाजन को पाटना। सांस्कृतिक रूप से प्रासंगिक शिक्षा के माध्यम से हाशिए पर रहने वाले समुदायों को सशक्त बनाना जो ऑफ़लाइन काम करती है और स्थानीय ज्ञान का जश्न मनाती है।',
      languages: 'समर्थित भाषाएं',
      offline: 'ऑफ़लाइन सक्षम',
      voiceFirst: 'आवाज़ पहले नेविगेशन',
      startLearning: 'सीखने की यात्रा शुरू करें',
      exploreCommunity: 'समुदाय का अन्वेषण करें',
      voiceNavigation: 'आवाज़ नेविगेशन',
      speakToLearn: 'सीखने के लिए बोलें',
      culturalStories: 'सांस्कृतिक कहानियां',
      localWisdom: 'स्थानीय ज्ञान',
      communityBuilt: 'समुदाय निर्मित',
      togetherWeGrow: 'साथ में हम बढ़ते हैं',
      inspiringJourneys: 'प्रेरणादायक यात्राएं',
      listen: 'सुनें',
      playing: 'चल रहा है...',
      readyToTransform: 'अपने सीखने के अनुभव को बदलने के लिए तैयार हैं?',
      joinThousands: 'हजारों शिक्षार्थियों से जुड़ें जो आवाज़-पहले, सांस्कृतिक रूप से समृद्ध शिक्षा की शक्ति की खोज कर रहे हैं',
      beginJourney: 'आज ही अपनी यात्रा शुरू करें'
    },
    'বাংলা': {
      tagline: 'যেখানে জ্ঞান শ্বাস নেয় এবং স্বপ্ন শিকড় গাড়ে',
      description: '১৫+ ভাষায় ভয়েস-প্রথম শেখার মাধ্যমে ডিজিটাল বিভাজন দূর করা। সাংস্কৃতিকভাবে প্রাসঙ্গিক শিক্ষার মাধ্যমে প্রান্তিক সম্প্রদায়গুলিকে ক্ষমতায়ন যা অফলাইনে কাজ করে এবং স্থানীয় জ্ঞানকে উদযাপন করে।',
      languages: 'সমর্থিত ভাষা',
      offline: 'অফলাইন সক্ষম',
      voiceFirst: 'ভয়েস প্রথম নেভিগেশন',
      startLearning: 'শেখার যাত্রা শুরু করুন',
      exploreCommunity: 'সম্প্রদায় অন্বেষণ করুন',
      voiceNavigation: 'ভয়েস নেভিগেশন',
      speakToLearn: 'শিখতে বলুন',
      culturalStories: 'সাংস্কৃতিক গল্প',
      localWisdom: 'স্থানীয় জ্ঞান',
      communityBuilt: 'সম্প্রদায় নির্মিত',
      togetherWeGrow: 'একসাথে আমরা বড় হই',
      inspiringJourneys: 'অনুপ্রেরণামূলক যাত্রা',
      listen: 'শুনুন',
      playing: 'চলছে...',
      readyToTransform: 'আপনার শেখার অভিজ্ঞতা রূপান্তরিত করতে প্রস্তুত?',
      joinThousands: 'হাজার হাজার শিক্ষার্থীর সাথে যোগ দিন যারা ভয়েস-প্রথম, সাংস্কৃতিকভাবে সমৃদ্ধ শিক্ষার শক্তি আবিষ্কার করছেন',
      beginJourney: 'আজই আপনার যাত্রা শুরু করুন'
    }
  };

  const getCurrentTranslation = () => {
    return translations[currentLanguage as keyof typeof translations] || translations['English'];
  };

  const inspirationalStories = [
    {
      title: currentLanguage === 'हिंदी' ? "मीरा की यात्रा" : currentLanguage === 'বাংলা' ? "মীরার যাত্রা" : "Meera's Journey",
      subtitle: currentLanguage === 'हिंदी' ? "ग्रामीण महाराष्ट्र से" : currentLanguage === 'বাংলা' ? "গ্রামীণ মহারাষ্ট্র থেকে" : "From Rural Maharashtra",
      description: currentLanguage === 'हिंदी' ? "स्थानीय लोक कथाओं के माध्यम से पढ़ना सीखी और अब अपने गांव में साक्षरता सिखाती है" : currentLanguage === 'বাংলা' ? "স্থানীয় লোককাহিনীর মাধ্যমে পড়তে শিখেছেন এবং এখন তার গ্রামে সাক্ষরতা শেখান" : "Learned to read through local folk tales and now teaches literacy in her village",
      language: currentLanguage === 'हिंदी' ? "मराठी" : currentLanguage === 'বাংলা' ? "মারাঠি" : "Marathi",
      impact: currentLanguage === 'हिंदी' ? "दैनिक 20+ बच्चों को पढ़ाना" : currentLanguage === 'বাংলা' ? "প্রতিদিন 20+ শিশুকে শেখানো" : "Teaching 20+ children daily"
    },
    {
      title: currentLanguage === 'हिंदी' ? "रवि की सफलता" : currentLanguage === 'বাংলা' ? "রবির সাফল্য" : "Ravi's Success",
      subtitle: currentLanguage === 'हिंदी' ? "आदिवासी ओडिशा से" : currentLanguage === 'বাংলা' ? "আদিবাসী ওড়িশা থেকে" : "From Tribal Odisha",
      description: currentLanguage === 'हिंदी' ? "सामुदायिक कहानियों और सांस्कृतिक ज्ञान के माध्यम से गणित में निपुणता हासिल की" : currentLanguage === 'বাংলা' ? "কমিউনিটি গল্প এবং সাংস্কৃতিক জ্ঞানের মাধ্যমে গণিতে দক্ষতা অর্জন করেছেন" : "Mastered mathematics through community stories and cultural wisdom",
      language: currentLanguage === 'हिंदी' ? "ओड़िया" : currentLanguage === 'বাংলা' ? "ওড়িয়া" : "Odia", 
      impact: currentLanguage === 'हिंदी' ? "गांव का शिक्षण चक्र शुरू किया" : currentLanguage === 'বাংলা' ? "গ্রামের শেখার বৃত্ত শুরু করেছেন" : "Started village learning circle"
    },
    {
      title: currentLanguage === 'हिंदी' ? "प्रिया की प्रगति" : currentLanguage === 'বাংলা' ? "প্রিয়ার অগ্রগতি" : "Priya's Progress",
      subtitle: currentLanguage === 'हिंदी' ? "पश्चिम बंगाल से" : currentLanguage === 'বাংলা' ? "পশ্চিমবঙ্গ থেকে" : "From West Bengal",
      description: currentLanguage === 'हिंदी' ? "आवाज़-पहले सीखने और सांस्कৃतিक एकीकरण के माध्यम से डिजिटल साक्षरता प्राप्त की" : currentLanguage === 'বাংলা' ? "ভয়েস-প্রথম শেখা এবং সাংস্কৃতিক একীকরণের মাধ্যমে ডিজিটাল সাক্ষরতা অর্জন করেছেন" : "Gained digital literacy through voice-first learning and cultural integration",
      language: currentLanguage === 'हिंदी' ? "बंगाली" : currentLanguage === 'বাংলা' ? "বাংলা" : "Bengali",
      impact: currentLanguage === 'हिंदी' ? "परिवারों को सेवाओं तक पहुंचने में मदद" : currentLanguage === 'বাংলা' ? "পরিবারগুলিকে সেবা অ্যাক্সেস করতে সাহায্য করছেন" : "Helping families access services"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % inspirationalStories.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentLanguage]);

  const playStory = () => {
    setIsPlaying(!isPlaying);
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(inspirationalStories[currentStory].description);
      utterance.lang = currentLanguage === 'हिंदी' ? 'hi-IN' : currentLanguage === 'বাংলা' ? 'bn-IN' : 'en-US';
      speechSynthesis.speak(utterance);
    }
    console.log(`Playing story: ${inspirationalStories[currentStory].title}`);
  };

  const handleStartLearning = () => {
    navigate('/learning');
  };

  const t = getCurrentTranslation();

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-20 pb-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-blue-300 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-indigo-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-purple-300 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-playfair">
                VidyaVriksha
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 block text-2xl sm:text-3xl lg:text-4xl mt-2 font-inter font-light">
                  {t.tagline}
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed font-inter">
                {t.description}
              </p>
            </div>

            {/* Enhanced Key Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-md">
                <div className="text-3xl font-bold text-blue-600 font-playfair">15+</div>
                <div className="text-sm text-gray-600 font-inter">{t.languages}</div>
              </div>
              <div className="text-center bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-md">
                <div className="text-3xl font-bold text-indigo-600 font-playfair">100%</div>
                <div className="text-sm text-gray-600 font-inter">{t.offline}</div>
              </div>
              <div className="text-center bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-md">
                <div className="text-3xl font-bold text-purple-600 font-playfair">{currentLanguage === 'हिंदी' ? 'आवाज़' : currentLanguage === 'বাংলা' ? 'ভয়েস' : 'Voice'}</div>
                <div className="text-sm text-gray-600 font-inter">{t.voiceFirst}</div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleStartLearning}
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-inter"
              >
                <Play className="w-5 h-5 mr-2" />
                {t.startLearning}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-blue-300 text-blue-700 hover:bg-blue-50 font-semibold px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-inter"
                onClick={() => document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Users className="w-5 h-5 mr-2" />
                {t.exploreCommunity}
              </Button>
            </div>

            {/* Enhanced Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-3 shadow-md hover:shadow-lg transition-shadow">
                <Volume2 className="w-5 h-5 text-blue-500" />
                <div>
                  <div className="text-sm font-medium text-gray-700 font-inter">{t.voiceNavigation}</div>
                  <div className="text-xs text-gray-500 font-inter">{t.speakToLearn}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-3 shadow-md hover:shadow-lg transition-shadow">
                <Globe className="w-5 h-5 text-indigo-500" />
                <div>
                  <div className="text-sm font-medium text-gray-700 font-inter">{t.culturalStories}</div>
                  <div className="text-xs text-gray-500 font-inter">{t.localWisdom}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-3 shadow-md hover:shadow-lg transition-shadow">
                <Heart className="w-5 h-5 text-purple-500" />
                <div>
                  <div className="text-sm font-medium text-gray-700 font-inter">{t.communityBuilt}</div>
                  <div className="text-xs text-gray-500 font-inter">{t.togetherWeGrow}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Inspirational Stories */}
          <div className="relative">
            <Card className="bg-white/90 backdrop-blur-lg border-0 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900 font-playfair">{t.inspiringJourneys}</h3>
                    <Button
                      onClick={playStory}
                      variant="outline"
                      size="sm"
                      className={`${isPlaying ? 'bg-blue-100 border-blue-300' : ''} hover:bg-blue-50 font-inter`}
                    >
                      <Volume2 className="w-4 h-4 mr-1" />
                      {isPlaying ? t.playing : t.listen}
                    </Button>
                  </div>

                  <div className="space-y-5 animate-fade-in">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 font-playfair">
                        {inspirationalStories[currentStory].title}
                      </h4>
                      <p className="text-blue-600 font-medium text-lg font-inter">
                        {inspirationalStories[currentStory].subtitle}
                      </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed text-lg font-inter">
                      {inspirationalStories[currentStory].description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-3">
                        <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full font-inter">
                          {inspirationalStories[currentStory].language}
                        </span>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-gray-900 font-inter">
                          {inspirationalStories[currentStory].impact}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Story Indicators */}
                  <div className="flex justify-center space-x-3 pt-6">
                    {inspirationalStories.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentStory(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentStory 
                            ? 'bg-blue-500 scale-125' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-indigo-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -left-2 w-4 h-4 bg-purple-400 rounded-full opacity-60 animate-pulse delay-2000"></div>
          </div>
        </div>

        {/* Call-to-Action Banner */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 font-playfair">{t.readyToTransform}</h3>
            <p className="text-lg mb-6 opacity-90 font-inter">
              {t.joinThousands}
            </p>
            <Button 
              onClick={handleStartLearning}
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-inter"
            >
              {t.beginJourney}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
