import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Clock, Users, ArrowLeft } from 'lucide-react';

interface QueueDetailsProps {
  queue: {
    id: string;
    name: string;
    currentLength: number;
    waitTime: number;
    status: 'low' | 'medium' | 'high';
  };
  onBack: () => void;
}

const historicalData = [
  { time: '09:00', length: 5, wait: 3 },
  { time: '10:00', length: 8, wait: 5 },
  { time: '11:00', length: 15, wait: 8 },
  { time: '12:00', length: 20, wait: 12 },
  { time: '13:00', length: 18, wait: 10 },
  { time: '14:00', length: 12, wait: 7 },
];

export const QueueDetails = ({ queue, onBack }: QueueDetailsProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-bold text-gray-900">{queue.name} Details</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Current Status</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center text-gray-700">
                <Users className="w-5 h-5 mr-2" />
                <span>Queue Length</span>
              </div>
              <span className="font-medium">{queue.currentLength} people</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-gray-700">
                <Clock className="w-5 h-5 mr-2" />
                <span>Wait Time</span>
              </div>
              <span className="font-medium">{queue.waitTime} minutes</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Historical Trend</h3>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={historicalData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                  }}
                />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="length"
                  stroke="#3B82F6"
                  name="Queue Length"
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="wait"
                  stroke="#EF4444"
                  name="Wait Time (min)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};