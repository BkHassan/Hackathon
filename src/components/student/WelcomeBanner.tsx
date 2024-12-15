// import React from 'react';
import { MapPin, Building2, Search } from 'lucide-react';
import { useProperty } from '../../context/PropertyContext';

export function WelcomeBanner() {
  const { filteredProperties } = useProperty();

  return (
    <div className="relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-indigo-600/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Find Your Perfect Student Home
          </h1>
          <p className="mt-6 text-xl text-indigo-100">
            Browse through {filteredProperties.length} student-friendly properties
          </p>
        </div>
        
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="flex items-center bg-white p-2 rounded-lg shadow-lg">
            <Search className="h-5 w-5 text-gray-400 ml-3" />
            <input
              type="text"
              placeholder="Search by location, property type..."
              className="flex-1 px-4 py-2 focus:outline-none text-gray-700"
            />
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors">
              Search
            </button>
          </div>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
            <MapPin className="h-5 w-5 mr-2" />
            <span>Multiple Locations</span>
          </div>
          <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
            <Building2 className="h-5 w-5 mr-2" />
            <span>Various Property Types</span>
          </div>
        </div>
      </div>
    </div>
  );
}