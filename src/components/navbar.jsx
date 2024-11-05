import Link from "next/link";
import SearchListAnime from "./search-list-anime";
import LoginGithub from "./login-github";

export default function Navbar() {
	return (
		<header className="bg-color-accent sticky top-0 z-10">
			<div className="flex items-center md:flex-row flex-col justify-between space-y-2 md:space-y-0 p-4 md:px-6">
				<Link href="/" className="font-bold text-2xl text-white">
					ANIVERSE
				</Link>
				<SearchListAnime />
				<LoginGithub />
			</div>
		</header>
	);
}
