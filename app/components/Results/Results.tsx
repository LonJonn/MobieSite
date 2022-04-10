import { Center, SimpleGrid, Text } from "@mantine/core";
import { useSearchParams } from "@remix-run/react";
import type { SearchResult } from "~/types";
import { ResultCard } from "../ResultCard";

export type ResultsProps = {
  results: SearchResult[];
};

export function Results({ results }: ResultsProps) {
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
        <ResultCard
          key={result.slug}
          slug={result.slug}
          title={result.title}
          imageUrl={result.backdrop}
          releaseDate={result.release_date}
          rating={result.imdb_rating}
        />
      ))}
    </SimpleGrid>
  );
}
