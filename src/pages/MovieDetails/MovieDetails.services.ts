import {IMovieCast, IMovieDetails} from "../../app/models/IMovieDetails";
import {IMovie} from "../../app/models/IMovie";

export const fetchMovieDetails = (movieId: string | undefined): Promise<IMovieDetails> => {
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_IMDB_TOKEN}&language=en-US`)
     .then(response => response.json());
};

export const fetchMovieCast = (movieId: string | undefined): Promise<any> => {
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_IMDB_TOKEN}&language=en-US`)
     .then(response => response.json());
};