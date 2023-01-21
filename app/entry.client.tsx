import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

function hydrate() {
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <Auth0Provider
          domain="prempredict.eu.auth0.com"
          clientId="NZMInCJMbT9JJznZkoJCCDE1V5D0bjlB"
          authorizationParams={{
            redirect_uri: window.location.origin
          }}
        >
          <RemixBrowser />
        </Auth0Provider>
      </StrictMode>
    );
  });
}

if (typeof requestIdleCallback === "function") {
  requestIdleCallback(hydrate);
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  setTimeout(hydrate, 1);
}
