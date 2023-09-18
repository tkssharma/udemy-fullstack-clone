"use client";

import { useSession } from "next-auth/react";

export const User = () => {
  // client side session 
  // using use session 
  // it invokes api/auth/session endpoint 
  const { data: session } = useSession();

  return (
    <>
      <h1>Client Session</h1>
      <h6>{JSON.stringify(session)}</h6>
    </>
  );
};