import { Container } from "@mantine/core";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import plyrStyles from "plyr/dist/plyr.css";
import { VideoPlayer } from "~/components/VideoPlayer";
import { MOVIE_ACCESS_URL, MOVIE_DETAILS_URL, SUBTITLES_URL } from "~/constants";
import { extractMovieDetails } from "~/helpers/extract-movie-details.helper";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: plyrStyles }];
};

const LOADER_HEADERS = {
  "Cache-Control": "public, max-age=3600",
};

type LoaderData = {
  stream: string;
  subtitles?: string;
};

export const loader: LoaderFunction = async ({ params }) => {
  const slug = params.slug as string;

  // Get movie details
  const detailsRes = await fetch(MOVIE_DETAILS_URL + slug);
  const detailsMarkup = await detailsRes.text();

  const movie = extractMovieDetails(detailsMarkup);

  if (!movie.id) {
    return new Response("", { status: 404 });
  }

  // Get streams + subs
  const accessRes = await fetch(MOVIE_ACCESS_URL + movie.id);
  const accessData = await accessRes.json();

  // Just return highest quality stream
  const stream =
    accessData.streams["1080p"] ?? accessData.streams["720p"] ?? accessData.streams["480p"];

  // Find english subs
  const subsLocation = accessData.subtitles.find((sub: any) => sub.language === "English")?.file;
  const subtitles = subsLocation ? SUBTITLES_URL + subsLocation : undefined;

  return json<LoaderData>({ stream, subtitles }, { headers: LOADER_HEADERS });
};

export default function Search() {
  const { stream, subtitles } = useLoaderData<LoaderData>();

  return (
    <Container mb={96}>
      <VideoPlayer src={stream} subtitles={subtitles} />
    </Container>
  );
}
