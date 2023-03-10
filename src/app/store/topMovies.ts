import { create } from 'zustand';
import { IMovie } from '../models/IMovie';

interface State {
  movies: IMovie[],
  isLoading: boolean;
  totalPages: number;
  fetchTopMovies: (page: number) => void;
}

export const useTopMovies = create<State>()((set) => ({
  movies: [],
  isLoading: false,
  totalPages: 0,
  fetchTopMovies: async (page: number) => {
    set({ isLoading: true });
    const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_IMDB_TOKEN}&language=en-US&page=${page}`);
  
    try {
      const data = await res.json();
      set({ movies: data.results, totalPages: data.total_pages })
    } catch (error) {
      throw new Error('Some error occured on getting movies');
    } finally {
      set({ isLoading: false });
    }
  }
}));