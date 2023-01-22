import { Auth0Provider } from "@auth0/auth0-react";
import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./styles/app.css"

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Auth0Provider
          domain="prempredict.eu.auth0.com"
          clientId="NZMInCJMbT9JJznZkoJCCDE1V5D0bjlB"
        >
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Auth0Provider>
      </body>
    </html>
  );
}
