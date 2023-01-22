import React from 'react';
import BurgerButton from '../../components/BurgerButton/BurgerButton';
import NavMenu from '../../components/NavMenu/NavMenu';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <BurgerButton />
      <NavMenu />
      { children }
    </>
  );
};

export default MainLayout;