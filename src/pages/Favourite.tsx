import React from 'react';
import {useFavouriteMovies} from "../app/store/favouriteMovies";
import ContentContainer from "../components/shared/ContentContainer";
import MovieCard from "../components/MovieCard/MovieCard";

const Favourite = () => {
  const { favouriteMovies } = useFavouriteMovies();
  return (
    <ContentContainer>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          favouriteMovies.map(favouriteMovie => {
            return (
               <MovieCard key={favouriteMovie.id} movie={favouriteMovie} />
            );
          })
        }
      </div>
    </ContentContainer>
  );
};

export default Favourite;