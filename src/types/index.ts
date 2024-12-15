export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: {
    city: string;
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  amenities: string[];
  type: 'shared' | 'private' | 'studio' | 'apartment';
  imageUrl: string;
  distance: number;
  available: boolean;
}

export interface PropertyFormData extends Omit<Property, 'id' | 'price'> {
  price: string | number;
}

export interface Filters {
  city: string;
  priceRange: string;
  propertyType: string;
  amenities: string[];
  maxDistance: number;
  onlyAvailable: boolean;
}

export type Language = 'ar' | 'fr';

export type UserRole = 'student' | 'landlord';

export interface User {
  email: string;
  role: UserRole;
}