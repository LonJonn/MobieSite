/* eslint-disable no-eval */

import type { Adapter } from ".";

const BASE_URL = new URL("https://playerwatchlm18.xyz");

const COOKIE = "PHPSESSID=soqfca8i0572e5j4q8atldovt7;";

/** In-memory cache to store access hash */

declare global {
  var _episodeCache: { [key: string]: { hash: string; expires: string } };
}

global._episodeCache ??= {};

const lookmovieAdapter: Adapter = {
  async search(query) {
    const movieUrl = new URL("/api/v1/movies/do-search", BASE_URL);
    movieUrl.searchParams.set("q", query);

    const showUrl = new URL("/api/v1/shows/do-search", BASE_URL);
    showUrl.searchParams.set("q", query);

    const [movieData, showData] = await Promise.all([
      fetch(movieUrl).then((res) => res.json()),
      fetch(showUrl).then((res) => res.json()),
    ]);

    return [
      ...movieData.result.map((r: any) => ({ ...r, type: "movie" })),
      ...showData.result.map((r: any) => ({ ...r, type: "show" })),
    ].map((r: any) => ({
      type: r.type,
      id: r.slug,
      title: r.title,
      imageUrl: r.backdrop,
      releaseDate: r.release_date,
      rating: r.imdb_rating,
    }));
  },

  async getMovieStream(id) {
    /** Get movie details so we can construct the access request */

    const detailsUrl = new URL(`/movies/play/${id}`, BASE_URL);

    const detailsMarkup = await fetch(detailsUrl, {
      headers: {
        cookie: COOKIE,
      },
    }).then((res) => res.text());

    const DETAILS_REGEX = /window\['movie_storage'\] = ({[^}]*})/;
    const detailsCaptureGroup = DETAILS_REGEX.exec(detailsMarkup)?.[1];
    const details = detailsCaptureGroup ? eval(`[${detailsCaptureGroup}]`)[0] : undefined;

    if (!details) {
      return undefined;
    }

    const { id_movie, hash, expires } = details;

    /** Get movie stream urls using the details */

    const accessUrl = new URL("/api/v1/security/movie-access", BASE_URL);
    accessUrl.searchParams.set("id_movie", id_movie);
    accessUrl.searchParams.set("hash", hash);
    accessUrl.searchParams.set("expires", expires);

    const accessData = await fetch(accessUrl).then((res) => res.json());

    const videoUrl =
      accessData.streams["1080p"] ?? accessData.streams["720p"] ?? accessData.streams["480p"];

    const subsLocation = accessData.subtitles.find((sub: any) => sub.language === "English")?.file;
    const subtitlesUrl = subsLocation ? new URL(subsLocation, BASE_URL).toString() : undefined;

    return { videoUrl, subtitlesUrl };
  },

  async getShowEpisodes(id) {
    /** Get show details so we can construct the access request */

    const detailsUrl = new URL(`/shows/play/${id}`, BASE_URL);

    const detailsMarkup = await fetch(detailsUrl, {
      headers: { cookie: COOKIE },
    }).then((res) => res.text());

    const DETAILS_REGEX = /window\['show_storage'\] = ({[^\]]*\])/;
    const detailsCaptureGroup = DETAILS_REGEX.exec(detailsMarkup)?.[1];
    const details = detailsCaptureGroup ? eval(`[${detailsCaptureGroup}}]`)[0] : undefined;

    if (!details || !details.seasons) {
      return [];
    }

    const { hash, expires, seasons } = details;

    seasons.forEach((s: any) => {
      global._episodeCache[s.id_episode] = { hash, expires };
    });

    return seasons.map((s: any) => ({
      id: s.id_episode,
      season: s.season,
      episode: s.episode,
      title: s.title || `Season ${s.season} - Episode ${s.episode}`,
    }));
  },

  async getEpisodeStream(id) {
    // Check for episode hash in cache
    const details = global._episodeCache[id];

    if (!details) {
      return undefined;
    }

    const { hash, expires } = details;

    /** Get episode stream urls using the details */

    const accessUrl = new URL("/api/v1/security/episode-access", BASE_URL);
    accessUrl.searchParams.set("id_episode", id);
    accessUrl.searchParams.set("hash", hash);
    accessUrl.searchParams.set("expires", expires);

    const accessData = await fetch(accessUrl).then((res) => res.json());

    const videoUrl =
      accessData.streams["1080"] ?? accessData.streams["720"] ?? accessData.streams["480"];

    const subsLocation = accessData.subtitles.find((sub: any) => sub.language === "English")?.file;
    const subtitlesUrl = subsLocation ? new URL(subsLocation, BASE_URL).toString() : undefined;

    return { videoUrl, subtitlesUrl };
  },
};

export default lookmovieAdapter;
