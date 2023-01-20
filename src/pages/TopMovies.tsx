import { useEffect, useState } from 'react';
import { useTopMovies } from '../app/store/topMovies';

const TopMovies = () => {
  const { movies, fetchTopMovies } = useTopMovies();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchTopMovies(currentPage);
  }, [currentPage, fetchTopMovies]);

  return (
    <div>
      <h3>Top rated</h3>
      <ul>
        {
          movies.map(movie => {
            return <li key={movie.id}>{movie.title}</li>
          })
        }
      </ul>
      <button onClick={() => setCurrentPage(prev => prev+1)}>next page</button>
    </div>
  );
};

export default TopMovies;