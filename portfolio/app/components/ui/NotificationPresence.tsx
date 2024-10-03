// File: /app/components/ui/NotificationPresence.tsx

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';

interface NotificationProps {
  show: boolean;
  message: string;
  icon?: React.ReactNode;
}

interface NotificationPresenceProps {
  children?: React.ReactNode;
  notification?: NotificationProps;
}

const NotificationPresence: React.FC<NotificationPresenceProps> = ({ children, notification }) => {
  return (
    <>
      <AnimatePresence>
        {notification && notification.show && (
          <motion.div
            key="notification"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-5 right-5 bg-green-500 text-white p-4 rounded-md shadow-lg"
          >
            {notification.icon || <FaTrophy className="inline-block mr-2" />}
            {notification.message}
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
};

export default NotificationPresence;