"use client";

import { useState } from "react";
import YouTube from "react-youtube";

export default function VideoPlayer({ youtubeId }) {
	const [isOpen, setIsOpen] = useState(true);
	const handleVideoPlayer = () => setIsOpen((prevState) => !prevState);
	const options = {
		width: "300",
		height: "200",
	};
	const Player = () => {
		return (
			<div className="fixed bottom-4 right-4">
				<button
					className="text-white float-right bg-black px-3 mb-1 rounded-full aspect-square object-cover cursor-pointer"
					onClick={handleVideoPlayer}>
					X
				</button>
				{/* onReady untuk apa yang terjadi ketika videonya ada, opts untuk mengatur width & height */}
				<YouTube
					videoId={youtubeId}
					onReady={(event) => event.target.pauseVideo()}
					opts={options}
					onError={() => alert("Video ini tidak tersedia")}
				/>
			</div>
		);
	};
	const ButtonOpenPlayer = () => {
		return (
			<button
				className="text-black bg-white w-32 fixed bottom-4 right-4 cursor-pointer rounded"
				onClick={handleVideoPlayer}>
				Tonton Trailer
			</button>
		);
	};

	return isOpen ? <Player /> : <ButtonOpenPlayer />;
}
