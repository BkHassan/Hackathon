import React, { useState } from 'react';
import { X } from 'lucide-react';
import type { Property } from '../../types';
import { PaymentForm } from './PaymentForm';

interface BookingModalProps {
  property: Property;
  onClose: () => void;
}

export function BookingModal({ property, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    startDate: '',
    duration: 1,
    studentId: '',
    university: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">
            {step === 1 ? 'Booking Details' : 'Payment Information'}
          </h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        {step === 1 ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Start Date</label>
              <input
                type="date"
                required
                value={bookingData.startDate}
                onChange={(e) => setBookingData({ ...bookingData, startDate: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Duration (months)</label>
              <input
                type="number"
                min="1"
                max="12"
                required
                value={bookingData.duration}
                onChange={(e) => setBookingData({ ...bookingData, duration: parseInt(e.target.value) })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Student ID</label>
              <input
                type="text"
                required
                value={bookingData.studentId}
                onChange={(e) => setBookingData({ ...bookingData, studentId: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">University</label>
              <input
                type="text"
                required
                value={bookingData.university}
                onChange={(e) => setBookingData({ ...bookingData, university: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
            >
              Continue to Payment
            </button>
          </form>
        ) : (
          <PaymentForm
            property={property}
            bookingData={bookingData}
            onClose={onClose}
          />
        )}
      </div>
    </div>
  );
}