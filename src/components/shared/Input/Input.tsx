import styles from './styles.module.scss';
import { FC, FormEvent } from 'react';

interface IProps {
  placeholder?: string;
  onChange?: (event: FormEvent<HTMLInputElement>) => void;
}

const Input: FC<IProps> = ({ placeholder, onChange }) => {
  return (
     <input placeholder={placeholder} className={styles.input} type="text" onChange={onChange} />
  );
};

export default Input;