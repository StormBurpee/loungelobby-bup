export class MyShow {
  myshow: boolean;
}

export class Episodes {
  img_path: string;
  seasons: object[];
}

export class EpisodeLink {
  link: string;
}

export class Show {
  backdrop_path: string;
  created_by: object[];
  episode_run_time: number[];
  first_air_date: string;
  genres: object[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  name: string;
  networks: object[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: object[];
  seasons: object[];
  status: string;
  type: string;
  vote_average: number;
  vote_count: number;
}
