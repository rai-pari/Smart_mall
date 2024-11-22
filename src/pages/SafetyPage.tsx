import React from 'react';
import { SafetyAlerts } from '../components/safety/SafetyAlerts';

export const SafetyPage = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Safety & Security</h1>
        <p className="text-gray-600">Monitor alerts and security incidents</p>
      </div>
      <SafetyAlerts />
    </div>
  );
};