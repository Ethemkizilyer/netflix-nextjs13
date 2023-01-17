interface Movie {
  title?: string;
  backdrop_path?: string;
  id?: number;
  original_language?: string;
  original_name?: string;
  overview?: string;
  poster_path?: string;
  media_type?: string;
  genre_ids?: number[];
  popularity?: number;
  release_date?: string;
  videos?: any;
  vote_average?: number;
  vote_count?: number;
  first_ait_date?: string;
  name?: string;
  origin_country?: string[];
}

interface Element {
    type:
    | "Bloopers"
    | "Featurette"
    | "Behind the Scenes"
    | "Clip"
    | "Trailer"
    | "Teaser"
}