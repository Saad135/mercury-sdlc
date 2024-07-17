/* eslint-disable unused-imports/no-unused-vars */
import { DynamoDBAdapter } from "@auth/dynamodb-adapter";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import NextAuth from "next-auth/next";
import EmailProvider from "next-auth/providers/email";

import { createUser, fetchUser } from "@/lib/directus";

const config = {
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  region: process.env.AWS_REGION,
};

const client = DynamoDBDocument.from(new DynamoDBClient(config), {
  marshallOptions: {
    convertEmptyValues: true,
    removeUndefinedValues: true,
    convertClassInstanceToMap: true,
  },
});

export const authOptions = {
  // Secret for Next-auth, without this JWT encryption/decryption won't work
  secret: process.env.NEXTAUTH_SECRET,

  // Configure one or more authentication providers
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.RESEND_API_KEY,
        },
      },
      from: process.env.EMAIL_FROM,
      maxAge: 60 * 60,
    }),
  ],

  // Adapter to store email verification token
  adapter: DynamoDBAdapter(client),

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log(user, account, profile, email, credentials);
      let isAllowedToSignIn = null;

      let fetchedUser = await fetchUser({ email: user?.email });

      if (!user) {
        fetchedUser = await createUser({
          body: { email: user?.email, has_access: true },
        });
      }

      isAllowedToSignIn = fetchedUser?.has_access;

      // console.log(isAllowedToSignIn);
      if (isAllowedToSignIn) {
        return true;
      } else {
        // Return false to display a default error message
        return "/unauthorized";
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },

    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      const fetchedUser = await fetchUser({ email: user?.email });
      session.user.id = fetchedUser?.id;

      return session;
    },
  },
};

export const nextAuthOptions = NextAuth(authOptions);
