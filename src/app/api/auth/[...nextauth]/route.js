// ini file route khusus api / internal api
import NextAuth from "next-auth/next";
import githubAuth from "next-auth/providers/github";

// pengaturan auth
export const authOption = {
   // provider login
   providers: [
      githubAuth({
         clientId: process.env.GITHUB_CLIENT,
         clientSecret: process.env.GITHUB_SECRET
      })
   ],
   // secret key project kita
   secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOption);

export { handler as GET, handler as POST }