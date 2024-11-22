import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  LineChart, 
  Shield, 
  Clock,
  AlertTriangle,
  Map,
  MessageSquare
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Overview', path: '/dashboard' },
  { icon: Users, label: 'Demographics', path: '/dashboard/demographics' },
  { icon: LineChart, label: 'Analytics', path: '/dashboard/analytics' },
  { icon: Clock, label: 'Queue Monitor', path: '/dashboard/queue' },
  { icon: Shield, label: 'Safety', path: '/dashboard/safety' },
  { icon: Map, label: 'Heat Maps', path: '/dashboard/heatmaps' },
  { icon: MessageSquare, label: 'Feedback', path: '/dashboard/feedback' },
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-200">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900">Mall Analytics</h2>
      </div>
      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                isActive
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};