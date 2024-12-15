import React, { useState, useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';
import { useProperty } from '../../context/PropertyContext';
import { useClickOutside } from '../../hooks/useClickOutside';

export function CitySearch() {
  const { properties, filters, setFilters } = useProperty();
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  // Get unique cities from properties
  const availableCities = [...new Set(properties.map(p => p.location.city))];

  useClickOutside(wrapperRef, () => setIsOpen(false));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFilters({ ...filters, city: value });
    
    if (value.length > 0) {
      const filtered = availableCities.filter(city =>
        city.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
      setIsOpen(true);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  };

  const handleSuggestionClick = (city: string) => {
    setFilters({ ...filters, city });
    setIsOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative flex-1 min-w-[200px]">
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          name="city"
          value={filters.city}
          onChange={handleInputChange}
          placeholder="Search by city..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>
      
      {isOpen && suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200">
          <ul className="py-1">
            {suggestions.map((city) => (
              <li
                key={city}
                onClick={() => handleSuggestionClick(city)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
              >
                <MapPin className="h-4 w-4 text-gray-400" />
                {city}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}