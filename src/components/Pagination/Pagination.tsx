import React, { SetStateAction, Dispatch } from 'react';
import styles from './styles.module.scss';

interface IProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const Pagination: React.FC<IProps> = ({ currentPage, totalPages, setCurrentPage }) => {
  return (
    <div className={styles.pagination}>
      <button onClick={() => setCurrentPage(prev => prev - 1)} disabled={currentPage === 1} className={styles.paginationButton}>&#8592;</button>
      <span>{currentPage} of {totalPages}</span>
      <button onClick={() => setCurrentPage(prev => prev + 1)} disabled={currentPage === totalPages} className={styles.paginationButton}>&#8594;</button>
    </div>
  );
};

export default Pagination;