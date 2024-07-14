import NextAuth from "next-auth";
import { options } from "./options";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string | null; // Add role property
    };
  }
}

const handler = NextAuth(options);
export { handler as GET, handler as POST };
