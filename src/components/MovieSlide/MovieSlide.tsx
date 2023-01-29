import React from 'react';
import { IMovie } from '../../app/models/IMovie';
import Button from '../shared/Button/Button';
import styles from './styles.module.scss';
import {Link} from "react-router-dom";

const MovieSlide: React.FC<{ movie: IMovie }> = ({ movie }) => {
  return (
    <div>
      <div className={styles.slide} style={{backgroundImage: `url(${process.env.REACT_APP_IMDB_IMAGES+movie.backdrop_path})`}}></div>
      <div className={styles.slideContent}>
        <div style={{ maxWidth: '600px' }}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <Link to={`/movie/${movie.id}`}>
            <Button style={{ marginTop: '40px' }}>See more</Button>
          </Link>
        </div>
        <img src={process.env.REACT_APP_IMDB_IMAGES+movie.poster_path} alt={movie.title} />
      </div>
    </div>
  );
};

export default MovieSlide;