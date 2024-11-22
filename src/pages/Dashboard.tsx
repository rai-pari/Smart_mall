import React, { useState } from 'react';
import { useAuthStore } from '../store/authStore';
import { LogOut, Users, ShoppingBag, Clock, TrendingUp } from 'lucide-react';
import { FootTrafficChart } from '../components/charts/FootTrafficChart';
import { DemographicsChart } from '../components/charts/DemographicsChart';
import { TimeFilter } from '../components/dashboard/TimeFilter';

export const Dashboard = () => {
  const { user, logout } = useAuthStore();
  const [timeFilter, setTimeFilter] = useState('24h');

  const kpis = [
    {
      title: 'Total Visitors',
      value: '2,847',
      change: 12.5,
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: 'Avg. Dwell Time',
      value: '45m',
      change: -2.3,
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: 'Conversion Rate',
      value: '32%',
      change: 8.1,
      icon: <ShoppingBag className="w-6 h-6" />,
    },
    {
      title: 'Peak Traffic',
      value: '423',
      change: 5.4,
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Mall Analytics Dashboard</h1>
              <p className="text-sm text-gray-500">Welcome back, {user?.name}</p>
            </div>
            <div className="flex items-center space-x-4">
              <TimeFilter selected={timeFilter} onChange={setTimeFilter} />
              <button
                onClick={logout}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpis.map((kpi, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 transition-transform hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  {kpi.icon}
                </div>
                <span className={`text-sm font-medium ${
                  kpi.change >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {kpi.change >= 0 ? '+' : ''}{kpi.change}%
                </span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">{kpi.title}</h3>
              <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Foot Traffic Analysis</h3>
            <FootTrafficChart />
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Demographics Overview</h3>
            <DemographicsChart />
          </div>
        </div>
      </main>
    </div>
  );
};