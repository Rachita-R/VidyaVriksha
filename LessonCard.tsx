
import React from 'react';
import { Book, Clock, Users, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Lesson {
  id: number;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  language: string;
  progress: number;
  isActive: boolean;
  participants: number;
  rating: number;
}

interface LessonCardProps {
  lesson: Lesson;
  onStart: (lessonId: number) => void;
}

const LessonCard = ({ lesson, onStart }: LessonCardProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
      lesson.isActive ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
    }`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-bold text-gray-900 flex items-center">
            <Book className="w-5 h-5 mr-2 text-blue-500" />
            {lesson.title}
          </CardTitle>
          <span className={`text-xs font-semibold px-2 py-1 rounded ${getDifficultyColor(lesson.difficulty)}`}>
            {lesson.difficulty}
          </span>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-gray-700 text-sm leading-relaxed">{lesson.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{lesson.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{lesson.participants}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{lesson.rating}</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>{lesson.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
              style={{ width: `${lesson.progress}%` }}
            />
          </div>
        </div>

        <Button 
          onClick={() => onStart(lesson.id)}
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
        >
          {lesson.progress > 0 ? 'Continue Learning' : 'Start Lesson'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default LessonCard;
