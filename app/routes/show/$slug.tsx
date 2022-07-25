/* eslint-disable no-eval */

import { Container, Select, Stack } from "@mantine/core";
import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import plyrStyles from "plyr/dist/plyr.css";
import React from "react";
import adapter from "~/adapters";
import { VideoPlayer } from "~/components/VideoPlayer";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: plyrStyles }];
};

export const loader = async ({ params }: LoaderArgs) => {
  const episodes = await adapter.getShowEpisodes(params.slug as string);
  return json(episodes);
};

export default function Search() {
  const episodes = useLoaderData<typeof loader>();

  const episodeOptions = episodes.map((episode) => ({
    value: episode.id,
    label: episode.title,
    group: `Season ${episode.season}`,
  }));

  const selectedEpisode = useFetcher<{ videoUrl: string; subtitlesUrl?: string }>();
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
          src={selectedEpisode.data?.videoUrl}
          subtitles={selectedEpisode.data?.subtitlesUrl}
        />
      </Stack>
    </Container>
  );
}
