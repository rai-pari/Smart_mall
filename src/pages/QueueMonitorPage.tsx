import React, { useState } from 'react';
import { QueueStatus } from '../components/monitoring/QueueStatus';
import { QueueDetails } from '../components/monitoring/QueueDetails';

interface Queue {
  id: string;
  name: string;
  currentLength: number;
  waitTime: number;
  status: 'low' | 'medium' | 'high';
}

const queueData: Queue[] = [
  { id: '1', name: 'Main Entrance', currentLength: 12, waitTime: 5, status: 'medium' },
  { id: '2', name: 'Food Court', currentLength: 25, waitTime: 15, status: 'high' },
  { id: '3', name: 'Parking Exit', currentLength: 4, waitTime: 2, status: 'low' },
  { id: '4', name: 'Cinema', currentLength: 18, waitTime: 10, status: 'medium' },
];

export const QueueMonitorPage = () => {
  const [selectedQueue, setSelectedQueue] = useState<Queue | null>(null);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Queue Monitoring</h1>
        <p className="text-gray-600">Real-time queue status and wait times</p>
      </div>

      {selectedQueue ? (
        <QueueDetails queue={selectedQueue} onBack={() => setSelectedQueue(null)} />
      ) : (
        <QueueStatus queues={queueData} onSelectQueue={setSelectedQueue} />
      )}
    </div>
  );
};