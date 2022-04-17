import { Badge, Button, Card, Group, Highlight, Image, Stack, Text } from "@mantine/core";
import { Link, useSearchParams } from "@remix-run/react";
import { formatDate } from "~/helpers/date-formatter.helper";

export type CardProps = {
  type: "movie" | "show";
  slug: string;
  title: string;
  imageUrl: string;
  releaseDate: string;
  rating: string;
};

export function ResultCard({ type, slug, title, imageUrl, releaseDate, rating }: CardProps) {
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

        <Button component={Link} to={`/${type}/${slug}`} variant="light" fullWidth>
          Play
        </Button>
      </Stack>
    </Card>
  );
}
