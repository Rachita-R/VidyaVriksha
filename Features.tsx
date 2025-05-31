
import React from 'react';
import { Volume2, Globe, Users, Heart, Wifi, BookOpen, Award, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface FeaturesProps {
  currentLanguage: string;
}

const Features = ({ currentLanguage }: FeaturesProps) => {
  const translations = {
    'English': {
      title: 'Features Built for Everyone',
      subtitle: 'Accessible, inclusive, and designed with marginalized communities at the center',
      voiceFirst: 'Voice-First Learning',
      voiceFirstDesc: 'Navigate and learn entirely through voice commands. Perfect for users with limited literacy or visual impairments.',
      multiLanguage: 'Multi-Language Support',
      multiLanguageDesc: 'Learn in your native language with support for 15+ regional Indian languages including Hindi, Bengali, Tamil, and more.',
      offlineCapable: 'Offline Capability',
      offlineCapableDesc: 'Download lessons and continue learning even without internet connection. Perfect for rural and remote areas.',
      culturalIntegration: 'Cultural Integration',
      culturalIntegrationDesc: 'Lessons incorporate local stories, traditions, and cultural context to make learning more relatable and engaging.',
      communitySupport: 'Community Support',
      communitySupportDesc: 'Connect with fellow learners, find mentors, and participate in local learning groups within your community.',
      personalized: 'Personalized Learning',
      personalizedDesc: 'AI-powered recommendations adapt to your learning pace, style, and goals for maximum effectiveness.',
      achievement: 'Achievement System',
      achievementDesc: 'Earn badges, certificates, and recognition as you progress through your learning journey.',
      aiAssistant: 'AI Learning Assistant',
      aiAssistantDesc: 'Get 24/7 support from Vidya, your personal learning companion who understands your language and culture.'
    },
    'हिंदी': {
      title: 'सभी के लिए बनाई गई सुविधाएं',
      subtitle: 'सुलभ, समावेशी, और हाशिए पर रहने वाले समुदायों को केंद्र में रखकर डिज़ाइन की गई',
      voiceFirst: 'आवाज़-पहले सीखना',
      voiceFirstDesc: 'पूरी तरह से आवाज़ कमांड के माध्यम से नेविगेट करें और सीखें। सीमित साक्षरता या दृश्य हानि वाले उपयोगकर्ताओं के लिए आदर्श।',
      multiLanguage: 'बहु-भाषा समर्थन',
      multiLanguageDesc: 'हिंदी, बंगाली, तमिल और अन्य सहित 15+ भारतीय भाषाओं के समर्थन के साथ अपनी मातृभाषा में सीखें।',
      offlineCapable: 'ऑफ़लाइन सक्षमता',
      offlineCapableDesc: 'पाठ डाउनलोड करें और इंटरनेट कनेक्शन के बिना भी सीखना जारी रखें। ग्रामीण और दूरदराज के क्षेत्रों के लिए आदर्श।',
      culturalIntegration: 'सांस्कृतिक एकीकरण',
      culturalIntegrationDesc: 'पाठों में स्थानीय कहानियां, परंपराएं और सांस्कृतिक संदर्भ शामिल हैं ताकि सीखना अधिक संबंधित और आकर्षक हो।',
      communitySupport: 'समुदायिक सहायता',
      communitySupportDesc: 'साथी शिक्षार्थियों से जुड़ें, मेंटर खोजें, और अपने समुदाय के भीतर स्थानीय शिक्षण समूहों में भाग लें।',
      personalized: 'व्यक्तिगत शिक्षा',
      personalizedDesc: 'AI-संचालित सुझाव आपकी सीखने की गति, शैली और लक्ष्यों के अनुकूल होते हैं अधिकतम प्रभावशीलता के लिए।',
      achievement: 'उपलब्धि प्रणाली',
      achievementDesc: 'अपनी सीखने की यात्रा में आगे बढ़ते समय बैज, प्रमाणपत्र और मान्यता अर्जित करें।',
      aiAssistant: 'AI शिक्षा सहायक',
      aiAssistantDesc: 'विद्या से 24/7 सहायता प्राप्त करें, आपका व्यक्तिगत शिक्षा साथी जो आपकी भाषा और संस्कृति को समझता है।'
    },
    'বাংলা': {
      title: 'সবার জন্য তৈরি বৈশিষ্ট্য',
      subtitle: 'প্রবেশযোগ্য, অন্তর্ভুক্তিমূলক, এবং প্রান্তিক সম্প্রদায়গুলিকে কেন্দ্রে রেখে ডিজাইন করা',
      voiceFirst: 'ভয়েস-প্রথম শেখা',
      voiceFirstDesc: 'সম্পূর্ণভাবে ভয়েস কমান্ডের মাধ্যমে নেভিগেট করুন এবং শিখুন। সীমিত সাক্ষরতা বা দৃষ্টি প্রতিবন্ধকতা সহ ব্যবহারকারীদের জন্য নিখুঁত।',
      multiLanguage: 'বহু-ভাষা সমর্থন',
      multiLanguageDesc: 'হিন্দি, বাংলা, তামিল এবং আরও অনেক সহ ১৫+ আঞ্চলিক ভারতীয় ভাষার সমর্থন সহ আপনার মাতৃভাষায় শিখুন।',
      offlineCapable: 'অফলাইন সক্ষমতা',
      offlineCapableDesc: 'পাঠ ডাউনলোড করুন এবং ইন্টারনেট সংযোগ ছাড়াই শেখা চালিয়ে যান। গ্রামীণ এবং প্রত্যন্ত অঞ্চলের জন্য নিখুঁত।',
      culturalIntegration: 'সাংস্কৃতিক একীকরণ',
      culturalIntegrationDesc: 'পাঠগুলিতে স্থানীয় গল্প, ঐতিহ্য এবং সাংস্কৃতিক প্রসঙ্গ অন্তর্ভুক্ত রয়েছে যাতে শেখা আরও প্রাসঙ্গিক এবং আকর্ষণীয় হয়।',
      communitySupport: 'সম্প্রদায়ের সহায়তা',
      communitySupportDesc: 'সহযোগী শিক্ষার্থীদের সাথে সংযুক্ত হন, পরামর্শদাতা খুঁজুন এবং আপনার সম্প্রদায়ের মধ্যে স্থানীয় শেখার গ্রুপে অংশগ্রহণ করুন।',
      personalized: 'ব্যক্তিগতকৃত শিক্ষা',
      personalizedDesc: 'AI-চালিত সুপারিশগুলি সর্বোচ্চ কার্যকারিতার জন্য আপনার শেখার গতি, শৈলী এবং লক্ষ্যগুলির সাথে খাপ খায়।',
      achievement: 'অর্জন সিস্টেম',
      achievementDesc: 'আপনার শেখার যাত্রায় এগিয়ে যাওয়ার সাথে সাথে ব্যাজ, সার্টিফিকেট এবং স্বীকৃতি অর্জন করুন।',
      aiAssistant: 'AI শেখার সহায়ক',
      aiAssistantDesc: 'বিদ্যা থেকে ২৪/৭ সহায়তা পান, আপনার ব্যক্তিগত শেখার সঙ্গী যিনি আপনার ভাষা এবং সংস্কৃতি বোঝেন।'
    }
  };

  const getCurrentTranslation = () => {
    return translations[currentLanguage as keyof typeof translations] || translations['English'];
  };

  const t = getCurrentTranslation();

  const features = [
    {
      icon: Volume2,
      title: t.voiceFirst,
      description: t.voiceFirstDesc,
      color: 'blue'
    },
    {
      icon: Globe,
      title: t.multiLanguage,
      description: t.multiLanguageDesc,
      color: 'indigo'
    },
    {
      icon: Wifi,
      title: t.offlineCapable,
      description: t.offlineCapableDesc,
      color: 'green'
    },
    {
      icon: Heart,
      title: t.culturalIntegration,
      description: t.culturalIntegrationDesc,
      color: 'purple'
    },
    {
      icon: Users,
      title: t.communitySupport,
      description: t.communitySupportDesc,
      color: 'pink'
    },
    {
      icon: BookOpen,
      title: t.personalized,
      description: t.personalizedDesc,
      color: 'orange'
    },
    {
      icon: Award,
      title: t.achievement,
      description: t.achievementDesc,
      color: 'yellow'
    },
    {
      icon: MessageCircle,
      title: t.aiAssistant,
      description: t.aiAssistantDesc,
      color: 'teal'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      indigo: 'bg-indigo-100 text-indigo-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      pink: 'bg-pink-100 text-pink-600',
      orange: 'bg-orange-100 text-orange-600',
      yellow: 'bg-yellow-100 text-yellow-600',
      teal: 'bg-teal-100 text-teal-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${getColorClasses(feature.color)}`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 font-playfair">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed font-inter">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
