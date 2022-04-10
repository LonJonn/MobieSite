import { renderToString } from "react-dom/server";
import { RemixServer } from "@remix-run/react";
import type { EntryContext } from "@remix-run/node";
import { injectStylesIntoStaticMarkup } from "@mantine/ssr";

if (process.env.NODE_ENV === "development" && process.env.MOCKS_ENABLED === "true") {
  const { server } = require("./mocks/server");
  server.listen();
}

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const markup = renderToString(<RemixServer context={remixContext} url={request.url} />);
  responseHeaders.set("Content-Type", "text/html");

  return new Response(`<!DOCTYPE html>${injectStylesIntoStaticMarkup(markup)}`, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
