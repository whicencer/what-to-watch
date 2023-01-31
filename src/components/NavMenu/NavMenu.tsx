import React from 'react';
import { Link } from 'react-router-dom';
import { useNavMenu } from '../../app/store/navMenu';
import styles from './style.module.scss';

const links: { to: string, title: string }[] = [
  {
    to: '/',
    title: 'Home'
  },
  {
    to: '/top',
    title: 'Top rated'
  },
  {
    to: '/favourite',
    title: 'Favourite'
  },
  {
    to: '/search',
    title: 'Search'
  }
];

const NavMenu = () => {
  const { setMenuOpen, isMenuOpen } = useNavMenu();
  return (
    <div className={styles.navmenu} style={{ transform: isMenuOpen ? 'translateY(0)' : '' }}>
      <div className={styles.navmenuLinks}>
        {
          links.map(link => {
            return (
              <Link onClick={() => setMenuOpen(false)} key={link.to} to={link.to}>{link.title}</Link>
            );
          })
        }
      </div>
      <span onClick={() => setMenuOpen(false)} style={{ position: 'absolute', right: 40, top: 30, fontSize: '40px', cursor: 'pointer' }}>X</span>
    </div>
  );
};

export default NavMenu;