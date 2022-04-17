import { Container, Select, Stack } from "@mantine/core";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import plyrStyles from "plyr/dist/plyr.css";
import React from "react";
import { VideoPlayer } from "~/components/VideoPlayer";
import { getShow } from "~/helpers/get-show.helper";
import type { EpisodeDetails } from "~/types";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: plyrStyles }];
};

type LoaderData = {
  episodes: EpisodeDetails[];
};

export const loader: LoaderFunction = async ({ params }) => {
  const show = await getShow(params.slug as string);

  if (!show) {
    throw new Response("Not Found", { status: 404 });
  }

  return json<LoaderData>(show);
};

export default function Search() {
  const { episodes } = useLoaderData<LoaderData>();

  /** Episodes */

  const episodeOptions = episodes.map((episode) => ({
    value: episode.id_episode.toString(),
    label: `Season ${episode.season} - Episode ${episode.episode}`,
    group: `Season ${episode.season}`,
  }));

  const selectedEpisode = useFetcher<{ stream: string; subtitles?: string }>();
  const handleEpisodeSelect = React.useCallback(
    (value: string) => selectedEpisode.submit({ id: value }, { action: "/show/episode" }),
    [selectedEpisode]
  );

  return (
    <Container mb={96}>
      <Stack>
        <Select
          data={episodeOptions}
          placeholder="Select an episode"
          disabled={selectedEpisode.state === "submitting"}
          onChange={handleEpisodeSelect}
          sx={(theme) => ({
            [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
              alignSelf: "start",
            },
          })}
        />

        <VideoPlayer
          src={selectedEpisode.data?.stream}
          subtitles={selectedEpisode.data?.subtitles}
        />
      </Stack>
    </Container>
  );
}
