import GoogleProvider from "next-auth/providers/google";

export const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      profile(profile) {
        console.log("Profile Google", profile);

        let userRole = "Google User";
        if (profile?.email === "imbizman81@gmail.com") {
          userRole = "admin";
        }

        return {
          // ...profile,
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          role: userRole,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },
};
