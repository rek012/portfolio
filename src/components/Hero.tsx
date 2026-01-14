'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
	const [isVisible, setIsVisible] = useState(false);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
		const rect = e.currentTarget.getBoundingClientRect();
		setMousePosition({
			x: e.clientX - rect.left,
			y: e.clientY - rect.top,
		});
	};

	return (
		<section 
			className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
			onMouseMove={handleMouseMove}
		>
			{/* Animated background gradient orbs */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
				<div 
					className="absolute w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl transition-all duration-300 ease-out pointer-events-none"
					style={{
						left: `${mousePosition.x - 128}px`,
						top: `${mousePosition.y - 128}px`,
					}}
				></div>
			</div>

			{/* Grid pattern overlay */}
			<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

			<div className={`relative max-w-6xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
				{/* Floating code icon */}
				<div className="mb-6 inline-block">
					<div className="relative">
						<div className="absolute inset-0 bg-blue-500/30 blur-xl rounded-full animate-pulse"></div>
						<svg className="relative w-12 sm:w-14 md:w-16 text-blue-400 animate-bounce" style={{ animationDuration: '3s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<polyline points="16 18 22 12 16 6"></polyline>
							<polyline points="8 6 2 12 8 18"></polyline>
						</svg>
					</div>
				</div>

				<div className="mb-8">
					<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-[length:200%_auto] animate-[gradient_3s_ease_infinite] leading-tight">
						Erick John Pascual
					</h1>
					<div className="flex items-center justify-center gap-3 mb-6">
						<div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-400"></div>
						<p className="text-xl sm:text-2xl md:text-3xl text-blue-300 font-light">
							Computer Engineering
						</p>
						<div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-400"></div>
					</div>
					<p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
						Building innovative solutions through code and creativity
					</p>
				</div>

				{/* CTA Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 px-4">
					<a
						href="#contact"
						className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-blue-500/50 hover:shadow-blue-400/60 hover:scale-105"
					>
						<span className="flex items-center justify-center gap-2">
							Get in Touch
							<svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<rect x="2" y="4" width="20" height="16" rx="2"></rect>
								<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
							</svg>
						</span>
					</a>
					<a
						href="#projects"
						className="px-8 py-4 border-2 border-blue-400/50 hover:border-blue-400 hover:bg-blue-400/10 text-blue-300 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm hover:scale-105"
					>
						View Projects
					</a>
				</div>

				{/* Social Links */}
				<div className="flex justify-center gap-6 mt-12">
					<a
						href="https://github.com/rek012"
						target="_blank"
						rel="noopener noreferrer"
						className="group p-3 rounded-full border border-gray-600 hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 hover:scale-110"
					>
						<svg className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
							<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
						</svg>
					</a>
					<a
						href="https://www.linkedin.com/in/erick-john-pascual/"
						target="_blank"
						rel="noopener noreferrer"
						className="group p-3 rounded-full border border-gray-600 hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 hover:scale-110"
					>
						<svg className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
							<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
						</svg>
					</a>
					<a
						href="mailto:erickpascual63@gmail.com"
						className="group p-3 rounded-full border border-gray-600 hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 hover:scale-110"
					>
						<svg className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<rect x="2" y="4" width="20" height="16" rx="2"></rect>
							<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
						</svg>
					</a>
				</div>

				{/* Scroll Indicator */}
				<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
					<svg className="w-6 h-6 text-blue-400/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<polyline points="6 9 12 15 18 9"></polyline>
					</svg>
				</div>
			</div>

			<style>{`
				@keyframes gradient {
					0%, 100% { background-position: 0% 50%; }
					50% { background-position: 100% 50%; }
				}
			`}</style>
		</section>
	);
}