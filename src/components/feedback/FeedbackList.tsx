import React from 'react';
import { MessageSquare, ThumbsUp, ThumbsDown, Star } from 'lucide-react';

interface Feedback {
  id: string;
  user: string;
  rating: number;
  comment: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  timestamp: string;
  location: string;
}

const feedbackData: Feedback[] = [
  {
    id: '1',
    user: 'John D.',
    rating: 4,
    comment: 'Great shopping experience! The new layout is much better.',
    sentiment: 'positive',
    timestamp: '10 minutes ago',
    location: 'Main Entrance',
  },
  {
    id: '2',
    user: 'Sarah M.',
    rating: 2,
    comment: 'Long queues at the food court during lunch hours.',
    sentiment: 'negative',
    timestamp: '1 hour ago',
    location: 'Food Court',
  },
  {
    id: '3',
    user: 'Mike R.',
    rating: 5,
    comment: 'Excellent customer service at the information desk!',
    sentiment: 'positive',
    timestamp: '2 hours ago',
    location: 'Information Desk',
  },
  {
    id: '4',
    user: 'Emily L.',
    rating: 3,
    comment: 'Average experience, could use more seating areas.',
    sentiment: 'neutral',
    timestamp: '3 hours ago',
    location: 'Rest Area',
  },
];

const getSentimentColor = (sentiment: Feedback['sentiment']) => {
  switch (sentiment) {
    case 'positive':
      return 'text-green-500';
    case 'negative':
      return 'text-red-500';
    default:
      return 'text-yellow-500';
  }
};

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

export const FeedbackList = () => {
  return (
    <div className="space-y-6">
      {feedbackData.map((feedback) => (
        <div
          key={feedback.id}
          className="bg-white rounded-lg shadow-sm p-6"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 rounded-full p-2">
                <MessageSquare className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium text-gray-900">
                    {feedback.user}
                  </h3>
                  <StarRating rating={feedback.rating} />
                </div>
                <p className="text-gray-600 mt-1">{feedback.comment}</p>
                <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                  <span>{feedback.location}</span>
                  <span>•</span>
                  <span>{feedback.timestamp}</span>
                </div>
              </div>
            </div>
            <div
              className={`flex items-center space-x-1 ${getSentimentColor(
                feedback.sentiment
              )}`}
            >
              {feedback.sentiment === 'positive' ? (
                <ThumbsUp className="w-5 h-5" />
              ) : feedback.sentiment === 'negative' ? (
                <ThumbsDown className="w-5 h-5" />
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};