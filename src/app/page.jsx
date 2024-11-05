import HeaderListAnime from "@/components/header-list-anime";
import ListAnime from "@/components/list-anime";
import { getNestedAnimeResponse, getAnimeResponse } from "@/libs/api-libs";

export default async function Page() {
	const topAnime = await getAnimeResponse("top/anime", "limit=8");
	let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry");
	recommendedAnime = recommendedAnime.sort(() => Math.random() - 0.5);
	recommendedAnime = { data: recommendedAnime.slice(0, 4) };

	return (
		<>
			{/* anime terpopuler */}
			<section className="my-4">
				<HeaderListAnime title={"Paling Populer"} linkTitle={"Lihat Semua"} linkHref={"/popular"} />
				<ListAnime api={topAnime} />
			</section>

			{/* anime rekomendasi */}
			<section className="my-4">
				<HeaderListAnime title={"Rekomendasi"} />
				<ListAnime api={recommendedAnime} />
			</section>
		</>
	);
}
