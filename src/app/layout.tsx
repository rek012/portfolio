import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Erick John Pascual — Full-Stack Developer Portfolio',
	description:
		'Full-Stack Developer specializing in Django, Flask, FastAPI, PostgreSQL, and self-hosted infrastructure (Nginx, Cloudflare Tunnel, GCP, Vultr).',
	keywords: [
		'Erick John Pascual',
		'Full Stack Developer',
		'Django',
		'Flask',
		'FastAPI',
		'PostgreSQL',
		'Nginx',
		'Cloudflare Tunnel',
		'GCP',
		'Vultr',
		'Computer Engineer',
		'Portfolio',
	],
	authors: [{ name: 'Erick John Pascual' }],
	creator: 'Erick John Pascual',
	icons: {
		icon: [
			{ url: '/favicon.svg', type: 'image/svg+xml' },
			{ url: '/favicon.ico', sizes: '32x32' },
		],
		apple: '/apple-icon.png',
	},
	openGraph: {
		title: 'Erick John Pascual — Full-Stack Developer Portfolio',
		description:
			'Django · Flask · FastAPI · PostgreSQL · Nginx · Cloudflare Tunnel · GCP · Vultr',
		type: 'website',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				{children}
			</body>
		</html>
	);
}
