import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Erick John Pascual | Computer Engineering Portfolio",
	description: "Computer Engineering graduate passionate about building innovative solutions through code. Specializing in IoT, Full-stack Development, and AI/ML.",
	keywords: ["Erick John Pascual", "Computer Engineering", "Full Stack Developer", "IoT", "Portfolio", "Web Development"],
	authors: [{ name: "Erick John Pascual" }],
	creator: "Erick John Pascual",
	icons: {
		icon: [
			{ url: '/favicon.svg', type: 'image/svg+xml' },
			{ url: '/favicon.ico', sizes: '32x32' }
		],
		apple: '/apple-icon.png',
	},
	openGraph: {
		title: "Erick John Pascual | Computer Engineering Portfolio",
		description: "Computer Engineering graduate passionate about building innovative solutions",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
 				<Navbar />
 				{children}
			</body>
		</html>
	);
}
