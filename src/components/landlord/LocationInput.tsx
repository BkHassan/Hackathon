import React, { useState, useEffect } from 'react';
import type { Property } from '../../types';
import { useCities } from '../../hooks/useCities';

interface LocationInputProps {
  location: Property['location'];
  onChange: (location: Property['location']) => void;
}

export function LocationInput({ location, onChange }: LocationInputProps) {
  const { cities, suggestions, searchCity } = useCities();
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange({
      ...location,
      city: value
    });
    searchCity(value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (city: string) => {
    onChange({
      ...location,
      city
    });
    setShowSuggestions(false);
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...location,
      address: e.target.value
    });
  };

  useEffect(() => {
    const handleClickOutside = () => setShowSuggestions(false);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Location</label>
      <div className="relative">
        <input
          type="text"
          placeholder="City"
          value={location.city}
          onChange={handleCityChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg border border-gray-200">
            <ul className="py-1">
              {suggestions.map((city) => (
                <li
                  key={city}
                  onClick={() => handleSuggestionClick(city)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {city}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <input
        type="text"
        placeholder="Address"
        value={location.address}
        onChange={handleAddressChange}
        className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        required
      />
    </div>
  );
}