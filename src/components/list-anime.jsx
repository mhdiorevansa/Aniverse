import Image from "next/image";
import Link from "next/link";

export default function ListAnime({ api }) {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			{api.data &&
				api.data.map((data) => {
					return (
						<Link href={`/anime/${data.mal_id}`} key={data.mal_id}>
							<div className="rounded-md shadow-md hover:scale-[104%] transition duration-300 ease-in-out h-full text-white hover:text-color-accent">
								<Image
									src={data.images.webp.large_image_url}
									alt="gambar anime"
									width={600}
									height={600}
									className="rounded-md aspect-square"></Image>
								<h3 className="text-md md:text-lg font-bold p-4 text-center">
									{data.title.length > 46 ? `${data.title.slice(0, 43)}...` : data.title}
								</h3>
							</div>
						</Link>
					);
				})}
		</div>
	);
}
