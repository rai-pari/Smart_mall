import React from 'react';
import { Clock, Users, ArrowRight } from 'lucide-react';

interface Queue {
  id: string;
  name: string;
  currentLength: number;
  waitTime: number;
  status: 'low' | 'medium' | 'high';
}

interface QueueStatusProps {
  queues: Queue[];
  onSelectQueue: (queue: Queue) => void;
}

const getStatusColor = (status: Queue['status']) => {
  switch (status) {
    case 'low':
      return 'bg-green-100 text-green-800';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800';
    case 'high':
      return 'bg-red-100 text-red-800';
  }
};

export const QueueStatus = ({ queues, onSelectQueue }: QueueStatusProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {queues.map((queue) => (
        <div
          key={queue.id}
          className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">{queue.name}</h3>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                queue.status
              )}`}
            >
              {queue.status.charAt(0).toUpperCase() + queue.status.slice(1)}
            </span>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center text-gray-700">
              <Users className="w-5 h-5 mr-2" />
              <span>Current Length: {queue.currentLength} people</span>
            </div>
            
            <div className="flex items-center text-gray-700">
              <Clock className="w-5 h-5 mr-2" />
              <span>Wait Time: {queue.waitTime} minutes</span>
            </div>
            
            <button
              onClick={() => onSelectQueue(queue)}
              className="w-full mt-4 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              View Details
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};