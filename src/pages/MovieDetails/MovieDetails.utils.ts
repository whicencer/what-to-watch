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

export const addFavouriteHandler = (addFavourite: (movie: IMovie) => void, movie: IMovieDetails) => {
  const { id, title, vote_average, release_date, overview, poster_path, backdrop_path } = movie;
  const favouriteMovie = {
    title,
    id,
    release_date,
    overview,
    vote_average,
    poster_path,
    backdrop_path
  };
  addFavourite(favouriteMovie);

  alert('Movie has been added to favourites')
};