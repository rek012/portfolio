import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
	width: 180,
	height: 180,
};

export const contentType = 'image/png';

export default function AppleIcon() {
	return new ImageResponse(
		(
			<div
				style={{
					background: '#1e1e1e',
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: '36px',
				}}
			>
				<svg
					width="140"
					height="140"
					viewBox="0 0 64 64"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill="#306998"
						d="M31.9,0c-2.6,0-5.1,0.2-7.3,0.6c-6.5,1.1-7.6,3.5-7.6,7.9v5.8h15.3v1.9H11.4c-4.4,0-8.3,2.6-9.5,7.6c-1.4,5.7-1.4,9.3,0,15.3c1.1,4.5,3.7,7.6,8.1,7.6h5.3v-7c0-5,4.3-9.4,9.5-9.4h15.3c4.2,0,7.6-3.5,7.6-7.7V8.5c0-4.1-3.5-7.2-7.6-7.9C36.7,0.2,34.5,0,31.9,0z M23.6,4.6c1.6,0,2.9,1.3,2.9,2.9c0,1.6-1.3,2.9-2.9,2.9c-1.6,0-2.9-1.3-2.9-2.9C20.7,5.9,22,4.6,23.6,4.6z"
					/>
					<path
						fill="#FFD43B"
						d="M48.5,16.2v6.8c0,5.2-4.4,9.6-9.5,9.6H23.6c-4.1,0-7.6,3.5-7.6,7.7v14.4c0,4.1,3.6,6.5,7.6,7.7c4.8,1.4,9.5,1.7,15.3,0c3.9-1.1,7.6-3.4,7.6-7.7V49h-15.2v-1.9h22.9c4.4,0,6.1-3.1,7.6-7.6c1.6-4.7,1.5-9.2,0-15.3c-1.1-4.4-3.2-7.6-7.6-7.6H48.5z M40.1,52.5c1.6,0,2.9,1.3,2.9,2.9c0,1.6-1.3,2.9-2.9,2.9c-1.6,0-2.9-1.3-2.9-2.9C37.2,53.8,38.5,52.5,40.1,52.5z"
					/>
				</svg>
			</div>
		),
		{ ...size },
	);
}
