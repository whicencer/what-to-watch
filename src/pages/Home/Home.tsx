import React, { useEffect } from 'react';
import { useTrendMovies } from '../../app/store/trendMovies';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import MovieSlide from '../../components/MovieSlide/MovieSlide';

const Home = () => {
  const { fetchTrendMovies, movies } = useTrendMovies();

  useEffect(() => {
    fetchTrendMovies();
  }, [fetchTrendMovies]);

  SwiperCore.use([Autoplay]);

  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{delay: 3000}}
        loop={true}
      >
        {
          movies.map(movie => {
            return (
              <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }} key={movie.id}>
                <MovieSlide movie={movie} />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  );
};

export default Home;