import { useEffect, useState } from 'react';
import { useTopMovies } from '../../app/store/topMovies';
import MovieCard from '../../components/MovieCard/MovieCard';
import Pagination from '../../components/Pagination/Pagination';
import ContentContainer from "../../components/shared/ContentContainer";

const TopMovies = () => {
  const [ currentPage, setCurrentPage ] = useState(1);
  const { fetchTopMovies, movies, totalPages } = useTopMovies();

  useEffect(() => {
    fetchTopMovies(currentPage);
  }, [currentPage, fetchTopMovies]);
  
  return (
    <ContentContainer>
      <h2>Top rated</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          movies.map(movie => {
            return (
              <MovieCard key={movie.id} movie={movie} />
            );
          })
        }
      </div>
      <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages} />
    </ContentContainer>
  );
};

export default TopMovies;