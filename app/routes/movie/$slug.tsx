import { Container } from "@mantine/core";
import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import plyrStyles from "plyr/dist/plyr.css";
import { VideoPlayer } from "~/components/VideoPlayer";
import { MOVIE_ACCESS_URL, MOVIE_DETAILS_URL, SUBTITLES_URL } from "~/constants";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: plyrStyles }];
};

export const loader = async ({ params }: LoaderArgs) => {
  // Get movie details
  const res = await fetch(MOVIE_DETAILS_URL + params.slug);
  const markup = await res.text();

  const MOVIE_ID_REGEX = /id_movie:\s(\d*),/g;
  const iDCaptureGroup = MOVIE_ID_REGEX.exec(markup)?.[1];
  const id = iDCaptureGroup ? Number(iDCaptureGroup) : undefined;

  if (!id) {
    throw new Response("Not Found", { status: 404 });
  }

  // Get streams + subs
  const accessRes = await fetch(MOVIE_ACCESS_URL + id);
  const accessData = await accessRes.json();

  // Just return highest quality stream
  const stream =
    accessData.streams["1080p"] ?? accessData.streams["720p"] ?? accessData.streams["480p"];

  // Find english subs
  const subsLocation = accessData.subtitles.find((sub: any) => sub.language === "English")?.file;
  const subtitles = subsLocation ? SUBTITLES_URL + subsLocation : undefined;

  return json({ id, stream, subtitles });
};

export default function Search() {
  const { stream, subtitles } = useLoaderData<typeof loader>();

  return (
    <Container mb={96}>
      <VideoPlayer src={stream} subtitles={subtitles} />
    </Container>
  );
}
