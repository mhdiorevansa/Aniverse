import HeaderCollection from "@/components/header-collection";
import Image from "next/image";
import Link from "next/link";

export default function DashboardCollectionPage() {
	return (
		<div className="py-4">
			<HeaderCollection title={"My Collection"} />
			<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
				<Link href={"/"} className="border-2 border-color-accent relative">
					<Image src={""} alt="gambar" width={350} height={350}></Image>
					<div className="bg-color-accent h-16 absolute bottom-0 w-full flex justify-center items-center">
						<h3 className="text-xl">Judul Anime</h3>
					</div>
				</Link>
			</div>
		</div>
	);
}
