import React, { useState } from 'react';
import { MessageSquare, ThumbsUp, ThumbsDown, Star } from 'lucide-react';
import { FeedbackList } from '../components/feedback/FeedbackList';
import { FeedbackStats } from '../components/feedback/FeedbackStats';

export const FeedbackPage = () => {
  const [activeTab, setActiveTab] = useState<'recent' | 'stats'>('recent');

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Customer Feedback</h1>
        <p className="text-gray-600">Monitor and analyze customer satisfaction</p>
      </div>

      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('recent')}
              className={`${
                activeTab === 'recent'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Recent Feedback
            </button>
            <button
              onClick={() => setActiveTab('stats')}
              className={`${
                activeTab === 'stats'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Analytics
            </button>
          </nav>
        </div>
      </div>

      {activeTab === 'recent' ? <FeedbackList /> : <FeedbackStats />}
    </div>
  );
};