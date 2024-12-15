import React from 'react';
import { X } from 'lucide-react';
import { useProperty } from '../../context/PropertyContext';

interface AdvancedFiltersProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AdvancedFilters({ isOpen, onClose }: AdvancedFiltersProps) {
  const { filters, setFilters } = useProperty();

  const amenityOptions = [
    { id: 'kitchen', label: 'Kitchen Access' },
    { id: 'furnished', label: 'Furnished Room' },
    { id: 'private-bathroom', label: 'Private Bathroom' },
    { id: 'shared-bathroom', label: 'Shared Bathroom' },
    { id: 'wifi', label: 'Wi-Fi' },
  ];

  const handleAmenityChange = (amenityId: string) => {
    const updatedAmenities = filters.amenities.includes(amenityId)
      ? filters.amenities.filter(id => id !== amenityId)
      : [...filters.amenities, amenityId];
    setFilters({ ...filters, amenities: updatedAmenities });
  };

  const handleDistanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, maxDistance: Number(e.target.value) });
  };

  const handleAvailabilityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, onlyAvailable: e.target.checked });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Advanced Filters</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Amenities */}
          <div>
            <h4 className="font-medium mb-2">Amenities</h4>
            <div className="grid grid-cols-1 gap-2">
              {amenityOptions.map(amenity => (
                <label key={amenity.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={filters.amenities.includes(amenity.id)}
                    onChange={() => handleAmenityChange(amenity.id)}
                    className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span>{amenity.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Distance to University */}
          <div>
            <h4 className="font-medium mb-2">
              Maximum Distance to University: {filters.maxDistance}km
            </h4>
            <input
              type="range"
              min="0"
              max="5"
              step="0.5"
              value={filters.maxDistance}
              onChange={handleDistanceChange}
              className="w-full"
            />
          </div>

          {/* Availability */}
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={filters.onlyAvailable}
                onChange={handleAvailabilityChange}
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span>Show only available properties</span>
            </label>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-6 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}