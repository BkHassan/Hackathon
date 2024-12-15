import React from 'react';
import { Euro, Home } from 'lucide-react';
import { Select } from '../ui/Select';

interface FilterSelectProps {
  type: 'price' | 'property';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function FilterSelect({ type, value, onChange }: FilterSelectProps) {
  const config = {
    price: {
      name: 'priceRange',
      label: 'Price Range',
      icon: <Euro className="h-5 w-5 text-gray-400" />,
      options: [
        { value: '', label: 'Any Price' },
        { value: '0-1500', label: '0 - 1500 MAD' },
        { value: '1501-3000', label: '1501 - 3000 MAD' },
        { value: '3001-4500', label: '3001 - 4500 MAD' },
        { value: '4501-999999', label: '4500+ MAD' }
      ]
    },
    property: {
      name: 'propertyType',
      label: 'Property Type',
      icon: <Home className="h-5 w-5 text-gray-400" />,
      options: [
        { value: '', label: 'Any Type' },
        { value: 'shared', label: 'Shared Room' },
        { value: 'private', label: 'Private Room' },
        { value: 'studio', label: 'Studio' },
        { value: 'apartment', label: 'Apartment' }
      ]
    }
  };

  const selectedConfig = config[type];

  return (
    <Select
      name={selectedConfig.name}
      value={value}
      onChange={onChange}
      icon={selectedConfig.icon}
    >
      {selectedConfig.options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
}