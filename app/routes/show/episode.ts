import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { EPISODE_ACCESS_URL, SUBTITLES_URL } from "~/constants";

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url);
  const id = url.searchParams.get("id") as string;

  const accessRes = await fetch(EPISODE_ACCESS_URL + id);
  const accessData = await accessRes.json();

  const stream: string =
    accessData.streams["1080"] ?? accessData.streams["720"] ?? accessData.streams["480"];

  if (!stream) {
    throw new Response("No streams available for this episode.", { status: 404 });
  }

  const subsLocation = accessData.subtitles.find((sub: any) => sub.language === "English")?.file;
  const subtitles: string | undefined = subsLocation ? SUBTITLES_URL + subsLocation : undefined;

  return json({ stream, subtitles });
};
