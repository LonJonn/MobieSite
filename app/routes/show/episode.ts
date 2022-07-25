import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import adapter from "~/adapters";

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url);
  const id = url.searchParams.get("id") as string;

  const stream = await adapter.getEpisodeStream(id);
  if (!stream) {
    throw new Response("No streams available for this episode.", { status: 404 });
  }

  return json(stream);
};
