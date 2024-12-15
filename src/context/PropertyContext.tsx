import React, { createContext, useContext, useState } from 'react';
import type { Property } from '../types';
import { SAMPLE_PROPERTIES } from '../data/properties';

interface PropertyContextType {
  properties: Property[];
  filteredProperties: Property[];
  filters: Filters;
  setFilters: (filters: Filters) => void;
  addProperty: (property: Property) => void;
}

interface Filters {
  city: string;
  priceRange: string;
  propertyType: string;
  amenities: string[];
  maxDistance: number;
  onlyAvailable: boolean;
}

const PropertyContext = createContext<PropertyContextType | undefined>(undefined);

export function PropertyProvider({ children }: { children: React.ReactNode }) {
  const [properties, setProperties] = useState<Property[]>(SAMPLE_PROPERTIES);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(SAMPLE_PROPERTIES);
  const [filters, setFilters] = useState<Filters>({
    city: '',
    priceRange: '',
    propertyType: '',
    amenities: [],
    maxDistance: 5,
    onlyAvailable: false,
  });

  const addProperty = (property: Property) => {
    setProperties(prev => [...prev, property]);
    setFilteredProperties(prev => [...prev, property]);
  };

  React.useEffect(() => {
    let filtered = [...properties];

    if (filters.city) {
      filtered = filtered.filter(property =>
        property.location.city.toLowerCase().includes(filters.city.toLowerCase())
      );
    }

    if (filters.propertyType) {
      filtered = filtered.filter(property => property.type === filters.propertyType);
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(property => {
        if (max) {
          return property.price >= min && property.price <= max;
        }
        return property.price >= min;
      });
    }

    if (filters.amenities.length > 0) {
      filtered = filtered.filter(property =>
        filters.amenities.every(amenity => property.amenities.includes(amenity))
      );
    }

    filtered = filtered.filter(property => property.distance <= filters.maxDistance);

    if (filters.onlyAvailable) {
      filtered = filtered.filter(property => property.available);
    }

    setFilteredProperties(filtered);
  }, [filters, properties]);

  return (
    <PropertyContext.Provider
      value={{
        properties,
        filteredProperties,
        filters,
        setFilters,
        addProperty,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
}

export function useProperty() {
  const context = useContext(PropertyContext);
  if (context === undefined) {
    throw new Error('useProperty must be used within a PropertyProvider');
  }
  return context;
}