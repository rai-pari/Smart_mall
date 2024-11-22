import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LoginForm } from './components/auth/LoginForm';
import { ProtectedRoute } from './components/layout/ProtectedRoute';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { Dashboard } from './pages/Dashboard';
import { QueueMonitorPage } from './pages/QueueMonitorPage';
import { SafetyPage } from './pages/SafetyPage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { DemographicsPage } from './pages/DemographicsPage';
import { HeatMapPage } from './pages/HeatMapPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="queue" element={<QueueMonitorPage />} />
          <Route path="safety" element={<SafetyPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="demographics" element={<DemographicsPage />} />
          <Route path="heatmaps" element={<HeatMapPage />} />
        </Route>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}

export default App;