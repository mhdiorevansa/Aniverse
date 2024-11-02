"use client";

export default function Pagination({ page, lastPage, setPage }) {
	const scrollTop = () => {
		scrollTo({
			behavior: "smooth",
			top: 0,
		});
	};
	const handleNextPage = () => {
		if (page < lastPage) {
			setPage(page + 1);
			scrollTop();
		}
	};
	const handlePrevPage = () => {
		if (page > 1) {
			setPage(page - 1);
			scrollTop();
		}
	};
	return (
		<div className="flex justify-center items-center py-4 px-2 gap-4 text-white text-xl">
			<button className="transition-all hover:text-color-accent" onClick={handlePrevPage}>
				Prev
			</button>
			<p>
				{page} of {lastPage}
			</p>
			<button className="transition-all hover:text-color-accent" onClick={handleNextPage}>
				Next
			</button>
		</div>
	);
}
