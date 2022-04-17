import { Container, Select, Stack } from "@mantine/core";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useSubmit, useTransition } from "@remix-run/react";
import plyrStyles from "plyr/dist/plyr.css";
import { VideoPlayer } from "~/components/VideoPlayer";
import { EPISODE_ACCESS_URL, SHOW_DETAILS_URL, SUBTITLES_URL } from "~/constants";
import { extractShowDetails } from "~/helpers/extract-show-details.helper";
import type { EpisodeDetails } from "~/types";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: plyrStyles }];
};

const LOADER_HEADERS = {
  "Cache-Control": "public, max-age=3600",
};

type LoaderData = {
  episodes: EpisodeDetails[];
  stream?: string;
  subtitles?: string;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const slug = params.slug as string;

  const url = new URL(request.url);
  const episodeId = url.searchParams.get("episode_id");

  const detailsRes = await fetch(SHOW_DETAILS_URL + slug);
  const detailsMarkup = await detailsRes.text();

  const show = extractShowDetails(detailsMarkup);

  if (!show.id || !show.seasons) {
    return new Response("", { status: 404 });
  }

  let stream: string | undefined = undefined;
  let subtitles: string | undefined = undefined;

  if (episodeId) {
    const accessRes = await fetch(EPISODE_ACCESS_URL + episodeId);
    const accessData = await accessRes.json();

    stream = accessData.streams["1080"] ?? accessData.streams["720"] ?? accessData.streams["480"];

    const subsLocation = accessData.subtitles.find((sub: any) => sub.language === "English")?.file;
    subtitles = subsLocation ? SUBTITLES_URL + subsLocation : undefined;
  }

  return json<LoaderData>(
    { episodes: show.seasons, stream, subtitles },
    { headers: LOADER_HEADERS }
  );
};

export default function Search() {
  const { episodes, stream, subtitles } = useLoaderData<LoaderData>();

  const submit = useSubmit();
  const transition = useTransition();

  return (
    <Container mb={96}>
      <Stack>
        <Select
          placeholder="Select an episode"
          disabled={transition.state === "submitting"}
          data={episodes.map((episode) => ({
            value: episode.id_episode.toString(),
            label: `Season ${episode.season} - Episode ${episode.episode}`,
            group: `Season ${episode.season}`,
          }))}
          onChange={(value) => {
            submit({ episode_id: value! });
          }}
          sx={(theme) => ({
            [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
              alignSelf: "start",
            },
          })}
        />

        <VideoPlayer src={stream} subtitles={subtitles} />
      </Stack>
    </Container>
  );
}
