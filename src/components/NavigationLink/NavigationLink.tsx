import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './style.module.scss';

interface IProps {
  icon: React.ReactNode;
  title: string;
  url: string
}

const NavigationLink: React.FC<IProps> = ({ icon, title, url }) => {
  return (
    <NavLink to={url} style={{textDecoration: 'none'}}>
      <div className={style.sidebarLink}>
        { icon }
        { title }
      </div>
    </NavLink>
  );
};

export default NavigationLink;