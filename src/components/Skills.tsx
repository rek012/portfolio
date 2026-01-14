'use client';

import { useState, useEffect, useRef } from 'react';

export default function Skills() {
	const [isVisible, setIsVisible] = useState(false);
	const [expandedCategory, setExpandedCategory] = useState<number | null>(0);
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

	const skillCategories = [
		{
			title: 'Programming Languages',
			skills: ['Java', 'Python', 'Visual Basic .NET', 'C/C++'],
			gradient: 'from-blue-500 to-cyan-500',
			icon: (
				<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<polyline points="16 18 22 12 16 6"></polyline>
					<polyline points="8 6 2 12 8 18"></polyline>
				</svg>
			)
		},
		{
			title: 'Web Development',
			skills: ['Flask', 'Django', 'Next.js', 'HTML', 'CSS', 'JavaScript', 'Tailwind'],
			gradient: 'from-purple-500 to-blue-500',
			icon: (
				<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<circle cx="12" cy="12" r="10"></circle>
					<line x1="2" y1="12" x2="22" y2="12"></line>
					<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
				</svg>
			)
		},
		{
			title: 'Databases',
			skills: ['MySQL', 'MSSQL', 'PostgreSQL', 'Supabase', 'MS Access'],
			gradient: 'from-cyan-500 to-emerald-500',
			icon: (
				<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
					<path d="M3 5v14a9 3 0 0 0 18 0V5"></path>
					<path d="M3 12a9 3 0 0 0 18 0"></path>
				</svg>
			)
		},
		{
			title: 'Development Tools',
			skills: ['VSCode', 'Github', 'Docker', 'ClickUp', 'Slack', 'Git'],
			gradient: 'from-orange-500 to-pink-500',
			icon: (
				<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<path d="M12 2v20M2 12h20"></path>
					<path d="M4.22 4.22l14.24 14.24"></path>
					<path d="M19.78 4.22L5.54 18.46"></path>
				</svg>
			)
		},
		{
			title: 'Embedded & IoT',
			skills: ['Arduino', 'Raspberry Pi', 'UART', 'I2C', 'Image Processing'],
			gradient: 'from-rose-500 to-orange-500',
			icon: (
				<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
					<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
				</svg>
			)
		},
		{
			title: 'IT Technical Skills',
			skills: ['Hardware Repair', 'OS Installation', 'CCTV Setup', 'Network Config', 'System Admin'],
			gradient: 'from-teal-500 to-cyan-500',
			icon: (
				<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
					<line x1="8" y1="21" x2="16" y2="21"></line>
					<line x1="12" y1="17" x2="12" y2="21"></line>
				</svg>
			)
		}
	];

	const softSkills = [
		'Problem-Solving',
		'Team Collaboration',
		'Adaptability',
		'Eager to Learn',
		'Responsibility'
	];

	return (
		<section 
			id="skills"
			ref={sectionRef}
			className="relative py-20 sm:py-28 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900 overflow-hidden"
		>
			{/* Animated background */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/3 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
			</div>

			{/* Grid pattern */}
			<div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
					<div className="inline-block mb-4">
						<div className="flex items-center gap-3">
							<div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400"></div>
							<span className="text-blue-400 font-mono text-sm tracking-wider">MY EXPERTISE</span>
							<div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-400"></div>
						</div>
					</div>
					<h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 mb-4">
						Technical Skills
					</h2>
					<p className="text-gray-400 max-w-2xl mx-auto">
						Click on a category to explore skills
					</p>
				</div>

				{/* Horizontal Accordion Slider */}
				<div className={`transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
					<div className="flex gap-1 sm:gap-2 h-[280px] sm:h-[350px] md:h-[400px] overflow-hidden">
						{skillCategories.map((category, index) => {
							const isExpanded = expandedCategory === index;
							
							return (
								<button
									key={index}
									onClick={() => setExpandedCategory(isExpanded ? null : index)}
									className={`group relative transition-all duration-700 ease-in-out overflow-hidden rounded-xl sm:rounded-2xl ${
										isExpanded ? 'flex-[4]' : 'flex-[0.5] hover:flex-[0.6]'
									}`}
								>
									{/* Glow effect */}
									<div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
									
									{/* Card Container */}
									<div className="relative h-full bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 overflow-hidden">
										
										{/* Collapsed State - Vertical Title & Icon */}
										<div className={`absolute inset-0 flex flex-col items-center justify-center gap-2 sm:gap-4 p-2 sm:p-4 transition-all duration-700 ${
											isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'
										}`}>
											{/* Icon */}
											<div className="relative">
												<div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-30 blur-lg rounded-lg`}></div>
												<div className={`relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br ${category.gradient} rounded-lg flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
													<div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
														{category.icon}
													</div>
												</div>
											</div>
											
											{/* Vertical Title */}
											<h3 className="text-white font-bold text-xs sm:text-sm writing-mode-vertical text-center whitespace-nowrap transform rotate-180">
												{category.title}
											</h3>
										</div>

										{/* Expanded State - Full Content */}
										<div className={`absolute inset-0 p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col transition-all duration-700 ${
											isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'
										}`}>
											{/* Header with Icon */}
											<div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6">
												<div className="relative flex-shrink-0">
													<div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-30 blur-lg rounded-lg`}></div>
													<div className={`relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br ${category.gradient} rounded-lg flex items-center justify-center text-white`}>
														<div className="w-5 h-5 sm:w-6 sm:h-6">
															{category.icon}
														</div>
													</div>
												</div>
												<h3 className={`text-base sm:text-xl md:text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${category.gradient} leading-tight`}>
													{category.title}
												</h3>
											</div>

											{/* Skills Grid */}
											<div className="flex-1 overflow-y-auto custom-scrollbar pr-1 sm:pr-2">
												<div className="grid grid-cols-1 gap-2 sm:gap-3">
													{category.skills.map((skill, skillIndex) => (
														<div
															key={skillIndex}
															className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-slate-900/30 border border-blue-500/10 hover:border-blue-500/30 hover:bg-slate-900/50 transition-all duration-300 group/skill"
															style={{ 
																animationDelay: `${skillIndex * 50}ms`,
																animation: isExpanded ? 'slideInFromLeft 0.5s ease-out forwards' : 'none'
															}}
														>
															<div className={`flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r ${category.gradient} group-hover/skill:scale-150 transition-transform duration-300`}></div>
															<span className="text-xs sm:text-sm text-gray-200 group-hover/skill:text-white transition-colors duration-300">
																{skill}
															</span>
														</div>
													))}
												</div>
											</div>

											{/* Skill Count Badge */}
											<div className="mt-2 sm:mt-3 md:mt-4 pt-2 sm:pt-3 md:pt-4 border-t border-blue-500/10">
												<div className={`inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r ${category.gradient} bg-opacity-20 border border-blue-500/30`}>
													<svg className="w-3 h-3 sm:w-4 sm:h-4 text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
														<polyline points="20 6 9 17 4 12"></polyline>
													</svg>
													<span className="text-xs sm:text-sm font-medium text-blue-200">
														{category.skills.length} Skills
													</span>
												</div>
											</div>
										</div>

										{/* Decorative corner */}
										<div className={`absolute bottom-0 right-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-tl ${category.gradient} opacity-5 rounded-tl-full transition-opacity duration-700 ${
											isExpanded ? 'opacity-10' : 'opacity-5'
										}`}></div>
									</div>
								</button>
							);
						})}
					</div>

					{/* Helper Text */}
					<div className="mt-4 sm:mt-6 text-center">
						<p className="text-xs sm:text-sm text-gray-500">
							Click any category to expand and explore • {expandedCategory !== null ? 'Click again to collapse' : 'Choose a skill category'}
						</p>
					</div>
				</div>

				{/* Soft Skills Section */}
				<div className={`mt-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
					<div className="text-center mb-12">
						<div className="inline-block mb-4">
							<div className="flex items-center gap-3">
								<div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400"></div>
								<span className="text-cyan-400 font-mono text-sm tracking-wider">PERSONAL ATTRIBUTES</span>
								<div className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-400"></div>
							</div>
						</div>
						<h3 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-300 to-cyan-400">
							Soft Skills
						</h3>
					</div>

					<div className="flex flex-wrap justify-center gap-3">
						{softSkills.map((skill, index) => (
							<div
								key={skill}
								className={`group relative transition-all duration-700 ${
									isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
								}`}
								style={{ transitionDelay: `${(index + skillCategories.length) * 50}ms` }}
							>
								<div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-30 blur-lg rounded-full transition-opacity duration-300"></div>
								<div className="relative px-6 py-3 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 hover:from-blue-500 hover:to-cyan-500 text-white rounded-full font-medium border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-400/40 hover:scale-105">
									{skill}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<style>{`
				.custom-scrollbar::-webkit-scrollbar {
					width: 6px;
				}
				.custom-scrollbar::-webkit-scrollbar-track {
					background: rgba(15, 23, 42, 0.5);
					border-radius: 10px;
				}
				.custom-scrollbar::-webkit-scrollbar-thumb {
					background: rgba(96, 165, 250, 0.5);
					border-radius: 10px;
				}
				.custom-scrollbar::-webkit-scrollbar-thumb:hover {
					background: rgba(96, 165, 250, 0.8);
				}
				
				.writing-mode-vertical {
					writing-mode: vertical-rl;
					text-orientation: mixed;
				}
				
				@keyframes slideInFromLeft {
					from {
						opacity: 0;
						transform: translateX(-10px);
					}
					to {
						opacity: 1;
						transform: translateX(0);
					}
				}
			`}</style>
		</section>
	);
}
