import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building2 } from 'lucide-react';

export function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Welcome to StudentHome
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <Link
              to="/student-login"
              className="w-full flex items-center justify-center gap-3 px-4 py-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Home className="h-6 w-6" />
              Login as Student
            </Link>

            <Link
              to="/landlord-login"
              className="w-full flex items-center justify-center gap-3 px-4 py-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <Building2 className="h-6 w-6" />
              Login as Landlord
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}