import { Container } from "@mantine/core";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import plyrStyles from "plyr/dist/plyr.css";
import { VideoPlayer } from "~/components/VideoPlayer";
import { getMovie } from "~/helpers/get-movie.helper";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: plyrStyles }];
};

type LoaderData = {
  stream: string;
  subtitles?: string;
};

export const loader: LoaderFunction = async ({ params }) => {
  const movie = await getMovie(params.slug as string);

  if (!movie) {
    throw new Response("Not Found", { status: 404 });
  }

  return json<LoaderData>(movie);
};

export default function Search() {
  const { stream, subtitles } = useLoaderData<LoaderData>();

  return (
    <Container mb={96}>
      <VideoPlayer src={stream} subtitles={subtitles} />
    </Container>
  );
}
