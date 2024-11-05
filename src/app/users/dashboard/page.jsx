import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

export default async function DashboardPage() {
	const user = await authUserSession();
	return (
		<div className="text-white my-4 flex flex-col gap-y-3 justify-center items-center">
			<h3 className="text-2xl font-bold">Welcome, {user.name}</h3>
			<Image src={user.image} alt="foto profil" className="rounded-full" width={250} height={250} />
			<div className="py-6 flex gap-4">
				<Link
					href="/users/dashboard/collection"
					className="bg-color-accent text-black font-bold px-4 py-3 text-md rounded-md">
					My Collection
				</Link>
				<Link
					href="/users/dashboard/comment"
					className="bg-color-accent text-black font-bold px-4 py-3 text-md rounded-md">
					My Comment
				</Link>
			</div>
		</div>
	);
}
