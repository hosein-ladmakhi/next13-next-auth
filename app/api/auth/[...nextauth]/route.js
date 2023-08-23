import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const GoogleProviderConfig = GoogleProvider({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

const authOptions = {
  providers: [GoogleProviderConfig],
  secret: process.env.SECRET,
};

const auth = nextAuth(authOptions);

export { auth as GET, auth as POST };
