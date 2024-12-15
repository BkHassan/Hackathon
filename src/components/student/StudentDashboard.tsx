// import React from 'react';
import { Header } from '../layout/Header';
import { SearchFilters } from '../search/SearchFilters';
import { PropertyGrid } from '../property/PropertyGrid';
import { WelcomeBanner } from './WelcomeBanner';
import { QuickFilters } from './QuickFilters';

export function StudentDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <WelcomeBanner />
        <div className="relative -mt-10 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <QuickFilters />
              <SearchFilters />
            </div>
          </div>
        </div>
        <PropertyGrid />
      </main>
    </div>
  );
}