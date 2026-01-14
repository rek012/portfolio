'use client';

import { useState, useEffect, useRef } from 'react';

export default function Contact() {
	const [isVisible, setIsVisible] = useState(false);
	const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

	const contactMethods = [
		{
			title: 'Email',
			value: 'erickpascual63@gmail.com',
			href: 'mailto:erickpascual63@gmail.com',
			gradient: 'from-blue-500 to-cyan-500',
			icon: (
				<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<rect x="2" y="4" width="20" height="16" rx="2"></rect>
					<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
				</svg>
			),
			description: 'Send me an email anytime'
		},
		{
			title: 'Phone',
			value: '09179010115',
			href: 'tel:09179010115',
			gradient: 'from-purple-500 to-blue-500',
			icon: (
				<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
				</svg>
			),
			description: 'Give me a call'
		},
		{
			title: 'LinkedIn',
			value: 'Erick John Pascual',
			href: 'https://www.linkedin.com/in/erick-john-pascual/',
			gradient: 'from-cyan-500 to-emerald-500',
			icon: (
				<svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
					<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
				</svg>
			),
			description: 'Connect with me professionally'
		}
	];

	return (
		<section 
			id="contact"
			ref={sectionRef}
			className="relative py-20 sm:py-28 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900 overflow-hidden"
		>
			{/* Animated background */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
			</div>

			{/* Grid pattern */}
			<div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

			<div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
					<div className="inline-block mb-4">
						<div className="flex items-center gap-3">
							<div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400"></div>
							<span className="text-blue-400 font-mono text-sm tracking-wider">LET'S CONNECT</span>
							<div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-400"></div>
						</div>
					</div>
					<h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 mb-4">
						Get in Touch
					</h2>
					<p className="text-gray-400 max-w-2xl mx-auto text-lg">
						I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
					</p>
				</div>

				{/* Contact Methods Grid */}
				<div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
					{contactMethods.map((method, index) => (
						<a
							key={index}
							href={method.href}
							target={method.href.startsWith('http') ? '_blank' : undefined}
							rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
							className={`group relative transition-all duration-700 ${
								isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
							}`}
							style={{ transitionDelay: `${index * 100}ms` }}
							onMouseEnter={() => setHoveredCard(index)}
							onMouseLeave={() => setHoveredCard(null)}
						>
							{/* Glow effect */}
							<div className={`absolute -inset-1 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-30 blur-xl rounded-2xl transition-opacity duration-500`}></div>
							
							{/* Card */}
							<div className="relative bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 sm:p-8 hover:border-blue-500/40 transition-all duration-500 h-full flex flex-col">
								{/* Icon */}
								<div className="mb-6">
									<div className="relative inline-block">
										<div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-30 blur-lg rounded-lg`}></div>
										<div className={`relative w-14 h-14 bg-gradient-to-br ${method.gradient} rounded-lg flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
											{method.icon}
										</div>
									</div>
								</div>

								{/* Title */}
								<h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
									{method.title}
								</h3>

								{/* Description */}
								<p className="text-sm text-gray-400 mb-4">
									{method.description}
								</p>

								{/* Value */}
								<div className={`mt-auto pt-4 border-t border-blue-500/10 bg-clip-text text-transparent bg-gradient-to-r ${method.gradient} font-medium break-all`}>
									{method.value}
								</div>

								{/* Arrow indicator */}
								<div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
									<svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<line x1="5" y1="12" x2="19" y2="12"></line>
										<polyline points="12 5 19 12 12 19"></polyline>
									</svg>
								</div>

								{/* Decorative corner */}
								<div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${method.gradient} opacity-5 rounded-bl-full`}></div>
							</div>
						</a>
					))}
				</div>

				{/* Additional Social Links */}
				<div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
					<div className="bg-slate-800/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 sm:p-10">
						<div className="text-center mb-8">
							<h3 className="text-2xl font-bold text-white mb-3">
								Find Me Online
							</h3>
							<p className="text-gray-400">
								Follow me on social platforms to stay updated with my latest work
							</p>
						</div>

						<div className="flex flex-wrap justify-center gap-4">
							{[
								{ name: 'GitHub', href: 'https://github.com', icon: (
									<svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
									</svg>
								)},
								{ name: 'LinkedIn', href: 'https://www.linkedin.com/in/erick-john-pascual/', icon: (
									<svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
										<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
									</svg>
								)},
								{ name: 'Email', href: 'mailto:erickpascual63@gmail.com', icon: (
									<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<rect x="2" y="4" width="20" height="16" rx="2"></rect>
										<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
									</svg>
								)}
							].map((social, index) => (
								<a
									key={index}
									href={social.href}
									target={social.href.startsWith('http') ? '_blank' : undefined}
									rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
									className="group flex items-center gap-3 px-6 py-3 bg-slate-800/50 border border-blue-500/20 hover:border-blue-400/60 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-slate-800"
								>
									<div className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300">
										{social.icon}
									</div>
									<span className="text-gray-300 group-hover:text-white font-medium transition-colors duration-300">
										{social.name}
									</span>
								</a>
							))}
						</div>
					</div>
				</div>

				{/* Call to Action */}
				<div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
					<div className="inline-flex flex-col sm:flex-row gap-4">
						<a
							href="mailto:erickpascual63@gmail.com"
							className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-400/50 hover:scale-105 flex items-center justify-center gap-2"
						>
							<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<rect x="2" y="4" width="20" height="16" rx="2"></rect>
								<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
							</svg>
							<span>Send me a message</span>
							<svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<polyline points="9 18 15 12 9 6"></polyline>
							</svg>
						</a>
						<a
							href="#projects"
							className="px-8 py-4 border-2 border-blue-400/50 hover:border-blue-400 hover:bg-blue-400/10 text-blue-300 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm hover:scale-105 flex items-center justify-center gap-2"
						>
							<span>View My Work</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
