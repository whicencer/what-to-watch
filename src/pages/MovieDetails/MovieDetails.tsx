import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import {IMovieCast, IMovieDetails} from "../../app/models/IMovieDetails";
import styles from './styles.module.scss';
import {fetchMovieCast, fetchMovieDetails} from "./MovieDetails.utils";
import MovieDetailsInfo from "./MovieDetailsInfo";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<IMovieDetails | null>(null);
  const [cast, setCast] = useState<IMovieCast[] | null>(null);

  useEffect(() => {
    fetchMovieDetails(movieId).then(data => setMovie(data));
    fetchMovieCast(movieId).then(data => setCast(data.cast));
  }, []);

  return (
     <div className={styles.movieDetails}>
       <MovieDetailsInfo movie={movie} cast={cast} />
       <img className={styles.moviePoster} src={`${process.env.REACT_APP_IMDB_IMAGES}${movie?.poster_path || movie?.backdrop_path}`} alt={movie?.title} />
     </div>
  );
};

export default MovieDetails;