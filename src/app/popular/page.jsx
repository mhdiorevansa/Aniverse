"use client";

import HeaderMenu from "@/components/header-menu";
import ListAnime from "@/components/list-anime";
import Pagination from "@/components/pagination";
import { getAnimeResponse } from "@/libs/api-libs";
import { useEffect, useState } from "react";

export default function PopularPage() {
	// pembuatan state, value yang didalam kurung itu adalah default value
	const [page, setPage] = useState(1);
	const [topAnime, setTopAnime] = useState([]);

	useEffect(() => {
		// buat fungsi baru karena state diatas tidak bisa diproses jika fungsinya async
		const fetchData = async () => {
			const popularAnime = await getAnimeResponse("top/anime", `page=${page}`);
			setTopAnime(popularAnime);
		};
		fetchData();
		// array page merupakan, datanya akan dijalankan lagi saat page nya berubah
	}, [page]);

	return (
		<>
			<HeaderMenu title={`Anime Terpopuler Halaman ${page}`} />
			<ListAnime api={topAnime} />
			<Pagination
				page={page}
				lastPage={topAnime.pagination && topAnime.pagination.last_visible_page}
				setPage={setPage}
			/>
		</>
	);
}
