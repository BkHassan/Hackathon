import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthContext';
import { LanguageProvider } from '../../context/LanguageContext';
import { PropertyProvider } from '../../context/PropertyContext';

interface AppProvidersProps {
  children: React.ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <BrowserRouter>
      <AuthProvider>
        <LanguageProvider>
          <PropertyProvider>
            {children}
          </PropertyProvider>
        </LanguageProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}