import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getEpisode } from "~/helpers/get-episode.helper";

type LoaderData = {
  stream: string;
  subtitles?: string;
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const id = url.searchParams.get("id") as string;

  const episode = await getEpisode(id);

  if (!episode) {
    throw new Response("Not Found", { status: 404 });
  }

  return json<LoaderData>(episode);
};
