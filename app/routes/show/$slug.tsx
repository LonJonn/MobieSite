/* eslint-disable no-eval */

import { Container, Select, Stack } from "@mantine/core";
import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import plyrStyles from "plyr/dist/plyr.css";
import React from "react";
import { VideoPlayer } from "~/components/VideoPlayer";
import { SHOW_DETAILS_URL } from "~/constants";

type EpisodeDetails = {
  id_episode: number;
  season: string;
  episode: string;
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: plyrStyles }];
};

export const loader = async ({ params }: LoaderArgs) => {
  const res = await fetch(SHOW_DETAILS_URL + params.slug);
  const markup = await res.text();

  const SHOW_ID_REGEX = /id_show:\s(\d*),/g;
  const iDCaptureGroup = SHOW_ID_REGEX.exec(markup)?.[1];
  const id = iDCaptureGroup ? Number(iDCaptureGroup) : undefined;

  const SEASONS_REGEX = /seasons:\s(\[[^\]]*\])/g;
  const seasonsCaptureGroup = SEASONS_REGEX.exec(markup)?.[1];
  const episodes: EpisodeDetails[] = seasonsCaptureGroup ? eval(seasonsCaptureGroup) : undefined;

  if (!id || !episodes) {
    throw new Response("Not Found", { status: 404 });
  }

  return json(episodes);
};

export default function Search() {
  const episodes = useLoaderData<typeof loader>();

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
