import React from 'react';
import { PropertyCard } from './PropertyCard';
import { useProperty } from '../../context/PropertyContext';

export function PropertyGrid() {
  const { filteredProperties } = useProperty();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {filteredProperties.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-gray-900">No properties found</h3>
          <p className="mt-2 text-sm text-gray-500">
            Try adjusting your search filters to find more options
          </p>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}