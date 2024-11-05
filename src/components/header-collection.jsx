"use client";
import { ArrowLeft } from "@phosphor-icons/react";
import { useRouter } from "nextjs-toploader/app";

export default function HeaderCollection({ title }) {
	const router = useRouter();
	const handleBack = (e) => {
		e.preventDefault();
		router.back();
	};
	return (
		<div className="flex justify-between items-center mb-3">
			<div className="text-white flex gap-2 items-center cursor-pointer" onClick={handleBack}>
				<ArrowLeft size={25} />
				<span>Back</span>
			</div>
			<h1 className="text-2xl text-white font-bold">{title}</h1>
		</div>
	);
}
