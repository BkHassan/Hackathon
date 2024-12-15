import React, { useState } from 'react';
import { Sliders } from 'lucide-react';
import { useProperty } from '../../context/PropertyContext';
import { CitySearch } from './CitySearch';
import { AdvancedFilters } from './AdvancedFilters';
import { FilterSelect } from './FilterSelect';

export function SearchFilters() {
  const { filters, setFilters } = useProperty();
  const [isAdvancedFiltersOpen, setIsAdvancedFiltersOpen] = useState(false);

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
        <div className="flex-1 min-w-0">
          <CitySearch />
        </div>
        
        <div className="flex items-center gap-4">
          <FilterSelect
            type="price"
            value={filters.priceRange}
            onChange={handleFilterChange}
          />
          
          <FilterSelect
            type="property"
            value={filters.propertyType}
            onChange={handleFilterChange}
          />
          
          <button
            onClick={() => setIsAdvancedFiltersOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 hover:border-indigo-600 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200"
          >
            <Sliders className="h-4 w-4" />
            <span className="hidden sm:inline">More Filters</span>
            {(filters.amenities.length > 0 || filters.maxDistance < 5 || filters.onlyAvailable) && (
              <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-indigo-600 rounded-full">
                {filters.amenities.length + (filters.maxDistance < 5 ? 1 : 0) + (filters.onlyAvailable ? 1 : 0)}
              </span>
            )}
          </button>
        </div>
      </div>
      
      <AdvancedFilters
        isOpen={isAdvancedFiltersOpen}
        onClose={() => setIsAdvancedFiltersOpen(false)}
      />
    </>
  );
}