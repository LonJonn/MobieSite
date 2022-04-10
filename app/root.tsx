import { MantineProvider } from "@mantine/core";
import type { MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import { Header } from "./components/Header";

export const meta: MetaFunction = () => ({
  title: "Mobie Site 🍿",
  description: "A site for watching movies 🍿",
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
});

const HEADER_LINKS = {
  links: [
    {
      link: "/",
      label: "Home",
    },
    {
      link: "/search",
      label: "Search",
    },
    {
      link: "/about",
      label: "About",
    },
  ],
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <MantineProvider
          theme={{ primaryColor: "red", colorScheme: "dark" }}
          withGlobalStyles
          withNormalizeCSS
        >
          <Header links={HEADER_LINKS.links} />
          <Outlet />
        </MantineProvider>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
