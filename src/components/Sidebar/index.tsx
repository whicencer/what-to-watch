import React from 'react';
import NavigationLink from '../NavigationLink/NavigationLink';
import style from './style.module.scss';
import * as FaIcons from 'react-icons/fa';

export const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <h4>What To Watch</h4>
      <NavigationLink title='Home' url='/' icon={<FaIcons.FaHome />} />
      <NavigationLink title='Top-200' url='/top' icon={<FaIcons.FaTrophy />} />
      <NavigationLink title='Favourite' url='/favourite' icon={<FaIcons.FaStar />} />
    </div>
  );
};
