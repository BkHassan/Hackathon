// import React from 'react';
import { MapPin, Wifi, Home, Calendar } from 'lucide-react';
import type { Property } from '../../types';
import { useBooking } from '../../hooks/useBooking';
import { useAuth } from '../../context/AuthContext';

interface PropertyCardProps {
  property: Property;
  variant?: 'grid' | 'list';
}

export function PropertyCard({ property }: PropertyCardProps) {
  const { startBooking } = useBooking();
  const { user } = useAuth();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-56">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold text-indigo-600">
          {property.price} MAD/month
        </div>
        {property.available ? (
          <div className="absolute bottom-4 left-4 bg-green-500/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-white">
            Available Now
          </div>
        ) : (
          <div className="absolute bottom-4 left-4 bg-red-500/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-white">
            Not Available
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{property.description}</p>
        
        <div className="space-y-3">
          <div className="flex items-center text-gray-600">
            <MapPin className="h-5 w-5 mr-2 text-indigo-500" />
            <span>{property.location.city}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Home className="h-5 w-5 mr-2 text-indigo-500" />
            <span className="capitalize">{property.type}</span>
          </div>
          
          {property.amenities.includes('wifi') && (
            <div className="flex items-center text-gray-600">
              <Wifi className="h-5 w-5 mr-2 text-indigo-500" />
              <span>Wi-Fi Included</span>
            </div>
          )}
        </div>
        
        {user?.role === 'student' && (
          <button
            onClick={() => startBooking(property)}
            className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <Calendar className="h-5 w-5" />
            Book Now
          </button>
        )}
      </div>
    </div>
  );
}