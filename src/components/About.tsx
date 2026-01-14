'use client';

import { useState, useEffect, useRef } from 'react';

export default function About() {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.1 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, []);

	return (
		<section 
			id="about" 
			ref={sectionRef}
			className="relative py-20 sm:py-28 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900 overflow-hidden"
		>
			{/* Animated background elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
			</div>

			{/* Grid pattern overlay */}
			<div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

			<div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
					<div className="inline-block mb-4">
						<div className="flex items-center gap-3">
							<div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400"></div>
							<span className="text-blue-400 font-mono text-sm tracking-wider">GET TO KNOW ME</span>
							<div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-400"></div>
						</div>
					</div>
					<h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 mb-4">
						About Me
					</h2>
					<p className="text-gray-400 max-w-2xl mx-auto">
						Passionate about creating innovative solutions and continuous learning
					</p>
				</div>

				{/* Content Grid */}
				<div className="grid md:grid-cols-2 gap-8 lg:gap-12">
					{/* Objective Card */}
					<div 
						className={`group relative transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
					>
						<div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
						<div className="relative bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-500 h-full">
							{/* Icon */}
							<div className="mb-6 inline-block">
								<div className="relative">
									<div className="absolute inset-0 bg-blue-500/30 blur-lg rounded-lg"></div>
									<div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
										<svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
											<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
											<polyline points="22 4 12 14.01 9 11.01"></polyline>
										</svg>
									</div>
								</div>
							</div>

							<h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 mb-4">
								Objective
							</h3>
							<p className="text-gray-300 leading-relaxed">
								To apply my technical knowledge and continuously enhance my skills while
								contributing to the success of a respected company.
							</p>

							{/* Decorative element */}
							<div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/5 to-transparent rounded-tl-full"></div>
						</div>
					</div>

					{/* Education Card */}
					<div 
						className={`group relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
					>
						<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
						<div className="relative bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-500 h-full">
							{/* Icon */}
							<div className="mb-6 inline-block">
								<div className="relative">
									<div className="absolute inset-0 bg-cyan-500/30 blur-lg rounded-lg"></div>
									<div className="relative w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
										<svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
											<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
											<path d="M6 12v5c3 3 9 3 12 0v-5"></path>
										</svg>
									</div>
								</div>
							</div>

							<h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 mb-6">
								Education
							</h3>
							
							<div className="space-y-6">
								{/* Education Item 1 */}
								<div className="relative pl-6 border-l-2 border-blue-500/30 hover:border-blue-500/60 transition-colors duration-300">
									<div className="absolute -left-[9px] top-1 w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-2 border-slate-800 shadow-lg shadow-blue-500/50"></div>
									<h4 className="text-lg font-semibold text-white mb-1">
										Rizal Technological University
									</h4>
									<p className="text-blue-300 font-medium mb-1">BS in Computer Engineering</p>
									<div className="flex items-center gap-2 text-sm text-gray-400">
										<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
											<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
											<line x1="16" y1="2" x2="16" y2="6"></line>
											<line x1="8" y1="2" x2="8" y2="6"></line>
											<line x1="3" y1="10" x2="21" y2="10"></line>
										</svg>
										<span>2020 - 2025</span>
									</div>
								</div>

								{/* Education Item 2 */}
								<div className="relative pl-6 border-l-2 border-cyan-500/30 hover:border-cyan-500/60 transition-colors duration-300">
									<div className="absolute -left-[9px] top-1 w-4 h-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full border-2 border-slate-800 shadow-lg shadow-cyan-500/50"></div>
									<h4 className="text-lg font-semibold text-white mb-1">
										Daehan College of Business and Technology
									</h4>
									<p className="text-cyan-300 font-medium mb-1">Senior High - ICT Strand</p>
									<div className="flex items-center gap-2 text-sm text-gray-400">
										<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
											<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
											<line x1="16" y1="2" x2="16" y2="6"></line>
											<line x1="8" y1="2" x2="8" y2="6"></line>
											<line x1="3" y1="10" x2="21" y2="10"></line>
										</svg>
										<span>2017 - 2019</span>
									</div>
								</div>
							</div>

							{/* Decorative element */}
							<div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-br-full"></div>
						</div>
					</div>
				</div>

				{/* Stats or Additional Info (Optional Enhancement) */}
				<div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
					{[
						{ label: 'Years of Study', value: '5+' },
						{ label: 'Projects', value: '20+' },
						{ label: 'Technologies', value: '15+' },
						{ label: 'Certifications', value: '10+' }
					].map((stat, index) => (
						<div 
							key={index}
							className="relative group text-center p-6 bg-slate-800/30 backdrop-blur-sm border border-blue-500/10 rounded-xl hover:border-blue-500/30 transition-all duration-300"
						>
							<div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 rounded-xl transition-all duration-300"></div>
							<div className="relative">
								<div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
									{stat.value}
								</div>
								<div className="text-sm text-gray-400">{stat.label}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}