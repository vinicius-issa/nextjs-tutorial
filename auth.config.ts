import { NextAuthConfig } from "next-auth";
import { signIn } from "next-auth/react";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLogged = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        return isLogged;
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
