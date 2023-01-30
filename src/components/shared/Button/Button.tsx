import React from 'react';
import styles from './styles.module.scss';

const Button: React.FC<{ children: React.ReactNode, onClick?: () => void, style?: any, disabled?: boolean }> = ({ children, onClick, style, disabled }) => {
  return (
    <button style={{ ...style }} onClick={onClick} className={styles.button} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;