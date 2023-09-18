"use client";

import "./globals.css";
import "./home.css";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import { Navbar} from './components/navbar/Navbar'

import { NextAuthProvider } from "./providers";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <>
          <div suppressHydrationWarning={true}>
            <NextAuthProvider>
              <>
              <Navbar />
              {children}
              </>
              </NextAuthProvider>
          </div>
        </>
      </body>
    </html>
  );
}
