const MOVIE_ID_REGEX = /id_movie:\s(\d*),/g;

export function extractMovieId(markup: string) {
  const iDCaptureGroup = MOVIE_ID_REGEX.exec(markup)?.[1];
  return iDCaptureGroup ? Number(iDCaptureGroup) : undefined;
}
