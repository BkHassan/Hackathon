import React from 'react';

interface AmenitiesSelectProps {
  selectedAmenities: string[];
  onChange: (amenities: string[]) => void;
}

export function AmenitiesSelect({ selectedAmenities, onChange }: AmenitiesSelectProps) {
  const amenities = [
    { id: 'kitchen', label: 'Kitchen Access' },
    { id: 'furnished', label: 'Furnished Room' },
    { id: 'private-bathroom', label: 'Private Bathroom' },
    { id: 'shared-bathroom', label: 'Shared Bathroom' },
    { id: 'wifi', label: 'Wi-Fi' }
  ];

  const handleAmenityChange = (amenityId: string) => {
    const newAmenities = selectedAmenities.includes(amenityId)
      ? selectedAmenities.filter(id => id !== amenityId)
      : [...selectedAmenities, amenityId];
    onChange(newAmenities);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
      <div className="grid grid-cols-2 gap-2">
        {amenities.map((amenity) => (
          <label key={amenity.id} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedAmenities.includes(amenity.id)}
              onChange={() => handleAmenityChange(amenity.id)}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span className="text-sm text-gray-700">{amenity.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}