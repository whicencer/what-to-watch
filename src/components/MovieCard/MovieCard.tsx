import React from 'react';
import { IMovie } from '../../app/models/IMovie';
import styles from './style.module.scss';


// make hover effect menu rate color (green, red, yellow)
const MovieCard: React.FC<{movie: IMovie}> = ({ movie }) => {
  const { poster_path, title, vote_average, release_date, overview } = movie;
  const releaseYear = release_date.toString().substring(0,4);

  return (
    <div className={styles.movie}>
      <div className={styles.movieHover}>
        <h2>{vote_average}</h2>
        <h5>{releaseYear}</h5>
        <p>
          {overview.substring(0,100)}...
          <br />
          <span style={{ fontWeight: '700', paddingTop: '20px' }}>Read more</span>
        </p>
      </div>
      <img src={process.env.REACT_APP_IMDB_IMAGES+poster_path} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default MovieCard;