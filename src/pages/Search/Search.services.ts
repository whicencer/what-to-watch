export const fetchQuery = (query: string) => {
  return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_IMDB_TOKEN}&query=${query}&language=en-US&page=1&include_adult=true`)
     .then(response => response.json());
};