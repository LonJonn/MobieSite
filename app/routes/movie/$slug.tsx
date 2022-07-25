import { Container } from "@mantine/core";
import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import plyrStyles from "plyr/dist/plyr.css";
import { VideoPlayer } from "~/components/VideoPlayer";

import adapter from "~/adapters";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: plyrStyles }];
};

export const loader = async ({ params }: LoaderArgs) => {
  const movie = await adapter.getMovieStream(params.slug as string);

  if (!movie) {
    throw new Response("Not Found", { status: 404 });
  }

  return json(movie);
};

export default function Search() {
  const { videoUrl, subtitlesUrl } = useLoaderData<typeof loader>();

  return (
    <Container mb={96}>
      <VideoPlayer src={videoUrl} subtitles={subtitlesUrl} />
    </Container>
  );
}
