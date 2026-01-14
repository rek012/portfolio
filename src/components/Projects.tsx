'use client';

import { useState, useEffect, useRef } from 'react';

export default function Projects() {
	const [isVisible, setIsVisible] = useState(false);
	const [hoveredCard, setHoveredCard] = useState<number | null>(null);
	const [filter, setFilter] = useState('all');
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

	const projects = [
		{
			title: 'Smart Floating Garden using IoT',
			description: 'Implemented IoT technology for monitoring squash cultivation using image processing and real-time sensor analytics.',
			tags: ['IoT', 'Image Processing', 'Python', 'Raspberry Pi'],
			features: [
				'Real-time sensor data monitoring',
				'Automated pump control and live video streaming',
				'Sensor data visualization with statistical charts',
				'Event logging with calendar integration',
				'Automated squash flower and crop counting with growth tracking'
			],
			category: 'capstone',
			year: '2023',
			gradient: 'from-emerald-500 to-cyan-500',
			icon: (
				<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
					<path d="M21 15a1 1 0 0 0-1 1v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a1 1 0 0 0-2 0v2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-2a1 1 0 0 0-1-1Z"></path>
					<path d="M21 12h-3"></path>
					<path d="M6 12H3"></path>
				</svg>
			)
		},
		{
			title: 'Canteen Point of Sale System',
			description: 'Modern POS system with comprehensive management features, multi-user access control, and real-time operations.',
			tags: ['Python-Flask', 'Tailwind', 'MySQL', 'Real-time'],
			features: [
				'Multiple Payment Methods',
				'Real-time Void Requests',
				'Multi-User Access Control',
				'Sales & Employee Management',
				'Menu Preparation'
			],
			category: 'fullstack',
			year: '2025',
			gradient: 'from-blue-500 to-cyan-500',
			icon: (
				<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<rect x="2" y="5" width="20" height="14" rx="2"></rect>
					<line x1="2" y1="10" x2="22" y2="10"></line>
				</svg>
			)
		},
		{
			title: 'Face Recognition Attendance System',
			description: 'Automated attendance system with face recognition capabilities, manual input options, and comprehensive reporting.',
			tags: ['Python-Flask', 'MySQL', 'Bootstrap', 'CV'],
			features: [
				'Automated Face Recognition with separate App',
				'Display all attendance transactions',
				'Manual Attendance Input',
				'Report Generation'
			],
			category: 'ai',
			year: '2023',
			gradient: 'from-purple-500 to-blue-500',
			icon: (
				<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<path d="M18 20a6 6 0 0 0-12 0"></path>
					<circle cx="12" cy="10" r="4"></circle>
					<circle cx="12" cy="12" r="10"></circle>
				</svg>
			)
		},
		{
			title: 'Shop Management System',
			description: 'Barcode-based retail management system with employee tracking, stock control, and automated receipt printing.',
			tags: ['Java', 'MSSQL', 'Arduino', 'Barcode'],
			features: [
				'Employee & Stock Management',
				'Sales Reports',
				'Receipt Printing'
			],
			category: 'fullstack',
			year: '2022',
			gradient: 'from-orange-500 to-red-500',
			icon: (
				<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
					<line x1="3" y1="6" x2="21" y2="6"></line>
					<path d="M16 10a4 4 0 0 1-8 0"></path>
				</svg>
			)
		},
		{
			title: 'Barangay Residents\' System',
			description: 'Comprehensive resident management system with profile tracking, document requests, and automated printing.',
			tags: ['Visual Basic', 'MSSQL', 'Desktop'],
			features: [
				'Resident Profile Management',
				'Document Requests',
				'Document Printing'
			],
			category: 'management',
			year: '2021',
			gradient: 'from-teal-500 to-emerald-500',
			icon: (
				<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
					<circle cx="9" cy="7" r="4"></circle>
					<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
					<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
				</svg>
			)
		},
		{
			title: 'BIR Form Generation Automation',
			description: 'Flask web application automating BIR (Bureau of Internal Revenue) form generation from Excel data with bulk processing and PDF output.',
			tags: ['Flask', 'Python', 'Supabase', 'Tailwind CSS', 'pypdf', 'ReportLab', 'openpyxl'],
			features: [
				'Bulk generation from Excel file',
				'Company/Payor information management',
				'PDF generation (Forms 2307, 2316, Relief Sale/Purchase)',
				'Modular Flask Blueprints architecture'
			],
			category: 'fullstack',
			year: '2026',
			gradient: 'from-rose-500 to-pink-500',
			icon: (
				<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
					<polyline points="14 2 14 8 20 8"></polyline>
					<line x1="12" y1="13" x2="12" y2="19"></line>
					<line x1="9" y1="16" x2="15" y2="16"></line>
				</svg>
			)
		}
	];

	const categories = [
		{ id: 'all', label: 'All Projects', count: projects.length },
		{ id: 'capstone', label: 'Capstone', count: projects.filter(p => p.category === 'capstone').length },
		{ id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
		{ id: 'ai', label: 'AI/ML', count: projects.filter(p => p.category === 'ai').length },
		{ id: 'management', label: 'Management', count: projects.filter(p => p.category === 'management').length }
	];

	const filteredProjects = filter === 'all' 
		? projects 
		: projects.filter(p => p.category === filter);

	return (
		<section 
			id="projects" 
			ref={sectionRef}
			className="relative py-20 sm:py-28 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900 overflow-hidden"
		>
			{/* Animated background */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
			</div>

			{/* Grid pattern */}
			<div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
					<div className="inline-block mb-4">
						<div className="flex items-center gap-3">
							<div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400"></div>
							<span className="text-blue-400 font-mono text-sm tracking-wider">MY WORK</span>
							<div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-400"></div>
						</div>
					</div>
					<h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 mb-4">
						Featured Projects
					</h2>
					<p className="text-gray-400 max-w-2xl mx-auto">
						A collection of projects showcasing my technical skills and problem-solving abilities
					</p>
				</div>

				{/* Filter Buttons */}
				<div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
					{categories.map((cat) => (
						<button
							key={cat.id}
							onClick={() => setFilter(cat.id)}
							className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
								filter === cat.id
									? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30'
									: 'bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-800 border border-blue-500/20'
							}`}
						>
							{cat.label}
							<span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
								filter === cat.id ? 'bg-white/20' : 'bg-blue-500/20'
							}`}>
								{cat.count}
							</span>
						</button>
					))}
				</div>

				{/* Projects Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
					{filteredProjects.map((project, index) => (
						<div
							key={index}
							className={`group relative transition-all duration-700 ${
								isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
							}`}
							style={{ transitionDelay: `${(index % 6) * 100}ms` }}
							onMouseEnter={() => setHoveredCard(index)}
							onMouseLeave={() => setHoveredCard(null)}
						>
							{/* Glow effect */}
							<div className={`absolute -inset-1 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-30 blur-xl rounded-2xl transition-opacity duration-500`}></div>
							
							{/* Card */}
							<div className="relative bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-500 h-full flex flex-col">
								{/* Header */}
								<div className="flex items-start justify-between mb-4">
									{/* Icon */}
									<div className="relative">
										<div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30 blur-lg rounded-lg`}></div>
										<div className={`relative w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
											{project.icon}
										</div>
									</div>

									{/* Badges */}
									<div className="flex flex-col items-end gap-2">
										{project.category === 'capstone' && (
											<span className="text-xs bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-300 px-2 py-1 rounded-md border border-emerald-500/30 font-semibold">
												CAPSTONE
											</span>
										)}
										<span className="text-xs bg-slate-700/50 text-gray-400 px-2 py-1 rounded-md">
											{project.year}
										</span>
									</div>
								</div>

								{/* Title */}
								<h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
									{project.title}
								</h3>

								{/* Description */}
								<p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
									{project.description}
								</p>

								{/* Tags */}
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map((tag, tagIndex) => (
										<span 
											key={tagIndex}
											className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-10 border border-blue-500/20 text-blue-300 hover:border-blue-500/40 transition-colors duration-300`}
										>
											{tag}
										</span>
									))}
								</div>

								{/* Features */}
								<div className="space-y-2 mb-4">
									{project.features.slice(0, 3).map((feature, featureIndex) => (
										<div 
											key={featureIndex}
											className="flex items-start gap-2 text-sm text-gray-400 group/item"
										>
											<div className={`flex-shrink-0 w-1 h-1 rounded-full bg-gradient-to-r ${project.gradient} mt-2 group-hover/item:scale-150 transition-transform duration-300`}></div>
											<span className="group-hover/item:text-gray-300 transition-colors duration-300">
												{feature}
											</span>
										</div>
									))}
									{project.features.length > 3 && (
										<div className="text-xs text-blue-400 ml-3">
											+{project.features.length - 3} more features
										</div>
									)}
								</div>

								{/* View Details Link */}
								<div className="mt-auto pt-4 border-t border-blue-500/10">
									<button className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 font-medium group/link transition-colors duration-300">
										<span>View Details</span>
										<svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
											<polyline points="9 18 15 12 9 6"></polyline>
										</svg>
									</button>
								</div>

								{/* Decorative corner */}
								<div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${project.gradient} opacity-5 rounded-tl-full`}></div>
							</div>
						</div>
					))}
				</div>

				{/* View All Projects CTA */}
				<div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
					<a
						href="#contact"
						className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-400/50 hover:scale-105 group"
					>
						<span>Want to see more?</span>
						<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<polyline points="9 18 15 12 9 6"></polyline>
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
}