import { create } from 'zustand';

export interface Alert {
  id: string;
  type: 'overcrowding' | 'unattended' | 'incident';
  location: string;
  timestamp: string;
  status: 'active' | 'resolved';
  description: string;
}

interface AlertState {
  alerts: Alert[];
  updateAlertStatus: (id: string, status: Alert['status']) => void;
}

export const useAlertStore = create<AlertState>((set) => ({
  alerts: [
    {
      id: '1',
      type: 'overcrowding',
      location: 'Food Court',
      timestamp: '2 minutes ago',
      status: 'active',
      description: 'Crowd density exceeds recommended limits',
    },
    {
      id: '2',
      type: 'unattended',
      location: 'Main Corridor',
      timestamp: '5 minutes ago',
      status: 'active',
      description: 'Unattended package detected',
    },
    {
      id: '3',
      type: 'incident',
      location: 'Parking Level 2',
      timestamp: '15 minutes ago',
      status: 'resolved',
      description: 'Suspicious activity reported',
    },
  ],
  updateAlertStatus: (id, status) =>
    set((state) => ({
      alerts: state.alerts.map((alert) =>
        alert.id === id ? { ...alert, status } : alert
      ),
    })),
}));