import Favourite from '../../pages/Favourite';
import Home from '../../pages/Home/Home';
import TopMovies from '../../pages/TopMovies/TopMovies';
import { RouteComponent } from './router-typings';

export const publicRoutes: RouteComponent[] = [
  {
    key: 'home',
    component: Home,
    path: '/'
  },
  {
    key: 'top',
    component: TopMovies,
    path: '/top'
  },
  {
    key: 'favourite',
    component: Favourite,
    path: '/favourite'
  },
];