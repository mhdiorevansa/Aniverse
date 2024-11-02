import HeaderListAnime from "@/components/header-list-anime";
import ListAnime from "@/components/list-anime";
import getAnimeResponse from "@/libs/api-libs";

export default async function Page() {
	const topAnime = await getAnimeResponse("top/anime", "limit=8");
	return (
		<>
			{/* anime terpopuler */}
			<section className="my-4">
				<HeaderListAnime title={"Paling Populer"} linkTitle={"Lihat Semua"} linkHref={"/popular"} />
				<ListAnime api={topAnime} />
			</section>
		</>
	);
}
