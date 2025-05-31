
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Book, Users, Award, Calendar, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import VidyaChat from '@/components/VidyaChat';
import LessonCard from '@/components/LessonCard';
import ProgressDashboard from '@/components/ProgressDashboard';
import LanguageSelector from '@/components/LanguageSelector';

const Learning = () => {
  const [currentLanguage, setCurrentLanguage] = useState('English');
  const [currentLesson, setCurrentLesson] = useState(1);
  const [activeTab, setActiveTab] = useState('lessons');
  const navigate = useNavigate();

  const languages = [
    { name: 'English', code: 'en-US', flag: '🇺🇸' },
    { name: 'हिंदी', code: 'hi-IN', flag: '🇮🇳' },
    { name: 'বাংলা', code: 'bn-IN', flag: '🇧🇩' },
    { name: 'தமிழ்', code: 'ta-IN', flag: '🇮🇳' },
    { name: 'मराठी', code: 'mr-IN', flag: '🇮🇳' }
  ];

  const lessons = [
    {
      id: 1,
      title: "Basic Literacy - अक्षर ज्ञान",
      description: "Learn letters and sounds through local stories and cultural tales",
      duration: "45 mins",
      difficulty: 'Beginner' as const,
      language: currentLanguage,
      progress: 0,
      isActive: true,
      participants: 234,
      rating: 4.8
    },
    {
      id: 2,
      title: "Numbers & Counting - संख्या",
      description: "Master mathematics with everyday examples from your community",
      duration: "30 mins",
      difficulty: 'Beginner' as const,
      language: currentLanguage,
      progress: 0,
      isActive: false,
      participants: 189,
      rating: 4.7
    },
    {
      id: 3,
      title: "Digital Skills - डिजिटल कौशल",
      description: "Navigate technology with confidence and practical applications",
      duration: "60 mins",
      difficulty: 'Intermediate' as const,
      language: currentLanguage,
      progress: 0,
      isActive: false,
      participants: 156,
      rating: 4.9
    },
    {
      id: 4,
      title: "Health & Wellness - स्वास्थ्य",
      description: "Learn about health, nutrition, and wellness in your language",
      duration: "40 mins",
      difficulty: 'Beginner' as const,
      language: currentLanguage,
      progress: 0,
      isActive: false,
      participants: 203,
      rating: 4.6
    },
    {
      id: 5,
      title: "Financial Literacy - वित्तीय साक्षरता",
      description: "Understand money, banking, and financial planning",
      duration: "50 mins",
      difficulty: 'Intermediate' as const,
      language: currentLanguage,
      progress: 0,
      isActive: false,
      participants: 145,
      rating: 4.8
    },
    {
      id: 6,
      title: "Environmental Awareness - पर्यावरण",
      description: "Learn about nature conservation and sustainable living",
      duration: "35 mins",
      difficulty: 'Beginner' as const,
      language: currentLanguage,
      progress: 0,
      isActive: false,
      participants: 178,
      rating: 4.7
    }
  ];

  const progressData = {
    totalLessons: lessons.length,
    completedLessons: 0,
    streakDays: 0,
    totalHours: 0,
    certificates: 0,
    level: 'Beginner'
  };

  const tabs = [
    { id: 'lessons', label: 'My Lessons', icon: Book },
    { id: 'progress', label: 'Progress', icon: Target },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'achievements', label: 'Achievements', icon: Award }
  ];

  const handleStartLesson = (lessonId: number) => {
    setCurrentLesson(lessonId);
    console.log(`Starting lesson ${lessonId}`);
    // Here you would typically navigate to the actual lesson content
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')}
                className="text-gray-600 hover:text-blue-600"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <h1 className="text-xl font-bold text-gray-900">VidyaVriksha Learning</h1>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <LanguageSelector 
                currentLanguage={currentLanguage}
                onLanguageChange={setCurrentLanguage}
                languages={languages}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to Your Learning Journey!
          </h2>
          <p className="text-gray-600">
            Start your educational adventure with culturally relevant lessons in {currentLanguage}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl p-1 shadow-lg border border-gray-200">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                variant={activeTab === tab.id ? "default" : "ghost"}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeTab === tab.id 
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="font-medium">{tab.label}</span>
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Lessons Tab */}
            {activeTab === 'lessons' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {lessons.map((lesson) => (
                    <LessonCard 
                      key={lesson.id}
                      lesson={lesson}
                      onStart={handleStartLesson}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Progress Tab */}
            {activeTab === 'progress' && (
              <div className="space-y-6">
                <ProgressDashboard data={progressData} />
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                      Learning Schedule
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-900 mb-2">Today's Goals</h4>
                        <ul className="space-y-2 text-sm text-blue-800">
                          <li>• Complete one lesson</li>
                          <li>• Practice vocabulary for 10 minutes</li>
                          <li>• Join community discussion</li>
                        </ul>
                      </div>
                      <div className="text-center py-4">
                        <p className="text-gray-600">Set your daily learning schedule to build consistent habits!</p>
                        <Button className="mt-3 bg-blue-500 hover:bg-blue-600">
                          Create Schedule
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Community Tab */}
            {activeTab === 'community' && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="w-5 h-5 mr-2 text-green-500" />
                      Learning Community
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-green-50 rounded-lg p-4">
                          <h4 className="font-semibold text-green-900 mb-2">Study Groups</h4>
                          <p className="text-sm text-green-800 mb-3">Join learners from your region</p>
                          <Button variant="outline" size="sm" className="w-full">
                            Find Study Group
                          </Button>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-4">
                          <h4 className="font-semibold text-purple-900 mb-2">Mentors</h4>
                          <p className="text-sm text-purple-800 mb-3">Get guidance from experienced learners</p>
                          <Button variant="outline" size="sm" className="w-full">
                            Find Mentor
                          </Button>
                        </div>
                      </div>
                      <div className="bg-yellow-50 rounded-lg p-4">
                        <h4 className="font-semibold text-yellow-900 mb-2">Community Challenges</h4>
                        <p className="text-sm text-yellow-800 mb-3">Participate in village-wide learning competitions</p>
                        <Button variant="outline" size="sm">
                          View Challenges
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Achievements Tab */}
            {activeTab === 'achievements' && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="w-5 h-5 mr-2 text-yellow-500" />
                      Your Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="w-10 h-10 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to Earn Your First Badge?</h3>
                      <p className="text-gray-600 mb-4">Complete your first lesson to unlock achievements!</p>
                      <Button 
                        onClick={() => setActiveTab('lessons')}
                        className="bg-yellow-500 hover:bg-yellow-600"
                      >
                        Start Learning
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Chat with Vidya */}
            <VidyaChat currentLanguage={currentLanguage} />

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-900">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start text-sm">
                  📚 Browse All Lessons
                </Button>
                <Button variant="outline" className="w-full justify-start text-sm">
                  🎯 Set Learning Goals
                </Button>
                <Button variant="outline" className="w-full justify-start text-sm">
                  👥 Join Study Group
                </Button>
                <Button variant="outline" className="w-full justify-start text-sm">
                  📊 View Progress Report
                </Button>
              </CardContent>
            </Card>

            {/* Learning Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-900">💡 Today's Tip</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    Practice speaking aloud while learning! Voice-based learning helps you remember better and builds confidence.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;
