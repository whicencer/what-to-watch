import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import {IMovie} from "../models/IMovie";

interface IState {
  favouriteMovies: IMovie[];
  addFavourite: (movie: IMovie) => void;
  removeFavourite: (movieId: number) => void;
}

export const useFavouriteMovies = create<IState>()(persist(set => ({
  favouriteMovies: [],
  addFavourite: (movie) => {
    set(state => {
      return { favouriteMovies: [...state.favouriteMovies, movie] };
    });
  },
  removeFavourite: (movieId) => {
    set(state => {
      return { favouriteMovies: state.favouriteMovies.filter(movie => movie.id !== movieId) };
    })
  }
}), { name: 'favourites-storage', storage: createJSONStorage(() => sessionStorage) }));