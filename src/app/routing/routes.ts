import Home from '../../pages/Home';
import TopMovies from '../../pages/TopMovies';
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
];