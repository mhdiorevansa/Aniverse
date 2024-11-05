"use client";
import { useRouter } from "nextjs-toploader/app";

export default function ButtonGoogle() {
	const router = useRouter();
	const toGoogle = () => {
		router.push("http://127.0.0.1:8000/api/login/google");
	};
	return (
		<div>
			<button className="bg-rose-500 text-white px-2 py-3" onClick={toGoogle}>
				Google
			</button>
		</div>
	);
}
