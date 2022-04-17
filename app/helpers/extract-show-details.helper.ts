const SHOW_ID_REGEX = /id_show:\s(\d*),/g;
const SEASONS_REGEX = /seasons:\s(\[[^\]]*\])/g;

export function extractShowDetails(markup: string) {
  const iDCaptureGroup = SHOW_ID_REGEX.exec(markup)?.[1];
  const id = iDCaptureGroup ? Number(iDCaptureGroup) : undefined;

  const seasonsCaptureGroup = SEASONS_REGEX.exec(markup)?.[1];
  // eslint-disable-next-line no-eval
  const seasons = seasonsCaptureGroup ? eval(seasonsCaptureGroup) : undefined;

  return { id, seasons };
}
