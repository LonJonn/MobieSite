import type { LoaderArgs } from "@remix-run/node";
import {
  Badge,
  Button,
  Card,
  Center,
  Container,
  Group,
  Highlight,
  Image,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { json } from "@remix-run/node";
import { Form, Link, useLoaderData, useTransition, useSearchParams } from "@remix-run/react";
import { formatDate } from "~/utils";
import adapter, { type SearchResult } from "~/adapters";

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url);
  const search = url.searchParams.get("q");

  if (!search) {
    return json<SearchResult[]>([]);
  }

  const movieResults = await adapter.search(search);

  return json(movieResults);
};

export default function Search() {
  const results = useLoaderData<typeof loader>();
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

type ResultsProps = {
  results: SearchResult[];
};

function Results({ results }: ResultsProps) {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";

  if (!query) {
    return (
      <Center>
        <Text size="xl">Look for a mobie to watch! 🍿</Text>
      </Center>
    );
  }

  if (results.length === 0) {
    return (
      <Center>
        <Text weight="bold" size="lg">
          No results 😿
        </Text>
      </Center>
    );
  }

  return (
    <SimpleGrid
      cols={4}
      spacing="lg"
      breakpoints={[
        { maxWidth: "md", cols: 3, spacing: "lg" },
        { maxWidth: "sm", cols: 2, spacing: "md" },
        { maxWidth: "xs", cols: 1, spacing: "sm" },
      ]}
    >
      {results.map((result) => (
        <ResultCard key={result.id} result={result} />
      ))}
    </SimpleGrid>
  );
}

type CardProps = {
  result: SearchResult;
};

function ResultCard({ result: { id, type, title, imageUrl, releaseDate, rating } }: CardProps) {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";

  return (
    <Card radius="md" shadow="sm" sx={{ display: "flex", flexDirection: "column" }}>
      <Card.Section>
        <Image src={imageUrl} height={160} alt={title} />
      </Card.Section>

      <Stack spacing={8} mt="md" sx={{ flexGrow: 1 }}>
        <Highlight highlight={query} weight={500} mb="auto">
          {title}
        </Highlight>

        <Group position="apart">
          <Text size="sm" color="dimmed" style={{ lineHeight: 1.5 }}>
            {releaseDate && formatDate(releaseDate)}
          </Text>

          <Badge color="blue" variant="light">
            {rating}
          </Badge>
        </Group>

        <Button component={Link} to={`/${type}/${id}`} variant="light" fullWidth>
          Play
        </Button>
      </Stack>
    </Card>
  );
}
