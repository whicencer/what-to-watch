export interface IMovieDetails {
  backdrop_path:         string;
  genres:                Genre[];
  id:                    number;
  overview:              string;
  poster_path:           string;
  title:                 string;
  release_date:          Date;
  vote_average:          number;
}

export interface Genre {
  id:   number;
  name: string;
}

export interface IMovieCast {
  adult:                boolean;
  gender:               number;
  id:                   number;
  known_for_department: string;
  name:                 string;
  original_name:        string;
  popularity:           number;
  profile_path:         string;
  cast_id:              number;
  character:            string;
  credit_id:            string;
  order:                number;
}
