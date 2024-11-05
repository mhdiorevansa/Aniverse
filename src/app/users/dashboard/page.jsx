import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";

export default async function DashboardPage() {
	const user = await authUserSession();
	return (
		<div className="text-white">
			<h1>DASHBOARD</h1>
			<h3>Welcome, {user.name}</h3>
			<Image src={user.image} alt="foto profil" width={250} height={250} />
		</div>
	);
}
