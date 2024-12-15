import React from 'react';
import { Bell, MessageSquare } from 'lucide-react';
import { LanguageToggle } from './LanguageToggle';

export function HeaderActions() {
  return (
    <div className="flex items-center space-x-4">
      {/* Notifications */}
      <button className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all duration-200">
        <Bell className="h-5 w-5" />
      </button>

      {/* Messages */}
      <button className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all duration-200">
        <MessageSquare className="h-5 w-5" />
      </button>

      {/* Language Toggle */}
      <LanguageToggle />
    </div>
  );
}