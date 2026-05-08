export type FileId =
	| 'README.md'
	| 'requirements.txt'
	| 'about.py'
	| 'projects.py'
	| 'skills.py'
	| 'experience.py'
	| 'contact.py';

export interface FileMeta {
	id: FileId;
	name: string;
	folder: 'root' | 'app';
	icon: 'md' | 'py' | 'txt';
	language: string;
}

export const FILES: FileMeta[] = [
	{ id: 'README.md',       name: 'README.md',       folder: 'root', icon: 'md',  language: 'Markdown' },
	{ id: 'requirements.txt', name: 'requirements.txt', folder: 'root', icon: 'txt', language: 'Pip Requirements' },
	{ id: 'about.py',        name: 'about.py',        folder: 'app',  icon: 'py',  language: 'Python' },
	{ id: 'projects.py',     name: 'projects.py',     folder: 'app',  icon: 'py',  language: 'Python' },
	{ id: 'skills.py',       name: 'skills.py',       folder: 'app',  icon: 'py',  language: 'Python' },
	{ id: 'experience.py',   name: 'experience.py',   folder: 'app',  icon: 'py',  language: 'Python' },
	{ id: 'contact.py',      name: 'contact.py',      folder: 'app',  icon: 'py',  language: 'Python' },
];

export interface SkillCategory {
	title: string;
	skills: string[];
}

export const MAIN_STACK: string[] = [
	'Django',
	'Flask',
	'FastAPI',
	'PostgreSQL',
	'Nginx',
	'Cloudflare Tunnel',
	'VPS',
	'GCP',
	'Vultr',
];

export const SKILL_CATEGORIES: SkillCategory[] = [
	{
		title: 'Backend Frameworks',
		skills: ['Django', 'Flask', 'FastAPI', 'Django REST Framework'],
	},
	{
		title: 'Languages',
		skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C/C++', 'SQL'],
	},
	{
		title: 'Frontend',
		skills: ['Next.js', 'React', 'Tailwind CSS', 'HTML5', 'CSS3'],
	},
	{
		title: 'Databases',
		skills: ['PostgreSQL', 'MySQL', 'MSSQL', 'Supabase', 'SQLite'],
	},
	{
		title: 'Infrastructure & DevOps',
		skills: [
			'Nginx',
			'Cloudflare Tunnel',
			'VPS Administration',
			'GCP',
			'Vultr',
			'Docker',
			'Linux',
			'Git / GitHub',
		],
	},
	{
		title: 'Embedded & IoT',
		skills: ['Raspberry Pi', 'Arduino', 'UART', 'I2C', 'OpenCV'],
	},
];

export interface Project {
	title: string;
	description: string;
	tags: string[];
	features: string[];
	year: string;
}

export const PROJECTS: Project[] = [
	{
		title: 'BIR Form Generation Automation',
		description:
			'Flask web application automating BIR form generation from Excel data with bulk processing and PDF output.',
		tags: ['Flask', 'Python', 'PostgreSQL', 'Supabase', 'Tailwind', 'pypdf', 'ReportLab'],
		features: [
			'Bulk generation from Excel files',
			'Company / Payor information management',
			'PDF generation (Forms 2307, 2316, Relief Sale/Purchase)',
			'Modular Flask Blueprints architecture',
		],
		year: '2026',
	},
	{
		title: 'Canteen Point of Sale System',
		description:
			'Full-stack POS with multi-user access control, real-time void requests, and sales analytics.',
		tags: ['Flask', 'Python', 'MySQL', 'Tailwind'],
		features: [
			'Multiple payment methods',
			'Real-time void approval workflow',
			'Multi-user access control',
			'Sales & employee management',
		],
		year: '2025',
	},
	{
		title: 'Smart Floating Garden (IoT)',
		description:
			'IoT system monitoring squash cultivation with image processing and real-time sensor analytics.',
		tags: ['Python', 'Raspberry Pi', 'OpenCV', 'IoT'],
		features: [
			'Real-time sensor monitoring',
			'Automated pump control & live video',
			'Crop counting & growth tracking',
			'Event logging with calendar integration',
		],
		year: '2023',
	},
	{
		title: 'Face Recognition Attendance System',
		description:
			'Automated attendance with face recognition, manual input fallback, and reporting.',
		tags: ['Flask', 'Python', 'OpenCV', 'MySQL', 'Bootstrap'],
		features: [
			'Automated face recognition',
			'Manual attendance input',
			'Comprehensive transaction logs',
			'Report generation',
		],
		year: '2023',
	},
	{
		title: 'Self-hosted Infrastructure',
		description:
			'Personal VPS-based infrastructure exposing Flask / Django apps over Cloudflare Tunnel behind Nginx.',
		tags: ['Nginx', 'Cloudflare Tunnel', 'VPS', 'Vultr', 'GCP', 'Linux'],
		features: [
			'Reverse proxy & TLS termination via Nginx',
			'Zero-trust public exposure with Cloudflare Tunnel',
			'Multi-app deployments on Vultr & GCP VMs',
			'Systemd service management & log rotation',
		],
		year: '2025',
	},
];

export interface ExperienceItem {
	company: string;
	position: string;
	type: string;
	period: string;
	current: boolean;
	bullets: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
	{
		company: 'Officium Inc.',
		position: 'Full-Stack Developer (IT Support Staff)',
		type: 'Full-time',
		period: 'Oct 2025 – Present',
		current: true,
		bullets: [
			'Develop full-stack Flask applications powering internal team workflows',
			'Build workflow automation to streamline operations and improve efficiency',
			'Integrate task management and ticketing systems (ClickUp, Freshdesk)',
		],
	},
	{
		company: 'Apptrade Inc.',
		position: 'IT OIC / Programmer',
		type: 'Contractual',
		period: 'Dec 2024 – Apr 2025',
		current: false,
		bullets: [
			'Built a Canteen POS system with Python, Flask, Tailwind, and MySQL',
			'Maintained the biometric attendance web server infrastructure',
			'Owned application deployments and ensured system updates and security',
		],
	},
];

export interface ContactMethod {
	label: string;
	value: string;
	href: string;
}

export const CONTACTS: ContactMethod[] = [
	{ label: 'email',    value: 'erickpascual63@gmail.com',           href: 'mailto:erickpascual63@gmail.com' },
	{ label: 'phone',    value: '+63 917 901 0115',                   href: 'tel:+639179010115' },
	{ label: 'github',   value: 'github.com/rek012',                  href: 'https://github.com/rek012' },
	{ label: 'linkedin', value: 'linkedin.com/in/erick-john-pascual', href: 'https://www.linkedin.com/in/erick-john-pascual/' },
];
