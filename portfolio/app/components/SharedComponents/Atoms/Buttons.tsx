import React from 'react';
import styles from './Buttons.module.css';

interface ButtonsProps {
  ButtonText: string; // Define the type for the button text prop
}

const Buttons: React.FC<ButtonsProps> = ({ ButtonText }) => {
  return (
    <div className={styles.Buttons}>
      <span className={styles.ButtonText}>{ButtonText}</span>
    </div>
  );
};

export default Buttons;
