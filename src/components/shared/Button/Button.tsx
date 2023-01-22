import React from 'react';
import styles from './styles.module.scss';

const Button: React.FC<{ children: React.ReactNode, onClick: () => void }> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;