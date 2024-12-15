import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { StudentDashboard } from './components/student/StudentDashboard';
import { PropertyProvider } from './context/PropertyContext';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import { LoginPage } from './pages/LoginPage';
import { StudentLoginPage } from './pages/StudentLoginPage';
import { LandlordLoginPage } from './pages/LandlordLoginPage';
import { LandlordDashboard } from './pages/LandlordDashboard';
import { useAuth } from './context/AuthContext';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  return user ? <>{children}</> : <Navigate to="/login" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <LanguageProvider>
          <PropertyProvider>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/student-login" element={<StudentLoginPage />} />
              <Route path="/landlord-login" element={<LandlordLoginPage />} />
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <StudentDashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/landlord"
                element={
                  <PrivateRoute>
                    <LandlordDashboard />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </PropertyProvider>
        </LanguageProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}