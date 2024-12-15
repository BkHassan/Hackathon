import React, { useState } from 'react';
import type { Property } from '../../types';
import { useBooking } from '../../hooks/useBooking';

interface PaymentFormProps {
  property: Property;
  bookingData: {
    startDate: string;
    duration: number;
    studentId: string;
    university: string;
  };
  onClose: () => void;
}

export function PaymentForm({ property, bookingData, onClose }: PaymentFormProps) {
  const { submitBooking } = useBooking();
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitBooking({
      property,
      bookingData,
      paymentData
    });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Card Number</label>
        <input
          type="text"
          required
          pattern="\d{16}"
          placeholder="1234 5678 9012 3456"
          value={paymentData.cardNumber}
          onChange={(e) => setPaymentData({ ...paymentData, cardNumber: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
          <input
            type="text"
            required
            pattern="\d{2}/\d{2}"
            placeholder="MM/YY"
            value={paymentData.expiryDate}
            onChange={(e) => setPaymentData({ ...paymentData, expiryDate: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">CVV</label>
          <input
            type="text"
            required
            pattern="\d{3}"
            placeholder="123"
            value={paymentData.cvv}
            onChange={(e) => setPaymentData({ ...paymentData, cvv: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Cardholder Name</label>
        <input
          type="text"
          required
          value={paymentData.name}
          onChange={(e) => setPaymentData({ ...paymentData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div className="mt-6">
        <p className="text-sm text-gray-600 mb-4">
          Total Amount: <span className="font-semibold">{property.price * bookingData.duration} MAD</span>
        </p>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
        >
          Complete Payment
        </button>
      </div>
    </form>
  );
}