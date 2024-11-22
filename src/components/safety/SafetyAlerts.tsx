import React from 'react';
import { AlertTriangle, Users, Package, Camera } from 'lucide-react';
import { useAlertStore, Alert } from '../../store/alertStore';

const getAlertIcon = (type: Alert['type']) => {
  switch (type) {
    case 'overcrowding':
      return <Users className="w-5 h-5" />;
    case 'unattended':
      return <Package className="w-5 h-5" />;
    case 'incident':
      return <Camera className="w-5 h-5" />;
  }
};

export const SafetyAlerts = () => {
  const { alerts, updateAlertStatus } = useAlertStore();
  const activeAlerts = alerts.filter((alert) => alert.status === 'active');

  const handleAlertResponse = (id: string) => {
    updateAlertStatus(id, 'resolved');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="w-5 h-5 text-red-500" />
          <h2 className="text-lg font-medium text-gray-900">Active Alerts</h2>
        </div>
        <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
          {activeAlerts.length} Active
        </span>
      </div>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`bg-white rounded-lg shadow-sm p-6 border-l-4 ${
              alert.status === 'active' ? 'border-red-500' : 'border-green-500'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div
                  className={`p-2 rounded-lg ${
                    alert.status === 'active'
                      ? 'bg-red-100 text-red-600'
                      : 'bg-green-100 text-green-600'
                  }`}
                >
                  {getAlertIcon(alert.type)}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {alert.type.charAt(0).toUpperCase() + alert.type.slice(1)} Alert
                  </h3>
                  <p className="text-gray-500">{alert.description}</p>
                  <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                    <span>{alert.location}</span>
                    <span>•</span>
                    <span>{alert.timestamp}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleAlertResponse(alert.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  alert.status === 'active'
                    ? 'bg-red-100 text-red-700 hover:bg-red-200'
                    : 'bg-green-100 text-green-700'
                }`}
                disabled={alert.status === 'resolved'}
              >
                {alert.status === 'active' ? 'Respond' : 'Resolved'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};