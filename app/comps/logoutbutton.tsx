import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';


export async function loader() {
  const url = process.env.BASE_URL?.toString();
  return json({ url: url});
}

const LogoutButton = () => {
  const load_data = useLoaderData<typeof loader>();
  
  const { logout } = useAuth0();
  return (
    <button
      onClick={() =>
        logout({
          returnTo: load_data.url,
        })
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;