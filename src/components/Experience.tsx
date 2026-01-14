'use client';

import { useState, useEffect, useRef } from 'react';

export default function Experience() {
	const [isVisible, setIsVisible] = useState(false);
	const [activeCard, setActiveCard] = useState<number | null>(null);
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

	const experiences = [
		{
			company: 'Officium Inc.',
			position: 'IT Support Staff',
			type: 'Full-time',
			period: 'Oct 9, 2025 – Present',
			duration: 'Current',
			isCurrent: true,
			responsibilities: [
				'Implement workflow automation solutions to streamline operations and improve efficiency',
				'Configure and manage task management systems for optimal team productivity',
				'Provide technical support for internal tools including ClickUp, Freshdesk, and Microsoft Office 365',
				'Develop full-stack Flask applications to enhance team capabilities and workflows',
				'Troubleshoot software-related issues and deliver timely solutions to colleagues'
			],
			color: 'from-emerald-500 to-cyan-500',
			icon: (
				<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
					<polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
					<line x1="12" y1="22.08" x2="12" y2="12"></line>
				</svg>
			)
		},
		{
			company: 'Apptrade Inc.',
			position: 'IT OIC/Programmer',
			type: 'Contractual',
			period: 'Dec 16, 2024 – Apr 14, 2025',
			duration: '4 Months',
			isCurrent: false,
			responsibilities: [
				'Developed and maintained software applications, including a Canteen POS system using Python-Flask, Tailwind, and MySQL',
				'Maintained Biometric Attendance Web server infrastructure',
				'Provided comprehensive IT support for software, hardware, and network troubleshooting',
				'Ensured system security, updates, and smooth IT operations',
				'Installed, maintained and configured CCTV surveillance systems'
			],
			color: 'from-blue-500 to-cyan-500',
			icon: (
				<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<polyline points="16 18 22 12 16 6"></polyline>
					<polyline points="8 6 2 12 8 18"></polyline>
				</svg>
			)
		},
		{
			company: 'Apptrade Inc.',
			position: 'IT Staff',
			type: 'Contractual',
			period: 'Apr 30 – Jul 29, 2024',
			duration: '3 Months',
			isCurrent: false,
			responsibilities: [
				'Provided technical support for software, hardware, and networking issues',
				'Assisted end-users in troubleshooting printers and network configurations',
				'Ensured smooth daily operations of IT infrastructure',
				'Installed, maintained and configured CCTV systems'
			],
			color: 'from-cyan-500 to-blue-500',
			icon: (
				<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
					<line x1="8" y1="21" x2="16" y2="21"></line>
					<line x1="12" y1="17" x2="12" y2="21"></line>
				</svg>
			)
		},
		{
			company: 'Apptrade Inc.',
			position: 'IT Intern',
			type: 'Internship',
			period: 'Feb – Apr 2024',
			duration: '300 Hours',
			isCurrent: false,
			responsibilities: [
				'Assisted in software and hardware troubleshooting',
				'Provided IT support to employees, ensuring system efficiency',
				'Assisted in CCTV installation and configuration'
			],
			color: 'from-purple-500 to-blue-500',
			icon: (
				<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
					<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
				</svg>
			)
		}
	];

	return (
		<section 
			id="experience"
			ref={sectionRef}
			className="relative py-20 sm:py-28 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900 overflow-hidden"
		>
			{/* Animated background */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
			</div>

			{/* Grid pattern */}
			<div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

			<div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
					<div className="inline-block mb-4">
						<div className="flex items-center gap-3">
							<div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400"></div>
							<span className="text-blue-400 font-mono text-sm tracking-wider">MY JOURNEY</span>
							<div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-400"></div>
						</div>
					</div>
					<h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 mb-4">
						Professional Experience
					</h2>
					<p className="text-gray-400 max-w-2xl mx-auto">
						A timeline of my professional growth and contributions
					</p>
				</div>

				{/* Timeline */}
				<div className="relative">
					{/* Vertical line */}
					<div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-cyan-500/50 to-blue-500/50"></div>

					{/* Experience Cards */}
					<div className="space-y-12">
						{experiences.map((exp, index) => (
							<div
								key={index}
								className={`relative transition-all duration-700 ${
									isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
								}`}
								style={{ transitionDelay: `${index * 150}ms` }}
								onMouseEnter={() => setActiveCard(index)}
								onMouseLeave={() => setActiveCard(null)}
							>
								<div className={`md:flex md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
									{/* Timeline dot */}
									<div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
										<div className={`w-12 h-12 rounded-full bg-gradient-to-br ${exp.color} p-0.5 shadow-lg ${activeCard === index ? 'scale-125' : 'scale-100'} transition-transform duration-300`}>
											<div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-white">
												{exp.icon}
											</div>
										</div>
									</div>

									{/* Content card */}
									<div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
										<div className="group relative">
											{/* Glow effect */}
											<div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity duration-500`}></div>
											
											{/* Card */}
											<div className="relative bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 sm:p-8 hover:border-blue-500/40 transition-all duration-500">
												{/* Current badge */}
												{exp.isCurrent && (
													<div className={`absolute top-6 ${index % 2 === 0 ? 'md:left-6' : 'md:right-6'} right-6`}>
														<div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full">
															<div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
															<span className="text-xs font-semibold text-emerald-300">CURRENT</span>
														</div>
													</div>
												)}

												{/* Company & Position */}
												<div className={`${exp.isCurrent ? 'mt-8' : ''} mb-4`}>
													<h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
														{exp.company}
													</h3>
													<h4 className={`text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r ${exp.color} mb-2`}>
														{exp.position}
													</h4>
													<div className={`flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} justify-start gap-3 flex-wrap text-sm text-gray-400`}>
														<div className="flex items-center gap-2">
															<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
																<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
																<line x1="16" y1="2" x2="16" y2="6"></line>
																<line x1="8" y1="2" x2="8" y2="6"></line>
																<line x1="3" y1="10" x2="21" y2="10"></line>
															</svg>
															<span>{exp.period}</span>
														</div>
														<div className="flex items-center gap-2">
															<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
																<circle cx="12" cy="12" r="10"></circle>
																<polyline points="12 6 12 12 16 14"></polyline>
															</svg>
															<span>{exp.duration}</span>
														</div>
														<span className={`px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} bg-opacity-20 border border-blue-500/30`}>
															{exp.type}
														</span>
													</div>
												</div>

												{/* Responsibilities */}
												<div className={`space-y-3 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left`}>
													{exp.responsibilities.map((resp, respIndex) => (
														<div 
															key={respIndex}
															className={`flex gap-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} flex-row items-start group/item`}
														>
															<div className={`flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} mt-2 group-hover/item:scale-150 transition-transform duration-300`}></div>
															<p className="text-gray-300 leading-relaxed group-hover/item:text-white transition-colors duration-300">
																{resp}
															</p>
														</div>
													))}
												</div>

												{/* Decorative corner */}
												<div className={`absolute ${index % 2 === 0 ? 'bottom-0 left-0' : 'top-0 right-0'} w-24 h-24 bg-gradient-to-${index % 2 === 0 ? 'tr' : 'bl'} ${exp.color} opacity-5 ${index % 2 === 0 ? 'rounded-tr-full' : 'rounded-bl-full'}`}></div>
											</div>
										</div>
									</div>

									{/* Empty space for alternating layout */}
									<div className="hidden md:block md:w-1/2"></div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Download Resume CTA */}
				<div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
					<a
						href="#contact"
						className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-400/50 hover:scale-105 group"
					>
						<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
							<polyline points="7 10 12 15 17 10"></polyline>
							<line x1="12" y1="15" x2="12" y2="3"></line>
						</svg>
						<span>Download Full Resume</span>
						<svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<polyline points="9 18 15 12 9 6"></polyline>
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
}