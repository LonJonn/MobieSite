import { Button, Container, Group, TextInput, Title } from "@mantine/core";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useLoaderData, useTransition } from "@remix-run/react";
import { Results } from "~/components/Results/Results";
import { MOVIE_SEARCH_URL } from "~/constants";
import type { SearchResult } from "~/types";

const LOADER_HEADERS = {
  "Cache-Control": "public, max-age=3600",
};

type LoaderData = {
  results: SearchResult[];
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get("q");

  if (!search) {
    return json({ results: [] });
  }

  const res = await fetch(MOVIE_SEARCH_URL + search);
  const data = await res.json();

  return json<LoaderData>({ results: data.result }, { headers: LOADER_HEADERS });
};

export default function Search() {
  const { results } = useLoaderData<LoaderData>();
  const { state } = useTransition();

  return (
    <Container mb={96}>
      <Title align="center">Search for Mobie</Title>

      <Form action="." method="get">
        <fieldset disabled={state === "submitting"} style={{ border: "none" }}>
          <Group my="lg" mx="auto" sx={{ width: "100%", maxWidth: 500 }}>
            <TextInput name="q" placeholder="Search" sx={{ flexGrow: 1 }} />
            <Button type="submit">Submit</Button>
          </Group>
        </fieldset>
      </Form>

      <Results results={results} />
    </Container>
  );
}
