import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";

export default async function LoginGithub() {
	const userAuth = await authUserSession();
	const buttonLabel = userAuth ? "Sign Out" : "Sign In";
	const linkButton = userAuth ? "/api/auth/signout" : "/api/auth/signin";
	return (
		<div className="flex gap-3">
			{userAuth ? (
				<Link href="/users/dashboard" className="py-1">
					Dashboard
				</Link>
			) : null}
			<Link href={linkButton} className="bg-black text-white py-1 px-8 inline-block">
				{buttonLabel}
			</Link>
		</div>
	);
}
