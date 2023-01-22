import { useEffect, useState } from 'react';
import { useTopMovies } from '../../app/store/topMovies';
import MovieCard from '../../components/MovieCard/MovieCard';

const TopMovies = () => {
  const [ currentPage ] = useState(1);
  const { fetchTopMovies, movies } = useTopMovies();

  useEffect(() => {
    fetchTopMovies(currentPage);
  }, [currentPage, fetchTopMovies]);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Top rated</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {
          movies.filter((_, id) => id <= 4).map(movie => {
            return (
              <MovieCard key={movie.id} movie={movie} />
            );
          })
        }
      </div>
    </div>
  );
};

export default TopMovies;