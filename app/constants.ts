const BASE_URL = "https://lookmovie2.to";

export const SUBTITLES_URL = BASE_URL;

export const MOVIE_SEARCH_URL = `${BASE_URL}/api/v1/movies/do-search?q=`;
export const MOVIE_DETAILS_URL = `${BASE_URL}/movies/view/`;
export const MOVIE_ACCESS_URL = `${BASE_URL}/api/v1/security/movie-access?id_movie=`;

export const SHOW_SEARCH_URL = `${BASE_URL}/api/v1/shows/do-search/?q=`;
export const SHOW_DETAILS_URL = `${BASE_URL}/shows/play/`;
export const EPISODE_ACCESS_URL = `${BASE_URL}/api/v1/security/episode-access?id_episode=`;
