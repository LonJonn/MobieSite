const MOVIE_ID_REGEX = /id_movie:\s(\d*),/g;

export function extractMovieDetails(markup: string) {
  const iDCaptureGroup = MOVIE_ID_REGEX.exec(markup)?.[1];
  const id = iDCaptureGroup ? Number(iDCaptureGroup) : undefined;

  return { id };
}
