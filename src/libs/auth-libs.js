import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";

// mendapatkan sesi user
export async function authUserSession() {
   const session = await getServerSession(authOption);
   return session ? session.user : null;
}
