"use client";

import "./globals.css";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import { NextAuthProvider } from "./providers";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <>
          <div suppressHydrationWarning={true}>
            <NextAuthProvider>{children}</NextAuthProvider>
          </div>
        </>
      </body>
    </html>
  );
}
