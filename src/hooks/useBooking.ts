import { useState } from 'react';
import type { Property } from '../types';
import { useNotification } from './useNotification';

interface BookingData {
  property: Property;
  bookingData: {
    startDate: string;
    duration: number;
    studentId: string;
    university: string;
  };
  paymentData: {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    name: string;
  };
}

export function useBooking() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const { sendNotification } = useNotification();

  const startBooking = (property: Property) => {
    setSelectedProperty(property);
  };

  const submitBooking = async (data: BookingData) => {
    try {
      // In a real app, this would make an API call to process payment
      // and create the booking

      // Send notification to admin
      await sendNotification({
        to: 'admin@studenthome.com',
        subject: 'New Booking Request',
        message: `
          New booking request for ${data.property.title}
          Student ID: ${data.bookingData.studentId}
          University: ${data.bookingData.university}
          Duration: ${data.bookingData.duration} months
          Start Date: ${data.bookingData.startDate}
          Total Amount: ${data.property.price * data.bookingData.duration} MAD
        `
      });

      // Send confirmation to student
      await sendNotification({
        to: 'student@gmail.com',
        subject: 'Booking Confirmation',
        message: `
          Your booking request for ${data.property.title} has been received.
          We will process your request and contact you shortly.
          
          Booking Details:
          Duration: ${data.bookingData.duration} months
          Start Date: ${data.bookingData.startDate}
          Total Amount: ${data.property.price * data.bookingData.duration} MAD
        `
      });

      alert('Booking submitted successfully! Check your email for confirmation.');
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('Error submitting booking. Please try again.');
    }
  };

  return {
    selectedProperty,
    startBooking,
    submitBooking
  };
}