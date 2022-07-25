export interface SearchResult {
  type: "movie" | "show";
  id: string;
  title: string;
  imageUrl: string;
  releaseDate: string;
  rating: string;
}

interface Episode {
  id: string;
  season: string;
  episode: string;
  title: string;
}

export interface Adapter {
  search(query: string): Promise<SearchResult[]>;
  getMovieStream(id: string): Promise<{ videoUrl: string; subtitlesUrl?: string } | undefined>;
  getShowEpisodes(id: string): Promise<Episode[]>;
  getEpisodeStream(id: string): Promise<{ videoUrl: string; subtitlesUrl?: string } | undefined>;
}

/** Re-exported adapter singleton */

export { default } from "./lookmovie";
