import { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Plus, LayoutGrid, List } from 'lucide-react';
import { PropertyForm } from '../components/landlord/PropertyForm';
import { useProperty } from '../context/PropertyContext';
import { PropertyCard } from '../components/property/PropertyCard';

export function LandlordDashboard() {
  const [showForm, setShowForm] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const { properties } = useProperty();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col space-y-6">
          {/* Dashboard Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Owner Dashboard</h1>
              <p className="mt-1 text-sm text-gray-500">
                Manage your properties and view booking requests
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-white rounded-lg shadow-sm p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${
                    viewMode === 'grid' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-500'
                  }`}
                >
                  <LayoutGrid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${
                    viewMode === 'list' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-500'
                  }`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
              <button
                onClick={() => setShowForm(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                <Plus className="h-5 w-5" />
                <span>Add Property</span>
              </button>
            </div>
          </div>

          {/* Properties Grid/List */}
          {properties.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <div className="flex justify-center">
                <Plus className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No properties</h3>
              <p className="mt-1 text-sm text-gray-500">
                Get started by creating a new property listing
              </p>
              <div className="mt-6">
                <button
                  onClick={() => setShowForm(true)}
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Add Property
                </button>
              </div>
            </div>
          ) : (
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {properties.map((property) => (
                <PropertyCard 
                  key={property.id} 
                  property={property}
                  variant={viewMode}
                />
              ))}
            </div>
          )}
        </div>

        {/* Property Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <PropertyForm onClose={() => setShowForm(false)} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}