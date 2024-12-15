import React from 'react';
import { Home, Users, Building } from 'lucide-react';
import { useProperty } from '../../context/PropertyContext';

export function QuickFilters() {
  const { filters, setFilters } = useProperty();

  const quickFilters = [
    { id: 'private', icon: Home, label: 'Private Rooms' },
    { id: 'shared', icon: Users, label: 'Shared Rooms' },
    { id: 'studio', icon: Building, label: 'Studios' },
  ];

  const handleQuickFilter = (type: string) => {
    setFilters({
      ...filters,
      propertyType: filters.propertyType === type ? '' : type,
    });
  };

  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-center gap-4">
          {quickFilters.map((filter) => {
            const Icon = filter.icon;
            const isActive = filters.propertyType === filter.id;
            
            return (
              <button
                key={filter.id}
                onClick={() => handleQuickFilter(filter.id)}
                className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-600 ring-2 ring-indigo-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-5 w-5 mr-2" />
                <span>{filter.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}