import React from 'react';
import { Sidebar } from '../../components/Sidebar';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Sidebar />
      { children }
    </div>
  );
};

export default MainLayout;