import { useState, useCallback } from 'react';

const CITIES = [
  'Casablanca',
  'Rabat',
  'Fes',
  'Tangier',
  'Marrakech',
  'Agadir',
  'Meknes',
  'Oujda',
  'Kenitra',
  'Tetouan'
];

export function useCities() {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const searchCity = useCallback((query: string) => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    const filtered = CITIES.filter(city =>
      city.toLowerCase().includes(query.toLowerCase())
    );
    setSuggestions(filtered);
  }, []);

  return {
    cities: CITIES,
    suggestions,
    searchCity
  };
}