
import React from 'react';
import { Award, Target, Clock, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ProgressData {
  totalLessons: number;
  completedLessons: number;
  streakDays: number;
  totalHours: number;
  certificates: number;
  level: string;
}

interface ProgressDashboardProps {
  data: ProgressData;
}

const ProgressDashboard = ({ data }: ProgressDashboardProps) => {
  const completionPercentage = Math.round((data.completedLessons / data.totalLessons) * 100);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-bold text-gray-900 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-blue-500" />
            Your Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{completionPercentage}%</div>
              <div className="text-sm text-gray-600">Overall Progress</div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Lessons Completed</span>
                <span>{data.completedLessons}/{data.totalLessons}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Award className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <div className="text-xl font-bold text-gray-900">{data.certificates}</div>
            <div className="text-xs text-gray-600">Certificates</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <Target className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-xl font-bold text-gray-900">{data.streakDays}</div>
            <div className="text-xs text-gray-600">Day Streak</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <Clock className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <div className="text-xl font-bold text-gray-900">{data.totalHours}</div>
            <div className="text-xs text-gray-600">Hours Learned</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <div className="text-xl font-bold text-gray-900">{data.level}</div>
            <div className="text-xs text-gray-600">Current Level</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProgressDashboard;
