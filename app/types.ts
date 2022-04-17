export interface SearchResult {
  type: "movie" | "show";
  imdb_rating: string;
  slug: string;
  year: string;
  flag_quality: string;
  release_date: string;
  title: string;
  backdrop: string;
  poster: string;
}

export interface EpisodeDetails {
  id_episode: number;
  season: string;
  episode: string;
}
