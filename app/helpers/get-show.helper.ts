/* eslint-disable no-eval */

import { SHOW_DETAILS_URL } from "~/constants";
import type { EpisodeDetails } from "~/types";

const SHOW_ID_REGEX = /id_show:\s(\d*),/g;
const SEASONS_REGEX = /seasons:\s(\[[^\]]*\])/g;

type ShowDetails = {
  id?: number;
  episodes: EpisodeDetails[];
};

export async function getShow(slug: string): Promise<ShowDetails | undefined> {
  const res = await fetch(SHOW_DETAILS_URL + slug);
  const markup = await res.text();

  const iDCaptureGroup = SHOW_ID_REGEX.exec(markup)?.[1];
  const id = iDCaptureGroup ? Number(iDCaptureGroup) : undefined;

  const seasonsCaptureGroup = SEASONS_REGEX.exec(markup)?.[1];
  const episodes = seasonsCaptureGroup ? eval(seasonsCaptureGroup) : undefined;

  if (!id || !episodes) {
    return undefined;
  }

  return { id, episodes };
}
