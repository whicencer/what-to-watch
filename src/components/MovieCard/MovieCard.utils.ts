export const getMovieRateColor = (vote: number): string => {
  if (vote < 4) {
    return 'badRate';
  } else if (vote < 7) {
    return 'normalRate';
  } else {
    return 'goodRate';
  }
};