import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { StudentLoginPage } from '../pages/StudentLoginPage';
import { LandlordLoginPage } from '../pages/LandlordLoginPage';
import { StudentDashboard } from '../components/student/StudentDashboard';
import { LandlordDashboard } from '../pages/LandlordDashboard';
import { PrivateRoute } from '../components/routing/PrivateRoute';

export function AppRoutes() {
  return (
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
  );
}