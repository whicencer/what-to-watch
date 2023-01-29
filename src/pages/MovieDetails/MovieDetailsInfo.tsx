import styles from "./styles.module.scss";
import {FC} from "react";
import {IMovieCast, IMovieDetails} from "../../app/models/IMovieDetails";

export const MovieDetailsInfo: FC<{ movie: IMovieDetails | null, cast: IMovieCast[] | null }> = ({ movie, cast }) => {
  return (
     <div className={styles.movieDetailsContent}>
       <h2 className={styles.movieTitle}>{movie?.title}</h2>
       <div className={styles.movieGenres}>
         {
           movie?.genres.map(genre => {
             return (
                <div key={genre?.id} className={styles.genreTag}>{ genre.name }</div>
             );
           })
         }
       </div>
       <p style={{ fontSize: '15px' }}>{movie?.overview}</p>
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
}