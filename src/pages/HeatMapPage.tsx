import React, { useState } from 'react';
import { Map } from 'lucide-react';

const zones = [
  { id: 1, name: 'Food Court', density: 85 },
  { id: 2, name: 'Fashion Wing', density: 65 },
  { id: 3, name: 'Electronics', density: 45 },
  { id: 4, name: 'Entertainment', density: 75 },
  { id: 5, name: 'Services', density: 30 },
];

const getDensityColor = (density: number) => {
  if (density >= 80) return 'bg-red-500';
  if (density >= 60) return 'bg-orange-500';
  if (density >= 40) return 'bg-yellow-500';
  return 'bg-green-500';
};

export const HeatMapPage = () => {
  const [selectedZone, setSelectedZone] = useState<number | null>(null);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Mall Heat Map</h1>
        <p className="text-gray-600">Real-time crowd density visualization</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-4">
            <Map className="w-5 h-5 text-blue-600 mr-2" />
            <h2 className="text-lg font-medium text-gray-900">Zone Activity</h2>
          </div>
          <div className="aspect-square bg-gray-100 rounded-lg p-4">
            <div className="grid grid-cols-2 gap-4 h-full">
              {zones.map((zone) => (
                <div
                  key={zone.id}
                  onClick={() => setSelectedZone(zone.id)}
                  className={`relative rounded-lg cursor-pointer transition-all ${
                    getDensityColor(zone.density)
                  } ${
                    selectedZone === zone.id ? 'ring-4 ring-blue-500 ring-opacity-50' : ''
                  }`}
                  style={{ opacity: zone.density / 100 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-medium text-sm bg-black bg-opacity-30 px-2 py-1 rounded">
                      {zone.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Zone Details</h2>
          {selectedZone ? (
            <div className="space-y-4">
              {zones
                .filter((zone) => zone.id === selectedZone)
                .map((zone) => (
                  <div key={zone.id}>
                    <h3 className="text-xl font-medium text-gray-900">{zone.name}</h3>
                    <div className="mt-4 space-y-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Current Density</p>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`${getDensityColor(
                              zone.density
                            )} h-2 rounded-full transition-all`}
                            style={{ width: `${zone.density}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-gray-700 mt-1">{zone.density}% Occupied</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="text-center text-gray-500">
              <p>Select a zone to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};