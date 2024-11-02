import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import NextTopLoader from "nextjs-toploader";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});

const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata = {
	title: "Aniverse",
	description: "Website Anime Indonesia",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-color-dark`}>
				<NextTopLoader showSpinner={false} height={4} />
				<Navbar />
				<div className="md:px-6 px-4">{children}</div>
			</body>
		</html>
	);
}
