import { EPISODE_ACCESS_URL, SUBTITLES_URL } from "~/constants";

type EpisodeDetails = {
  stream: string;
  subtitles?: string;
};

export async function getEpisode(id: string): Promise<EpisodeDetails | undefined> {
  const accessRes = await fetch(EPISODE_ACCESS_URL + id);
  const accessData = await accessRes.json();

  const stream =
    accessData.streams["1080"] ?? accessData.streams["720"] ?? accessData.streams["480"];

  const subsLocation = accessData.subtitles.find((sub: any) => sub.language === "English")?.file;
  const subtitles = subsLocation ? SUBTITLES_URL + subsLocation : undefined;

  return { stream, subtitles };
}
