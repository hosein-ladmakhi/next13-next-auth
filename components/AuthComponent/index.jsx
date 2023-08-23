"use client";

import { signIn as onSignInHandler } from "next-auth/react";

export default function AuthComponent() {
  return (
    <div>
      <button onClick={onSignInHandler}>Login</button>
    </div>
  );
}
