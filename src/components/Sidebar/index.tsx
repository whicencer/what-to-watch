import React from 'react';
import NavigationLink from '../NavigationLink/NavigationLink';
import style from './style.module.scss';
import * as FaIcons from 'react-icons/fa';

export const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <h3>What To <span>Watch</span></h3>
      <NavigationLink title='Home' url='/' icon={<FaIcons.FaHome />} />
      <NavigationLink title='Top rated' url='/top' icon={<FaIcons.FaTrophy />} />
      <NavigationLink title='Favourite' url='/favourite' icon={<FaIcons.FaStar />} />
    </div>
  );
};
