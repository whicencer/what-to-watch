import styles from "./styles.module.scss";
import {FC} from "react";
import {IMovieCast, IMovieDetails} from "../../app/models/IMovieDetails";
import {useFavouriteMovies} from "../../app/store/favouriteMovies";
import Button from "../../components/shared/Button/Button";
import {addFavouriteHandler} from "./MovieDetails.utils";

const MovieDetailsInfo: FC<{ movie: IMovieDetails | null, cast: IMovieCast[] | null }> = ({ movie, cast }) => {
  const { addFavourite, removeFavourite, favouriteMovies } = useFavouriteMovies();
  if (movie === null) {
    return <div>Movie is null</div>;
  }

  const removeFavouriteHandler = () => {
    removeFavourite(movie.id);
    alert('Movie has been removed from favourites');
  };
  const addFavouriteClick = () => addFavouriteHandler(addFavourite, movie);

  const isMovieFavourite = !!favouriteMovies.filter(favourite => favourite.id === movie.id).length;
  return (
     <div className={styles.movieDetailsContent}>
       <h2 className={styles.movieTitle}>{movie?.title}</h2>
       <Button
          style={{ padding: '7px 20px', fontSize: '16px', marginTop: 10 }}
          onClick={ isMovieFavourite ? removeFavouriteHandler :  addFavouriteClick}
       >{ isMovieFavourite ? 'Remove favourite' : 'Add favourite' }</Button>
       <div className={styles.movieGenres}>
         {
           movie.genres.map(genre => {
             return (
                <div key={genre?.id} className={styles.genreTag}>{ genre.name }</div>
             );
           })
         }
       </div>
       <p style={{ fontSize: '15px' }}>{movie.overview}</p>
       <div className={styles.castBlock}>
         <h2>Cast</h2>
         <div className={styles.castList}>
           {
             cast?.map((actor, id) => {
               if (id < 4) {
                 return (
                    <div className={styles.actor} key={actor.id}>
                      <img src={`${process.env.REACT_APP_IMDB_IMAGES}${actor.profile_path}`} alt={actor.name} />
                      <p>{actor.name}</p>
                    </div>
                 );
               }
             })
           }
         </div>
       </div>
     </div>
  );
};

export default MovieDetailsInfo;