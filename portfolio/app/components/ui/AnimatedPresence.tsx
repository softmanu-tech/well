// File: /app/components/ui/AnimatedPresence.tsx

import React from 'react';
import { AnimatePresence as FramerAnimatePresence, motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';

interface NotificationProps {
  show: boolean;
  message: string;
  icon?: React.ReactNode;
}

interface AnimatedPresenceProps {
  children?: React.ReactNode;
  notification?: NotificationProps;
 
}

const AnimatedPresence: React.FC<AnimatedPresenceProps> = ({ children, notification }) => {
  return (
    <FramerAnimatePresence>
      {children}
      {notification && notification.show && (
        <motion.div
          key="notification"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-5 right-5 bg-green-500 text-white p-4 rounded-md shadow-lg"
        >
          {notification.icon || <FaTrophy className="inline-block mr-2" />}
          {notification.message || "Achievement Unlocked!"}
        </motion.div>
      )}
    </FramerAnimatePresence>
  );
};

export default AnimatedPresence;