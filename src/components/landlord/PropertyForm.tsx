import React, { useState, useRef } from 'react';
import { Upload } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import type { Property } from '../../types';
import { useProperty } from '../../context/PropertyContext';
import { LocationInput } from './LocationInput';
import { AmenitiesSelect } from './AmenitiesSelect';
import { ImageUpload } from './ImageUpload';

interface PropertyFormProps {
  onClose: () => void;
}

export function PropertyForm({ onClose }: PropertyFormProps) {
  const { addProperty } = useProperty();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<Partial<Property>>({
    title: '',
    description: '',
    price: '',
    type: 'private',
    amenities: [],
    available: true,
    location: {
      city: '',
      address: '',
      coordinates: { lat: 0, lng: 0 }
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedImage) {
      alert('Please upload an image');
      return;
    }

    const newProperty: Property = {
      id: uuidv4(),
      title: formData.title || '',
      description: formData.description || '',
      price: Number(formData.price) || 0,
      type: formData.type || 'private',
      amenities: formData.amenities || [],
      available: true,
      location: formData.location || { city: '', address: '', coordinates: { lat: 0, lng: 0 } },
      imageUrl: selectedImage,
      distance: 0
    };

    addProperty(newProperty);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'price') {
      // Only allow positive numbers
      const numValue = value === '' ? '' : Math.max(0, Number(value));
      setFormData(prev => ({ ...prev, [name]: numValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleLocationChange = (location: Property['location']) => {
    setFormData(prev => ({ ...prev, location }));
  };

  const handleAmenitiesChange = (amenities: string[]) => {
    setFormData(prev => ({ ...prev, amenities }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add New Property</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="number"
                name="price"
                min="0"
                step="0.01"
                value={formData.price}
                onChange={handleChange}
                className="block w-full pr-12 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">MAD</span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Property Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="shared">Shared Room</option>
              <option value="private">Private Room</option>
              <option value="studio">Studio</option>
              <option value="apartment">Apartment</option>
            </select>
          </div>
        </div>

        <LocationInput
          location={formData.location}
          onChange={handleLocationChange}
        />

        <AmenitiesSelect
          selectedAmenities={formData.amenities || []}
          onChange={handleAmenitiesChange}
        />

        <ImageUpload
          selectedImage={selectedImage}
          onChange={setSelectedImage}
          fileInputRef={fileInputRef}
        />

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Publish Property
          </button>
        </div>
      </form>
    </div>
  );
}