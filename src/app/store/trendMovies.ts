import { create } from 'zustand';
import { IMovie } from '../models/IMovie';

interface IState {
  movies: IMovie[];
  isLoading: boolean;
  fetchTrendMovies: () => void;
}

export const useTrendMovies = create<IState>()((set) => ({
  movies: [],
  isLoading: false,
  fetchTrendMovies: async () => {
    set({ isLoading: true });
    const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_IMDB_TOKEN}`);

    try {
      const data = await res.json();

      set({ movies: data.results });
    } catch (error) {
      throw new Error('Some error occured on getting movies');
    } finally {
      set({ isLoading: false });
    }
  }
}));