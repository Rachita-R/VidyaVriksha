
import React from 'react';
import { Users, Heart, Globe, BookOpen, MessageSquare, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CommunityProps {
  currentLanguage: string;
}

const Community = ({ currentLanguage }: CommunityProps) => {
  const translations = {
    'English': {
      title: 'Building Stronger Communities Through Learning',
      subtitle: 'Connect, collaborate, and grow together in a supportive environment designed for learners from all backgrounds',
      studyGroups: 'Study Groups',
      studyGroupsDesc: 'Join local study circles where neighbors learn together, share knowledge, and support each other\'s educational journey.',
      mentorship: 'Mentorship Program',
      mentorshipDesc: 'Connect with experienced learners and educators who understand your cultural context and can guide your learning path.',
      culturalExchange: 'Cultural Exchange',
      culturalExchangeDesc: 'Share your local stories, traditions, and knowledge while learning from diverse communities across regions.',
      skillSharing: 'Skill Sharing',
      skillSharingDesc: 'Teach what you know and learn new skills from community members, creating a rich ecosystem of knowledge exchange.',
      digitalLiteracy: 'Digital Literacy Circles',
      digitalLiteracyDesc: 'Learn technology skills together in groups, making digital tools accessible and less intimidating for everyone.',
      certificatePrograms: 'Certificate Programs',
      certificateProgramsDesc: 'Earn recognized certificates through community-based learning programs that validate your skills and knowledge.',
      joinCommunity: 'Join Our Community',
      getStarted: 'Get Started Today'
    },
    'हिंदी': {
      title: 'सीखने के माध्यम से मजबूत समुदाय का निर्माण',
      subtitle: 'सभी पृष्ठभूमि के शिक्षार्थियों के लिए डिज़ाइन किए गए सहायक वातावरण में जुड़ें, सहयोग करें और एक साथ बढ़ें',
      studyGroups: 'अध्ययन समूह',
      studyGroupsDesc: 'स्थानीय अध्ययन मंडलियों में शामिल हों जहां पड़ोसी एक साथ सीखते हैं, ज्ञान साझा करते हैं और एक-दूसरे की शैक्षणिक यात्रा का समर्थन करते हैं।',
      mentorship: 'मेंटरशिप कार्यक्रम',
      mentorshipDesc: 'अनुभवी शिक्षार्थियों और शिक्षकों से जुड़ें जो आपके सांस्कृतिक संदर्भ को समझते हैं और आपके सीखने के पथ का मार्गदर्शन कर सकते हैं।',
      culturalExchange: 'सांस्कृतिक आदान-प्रदान',
      culturalExchangeDesc: 'अपनी स्थानीय कहानियां, परंपराएं और ज्ञान साझा करें जबकि क्षेत्रों में विविध समुदायों से सीखें।',
      skillSharing: 'कौशल साझाकरण',
      skillSharingDesc: 'जो आप जानते हैं उसे सिखाएं और समुदायिक सदस्यों से नए कौशल सीखें, ज्ञान के आदान-प्रदान का समृद्ध पारिस्थितिकी तंत्र बनाएं।',
      digitalLiteracy: 'डिजिटल साक्षरता मंडलियां',
      digitalLiteracyDesc: 'समूहों में प्रौद्योगिकी कौशल सीखें, डिजिटल उपकरणों को सभी के लिए सुलभ और कम डरावना बनाएं।',
      certificatePrograms: 'प्रमाणपत्र कार्यक्रम',
      certificateProgramsDesc: 'समुदाय-आधारित शिक्षण कार्यक्रमों के माध्यम से मान्यता प्राप्त प्रमाणपत्र अर्जित करें जो आपके कौशल और ज्ञान को प्रमाणित करते हैं।',
      joinCommunity: 'हमारे समुदाय में शामिल हों',
      getStarted: 'आज ही शुरुआत करें'
    },
    'বাংলা': {
      title: 'শেখার মাধ্যমে শক্তিশালী সম্প্রদায় গড়া',
      subtitle: 'সব পটভূমির শিক্ষার্থীদের জন্য ডিজাইন করা সহায়ক পরিবেশে সংযুক্ত হন, সহযোগিতা করুন এবং একসাথে বেড়ে উঠুন',
      studyGroups: 'অধ্যয়ন গ্রুপ',
      studyGroupsDesc: 'স্থানীয় অধ্যয়ন চক্রে যোগ দিন যেখানে প্রতিবেশীরা একসাথে শেখে, জ্ঞান ভাগ করে এবং একে অপরের শিক্ষামূলক যাত্রায় সহায়তা করে।',
      mentorship: 'পরামর্শদাতা কর্মসূচি',
      mentorshipDesc: 'অভিজ্ঞ শিক্ষার্থী এবং শিক্ষকদের সাথে সংযুক্ত হন যারা আপনার সাংস্কৃতিক প্রসঙ্গ বোঝেন এবং আপনার শেখার পথ নির্দেশনা দিতে পারেন।',
      culturalExchange: 'সাংস্কৃতিক বিনিময়',
      culturalExchangeDesc: 'আপনার স্থানীয় গল্প, ঐতিহ্য এবং জ্ঞান শেয়ার করুন যখন অঞ্চল জুড়ে বিভিন্ন সম্প্রদায় থেকে শিখুন।',
      skillSharing: 'দক্ষতা ভাগাভাগি',
      skillSharingDesc: 'আপনি যা জানেন তা শেখান এবং সম্প্রদায়ের সদস্যদের কাছ থেকে নতুন দক্ষতা শিখুন, জ্ঞান বিনিময়ের সমৃদ্ধ বাস্তুতন্ত্র তৈরি করুন।',
      digitalLiteracy: 'ডিজিটাল সাক্ষরতা চক্র',
      digitalLiteracyDesc: 'গ্রুপে প্রযুক্তি দক্ষতা শিখুন, ডিজিটাল সরঞ্জামগুলি সবার জন্য অ্যাক্সেসযোগ্য এবং কম ভয়ঙ্কর করে তুলুন।',
      certificatePrograms: 'সার্টিফিকেট প্রোগ্রাম',
      certificateProgramsDesc: 'সম্প্রদায়-ভিত্তিক শেখার কর্মসূচির মাধ্যমে স্বীকৃত সার্টিফিকেট অর্জন করুন যা আপনার দক্ষতা এবং জ্ঞানকে প্রমাণ করে।',
      joinCommunity: 'আমাদের সম্প্রদায়ে যোগ দিন',
      getStarted: 'আজই শুরু করুন'
    }
  };

  const getCurrentTranslation = () => {
    return translations[currentLanguage as keyof typeof translations] || translations['English'];
  };

  const t = getCurrentTranslation();

  const communityFeatures = [
    {
      icon: Users,
      title: t.studyGroups,
      description: t.studyGroupsDesc,
      color: 'blue'
    },
    {
      icon: Heart,
      title: t.mentorship,
      description: t.mentorshipDesc,
      color: 'red'
    },
    {
      icon: Globe,
      title: t.culturalExchange,
      description: t.culturalExchangeDesc,
      color: 'green'
    },
    {
      icon: BookOpen,
      title: t.skillSharing,
      description: t.skillSharingDesc,
      color: 'purple'
    },
    {
      icon: MessageSquare,
      title: t.digitalLiteracy,
      description: t.digitalLiteracyDesc,
      color: 'indigo'
    },
    {
      icon: Award,
      title: t.certificatePrograms,
      description: t.certificateProgramsDesc,
      color: 'yellow'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-500',
      red: 'bg-red-500',
      green: 'bg-green-500',
      purple: 'bg-purple-500',
      indigo: 'bg-indigo-500',
      yellow: 'bg-yellow-500'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="community" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-inter">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {communityFeatures.map((feature, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${getColorClasses(feature.color)}`}>
                  <feature.icon className="w-8 h-8 text-white" />
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

        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-playfair">
              {t.joinCommunity}
            </h3>
            <p className="text-gray-600 mb-6 font-inter">
              {t.subtitle}
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-inter">
              {t.getStarted}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
