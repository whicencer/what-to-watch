import React from 'react';
import { useNavMenu } from '../../app/store/navMenu';
import style from './style.module.scss';

export const BurgerButton = () => {
  const { setMenuOpen } = useNavMenu();
  return (
    <div className={style.burger} onClick={() => setMenuOpen(true)}>
      <span className={style.burgerLine}></span>
      <span className={style.burgerLine}></span>
      <span className={style.burgerLine}></span>
    </div>
  );
};

export default BurgerButton;