import type { Property } from '../types';

export const SAMPLE_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Modern Studio near University',
    description: 'Cozy studio apartment perfect for students',
    price: 450,
    location: {
      city: 'El Jadida',
      address: '123 Student Street',
      coordinates: { lat: 42.3601, lng: -71.0589 }
    },
    amenities: ['kitchen', 'furnished', 'private-bathroom', 'wifi'],
    type: 'studio',
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    distance: 0.5,
    available: true
  },
  {
    id: '2',
    title: 'Shared Student Apartment',
    description: 'Furnished shared room in student complex',
    price: 350,
    location: {
      city: 'El Jadida',
      address: '456 Campus Drive',
      coordinates: { lat: 42.3601, lng: -71.0589 }
    },
    amenities: ['kitchen', 'furnished', 'shared-bathroom', 'wifi'],
    type: 'shared',
    imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af',
    distance: 1.2,
    available: true
  },
  {
    id: '3',
    title: 'Luxury Private Room',
    description: 'Private room in a modern apartment complex',
    price: 600,
    location: {
      city: 'El Jadida',
      address: '789 University Ave',
      coordinates: { lat: 40.7128, lng: -74.0060 }
    },
    amenities: ['kitchen', 'furnished', 'private-bathroom', 'wifi'],
    type: 'private',
    imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af',
    distance: 0.8,
    available: true
  },
  {
    id: '4',
    title: 'Student Apartment Complex',
    description: 'Full apartment with modern amenities',
    price: 850,
    location: {
      city: 'El Jadida',
      address: '321 College Road',
      coordinates: { lat: 40.7128, lng: -74.0060 }
    },
    amenities: ['kitchen', 'furnished', 'private-bathroom', 'wifi'],
    type: 'apartment',
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    distance: 1.5,
    available: true
  },
  {
    id: '5',
    title: 'Student Apartment',
    description: 'Full apartment with modern amenities',
    price: 720,
    location: {
      city: 'El Jadida',
      address: '321 Colleg Road',
      coordinates: { lat: 40.7128, lng: -74.0060 }
    },
    amenities: ['kitchen', 'private-bathroom', 'wifi'],
    type: 'apartment',
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    distance: 3.5,
    available: true
  }
];