import React from 'react';
import { IMovie } from '../../app/models/IMovie';
import styles from './style.module.scss';


// make hover effect menu
const MovieCard: React.FC<{movie: IMovie}> = ({ movie }) => {
  const { poster_path, title } = movie;
  return (
    <div className={styles.movie}>
      <img src={process.env.REACT_APP_IMDB_IMAGES+poster_path} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default MovieCard;