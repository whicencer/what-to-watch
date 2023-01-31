import Favourite from '../../pages/Favourite';
import Home from '../../pages/Home/Home';
import TopMovies from '../../pages/TopMovies/TopMovies';
import { RouteComponent } from './router-typings';
import MovieDetails from '../../pages/MovieDetails/MovieDetails';
import Search from '../../pages/Search/Search';

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
  {
    key: 'movieDetail',
    component: MovieDetails,
    path: '/movie/:movieId'
  },
  {
    key: 'search',
    component: Search,
    path: '/search'
  }
];