import type { NextAuthOptions } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

// https://github.com/nextauthjs/next-auth/discussions/4294
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.AUTH0_ISSUER,
      idToken: true,
      userinfo: {},
    }),
  ],
  callbacks: {
    signIn: () => {
      return true;
    },
    session: async ({ session, token, user }: any) => {
      session.accessToken = token.accessToken;
      session.idToken = token.idToken;
      return session;
    },

    async jwt({ token, account }) {
      console.log(account);
      if (account) {
        token.accessToken = account.access_token;
        token.idToken = account.id_token;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
