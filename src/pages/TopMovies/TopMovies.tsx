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
    <div style={{ maxWidth: '920px', margin: '0 auto' }}>
      <h2 style={{ margin: 10 }}>Top rated</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          movies.map(movie => {
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