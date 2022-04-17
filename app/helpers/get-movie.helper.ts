import { MOVIE_ACCESS_URL, MOVIE_DETAILS_URL, SUBTITLES_URL } from "~/constants";

const MOVIE_ID_REGEX = /id_movie:\s(\d*),/g;

type MovieDetails = {
  id: number;
  stream: string;
  subtitles?: string;
};

export async function getMovie(slug: string): Promise<MovieDetails | undefined> {
  // Get movie details
  const res = await fetch(MOVIE_DETAILS_URL + slug);
  const markup = await res.text();

  const iDCaptureGroup = MOVIE_ID_REGEX.exec(markup)?.[1];
  const id = iDCaptureGroup ? Number(iDCaptureGroup) : undefined;

  if (!id) {
    return undefined;
  }

  // Get streams + subs
  const accessRes = await fetch(MOVIE_ACCESS_URL + id);
  const accessData = await accessRes.json();

  // Just return highest quality stream
  const stream =
    accessData.streams["1080p"] ?? accessData.streams["720p"] ?? accessData.streams["480p"];

  // Find english subs
  const subsLocation = accessData.subtitles.find((sub: any) => sub.language === "English")?.file;
  const subtitles = subsLocation ? SUBTITLES_URL + subsLocation : undefined;

  return { id, stream, subtitles };
}
