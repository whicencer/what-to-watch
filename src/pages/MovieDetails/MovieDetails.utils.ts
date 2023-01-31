import {IMovie} from "../../app/models/IMovie";
import {IMovieDetails} from "../../app/models/IMovieDetails";

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