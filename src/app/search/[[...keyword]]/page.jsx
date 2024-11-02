import HeaderListAnime from "@/components/header-list-anime";
import ListAnime from "@/components/list-anime";
import getAnimeResponse from "@/libs/api-libs";

export default async function PageSearch({ params }) {
	const keyword = params.keyword;
	const searchAnime = await getAnimeResponse("anime", `q=${keyword}`);
	const decodedTitle = decodeURIComponent(keyword);
	return (
		<>
			{/* anime terpopuler */}
			<section className="my-4">
				<HeaderListAnime title={`Pencarian untuk "${decodedTitle}"`} />
				<ListAnime api={searchAnime} />
			</section>
		</>
	);
}
