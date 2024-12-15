interface NotificationData {
  to: string;
  subject: string;
  message: string;
}

export function useNotification() {
  const sendNotification = async (data: NotificationData) => {
    // In a real app, this would make an API call to send emails
    console.log('Sending notification:', data);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return true;
  };

  return {
    sendNotification
  };
}