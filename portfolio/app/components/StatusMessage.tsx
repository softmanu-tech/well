// frontend/components/StatusMessage.tsx
import React from 'react';

interface StatusMessageProps {
  isLoading: boolean;
  error: string | null;
  success: boolean;
}

const StatusMessage: React.FC<StatusMessageProps> = ({
  isLoading,
  error,
  success,
}) => {
  if (isLoading) {
    return <p>Submitting request...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (success) {
    return <p className="text-green-500">Quote request submitted successfully!</p>;
  }

  return null;
};

export default StatusMessage;