'use client';

import type { FileMeta } from '@/lib/portfolio-data';

interface IconProps {
	className?: string;
}

export function PythonFileIcon({ className = 'w-4 h-4' }: IconProps) {
	return (
		<svg className={className} viewBox="0 0 64 64" aria-hidden>
			<path
				fill="#306998"
				d="M31.9,0c-2.6,0-5.1,0.2-7.3,0.6c-6.5,1.1-7.6,3.5-7.6,7.9v5.8h15.3v1.9H11.4c-4.4,0-8.3,2.6-9.5,7.6c-1.4,5.7-1.4,9.3,0,15.3c1.1,4.5,3.7,7.6,8.1,7.6h5.3v-7c0-5,4.3-9.4,9.5-9.4h15.3c4.2,0,7.6-3.5,7.6-7.7V8.5c0-4.1-3.5-7.2-7.6-7.9C36.7,0.2,34.5,0,31.9,0z M23.6,4.6c1.6,0,2.9,1.3,2.9,2.9c0,1.6-1.3,2.9-2.9,2.9c-1.6,0-2.9-1.3-2.9-2.9C20.7,5.9,22,4.6,23.6,4.6z"
			/>
			<path
				fill="#FFD43B"
				d="M48.5,16.2v6.8c0,5.2-4.4,9.6-9.5,9.6H23.6c-4.1,0-7.6,3.5-7.6,7.7v14.4c0,4.1,3.6,6.5,7.6,7.7c4.8,1.4,9.5,1.7,15.3,0c3.9-1.1,7.6-3.4,7.6-7.7V49h-15.2v-1.9h22.9c4.4,0,6.1-3.1,7.6-7.6c1.6-4.7,1.5-9.2,0-15.3c-1.1-4.4-3.2-7.6-7.6-7.6H48.5z M40.1,52.5c1.6,0,2.9,1.3,2.9,2.9c0,1.6-1.3,2.9-2.9,2.9c-1.6,0-2.9-1.3-2.9-2.9C37.2,53.8,38.5,52.5,40.1,52.5z"
			/>
		</svg>
	);
}

export function MarkdownIcon({ className = 'w-4 h-4' }: IconProps) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
			<rect x="2" y="5" width="20" height="14" rx="2" stroke="#519aba" strokeWidth="1.5" />
			<path d="M6 16V9l3 4 3-4v7M16 9v7m0 0l-2-2m2 2l2-2" stroke="#519aba" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}

export function TextFileIcon({ className = 'w-4 h-4' }: IconProps) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
			<path
				d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9z"
				stroke="#9cdcfe"
				strokeWidth="1.5"
				strokeLinejoin="round"
			/>
			<path d="M14 3v6h6" stroke="#9cdcfe" strokeWidth="1.5" strokeLinejoin="round" />
			<path d="M8 13h8M8 16h8M8 19h5" stroke="#9cdcfe" strokeWidth="1.2" strokeLinecap="round" />
		</svg>
	);
}

export function FolderIcon({ open = false, className = 'w-4 h-4' }: IconProps & { open?: boolean }) {
	return open ? (
		<svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
			<path d="M2 7a2 2 0 012-2h4l2 2h10a2 2 0 012 2v1H4l-2 9V7z" fill="#dcb67a" opacity=".25" stroke="#dcb67a" strokeWidth="1.2" strokeLinejoin="round" />
		</svg>
	) : (
		<svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
			<path d="M2 7a2 2 0 012-2h4l2 2h10a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V7z" stroke="#dcb67a" strokeWidth="1.2" fill="#dcb67a" fillOpacity=".15" />
		</svg>
	);
}

export function ChevronIcon({ open = false, className = 'w-3 h-3' }: IconProps & { open?: boolean }) {
	return (
		<svg
			className={`${className} transition-transform ${open ? 'rotate-90' : ''}`}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden
		>
			<polyline points="9 18 15 12 9 6" />
		</svg>
	);
}

export function CloseIcon({ className = 'w-3.5 h-3.5' }: IconProps) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
			<line x1="18" y1="6" x2="6" y2="18" />
			<line x1="6" y1="6" x2="18" y2="18" />
		</svg>
	);
}

export function FileIconFor({ meta, className = 'w-4 h-4' }: { meta: FileMeta; className?: string }) {
	if (meta.icon === 'md') return <MarkdownIcon className={className} />;
	if (meta.icon === 'txt') return <TextFileIcon className={className} />;
	return <PythonFileIcon className={className} />;
}

export function activityIcon(id: string, className = 'w-6 h-6') {
	switch (id) {
		case 'explorer':
			return (
				<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
					<rect x="3" y="3" width="7" height="7" />
					<rect x="14" y="3" width="7" height="7" />
					<rect x="3" y="14" width="7" height="7" />
					<rect x="14" y="14" width="7" height="7" />
				</svg>
			);
		case 'search':
			return (
				<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
					<circle cx="11" cy="11" r="7" />
					<line x1="21" y1="21" x2="16.65" y2="16.65" />
				</svg>
			);
		case 'git':
			return (
				<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
					<circle cx="6" cy="6" r="2.5" />
					<circle cx="6" cy="18" r="2.5" />
					<circle cx="18" cy="12" r="2.5" />
					<path d="M6 8.5v7M8.5 6h7a3 3 0 013 3v1.5" />
				</svg>
			);
		case 'debug':
			return (
				<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
					<polygon points="6 4 20 12 6 20 6 4" />
				</svg>
			);
		case 'ext':
			return (
				<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
					<path d="M3 3h7v7H3zM14 14h7v7h-7zM21 7l-4 4 4 4M3 17l4-4-4-4" />
				</svg>
			);
		case 'account':
			return (
				<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
					<circle cx="12" cy="8" r="4" />
					<path d="M4 21a8 8 0 0116 0" />
				</svg>
			);
		case 'settings':
			return (
				<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
					<circle cx="12" cy="12" r="3" />
					<path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z" />
				</svg>
			);
		default:
			return null;
	}
}
