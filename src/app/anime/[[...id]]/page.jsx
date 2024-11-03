import VideoPlayer from "@/components/video-player";
import getAnimeResponse from "@/libs/api-libs";
import Image from "next/image";

export default async function DetailAnime({ params: { id } }) {
	const detailAnime = await getAnimeResponse(`anime/${id}`);
	return (
		<>
			<div className="pt-4">
				<h1 className="text-white text-2xl">
					{detailAnime.data.title} - {detailAnime.data.year ?? "Tidak diketahui"}
				</h1>
			</div>
			<div className="py-4 flex gap-2 text-white overflow-x-auto w-full">
				<div className="w-36 flex-shrink-0 flex flex-col justify-center items-center rounded-md border border-white p-2">
					<h3>PERINGKAT</h3>
					<p>{detailAnime.data.rank}</p>
				</div>
				<div className="w-36 flex-shrink-0 flex flex-col justify-center items-center rounded-md border border-white p-2">
					<h3>SKOR</h3>
					<p>{detailAnime.data.score}</p>
				</div>
				<div className="w-36 flex-shrink-0 flex flex-col justify-center items-center rounded-md border border-white p-2">
					<h3>ANGGOTA</h3>
					<p>{detailAnime.data.members}</p>
				</div>
				<div className="w-36 flex-shrink-0 flex flex-col justify-center items-center rounded-md border border-white p-2">
					<h3>EPISODE</h3>
					<p>{detailAnime.data.episodes}</p>
				</div>
				<div className="w-36 flex-shrink-0 flex flex-col justify-center items-center rounded-md border border-white p-2">
					<h3>DURASI</h3>
					<p>{detailAnime.data.duration}</p>
				</div>
			</div>
			<div className="pt-4 flex sm:flex-nowrap flex-wrap gap-2 text-white">
				<Image
					src={detailAnime.data.images.webp.large_image_url}
					alt={detailAnime.data.images.jpg.large_image_url}
					width={340}
					height={340}
					className="w-full md:w-[340px] md:h-[340px] rounded"
				/>
				<p className="text-justify">{detailAnime.data.synopsis}</p>
			</div>
			<div>
				<VideoPlayer youtubeId={detailAnime.data.trailer.youtube_id} />
			</div>
		</>
	);
}
