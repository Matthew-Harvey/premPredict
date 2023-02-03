/* eslint-disable @next/next/no-img-element */
import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";

const Profile = () => {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    user && (
      <div>
        <img src={user?.picture} alt={user?.name} />
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
      </div>
    )
  );
};

export default Profile;