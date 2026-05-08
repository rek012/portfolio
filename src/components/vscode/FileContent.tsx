'use client';

import {
	CONTACTS,
	EXPERIENCE,
	MAIN_STACK,
	PROJECTS,
	SKILL_CATEGORIES,
	type FileId,
} from '@/lib/portfolio-data';
import type { ReactNode } from 'react';

/* -------------------------------------------------------------------------
 * Editor scaffolding: line numbers + content
 * ------------------------------------------------------------------------- */

function CodeFrame({ children }: { children: ReactNode[] }) {
	return (
		<div className="flex code-font">
			<div className="vsc-line-numbers shrink-0 pt-1">
				{children.map((_, i) => (
					<div key={i}>{i + 1}</div>
				))}
			</div>
			<div className="flex-1 min-w-0 pt-1 pl-2 pr-4">
				{children.map((line, i) => (
					<div key={i} className="whitespace-pre-wrap break-words">
						{line || '\u00A0'}
					</div>
				))}
			</div>
		</div>
	);
}

/* Python token helpers (Dark+ palette) */
const K  = (s: string) => <span className="tok-keyword">{s}</span>;   // import, from, def, class, return, async
const C  = (s: string) => <span className="tok-control">{s}</span>;   // if, for, while, yield (purple)
const S  = (s: string) => <span className="tok-string">{s}</span>;    // strings
const N  = (s: string) => <span className="tok-number">{s}</span>;    // numbers
const Cm = (s: string) => <span className="tok-comment">{s}</span>;   // # comments
const Fn = (s: string) => <span className="tok-function">{s}</span>;  // function names
const V  = (s: string) => <span className="tok-variable">{s}</span>;  // variables / params
const T  = (s: string) => <span className="tok-type">{s}</span>;      // class names / types
const P  = (s: string) => <span className="tok-punct">{s}</span>;     // : , ; .
const B  = (s: string) => <span className="tok-bracket">{s}</span>;   // [ ] ( ) { }

/* -------------------------------------------------------------------------
 * README.md
 * ------------------------------------------------------------------------- */

function ReadmeFile() {
	return (
		<div className="vsc-fade-in mx-auto max-w-3xl px-6 sm:px-10 py-10">
			<div className="mb-2 text-[var(--vsc-fg-muted)] text-xs uppercase tracking-wider code-font">
				preview · README.md
			</div>

			<h1 className="text-4xl sm:text-5xl font-semibold text-white mb-3">
				Erick John Pascual
			</h1>
			<p className="text-[var(--vsc-fg-soft)] text-lg mb-6">
				Python Full-Stack Developer · Computer Engineer
			</p>

			<div className="flex flex-wrap gap-2 mb-8">
				{MAIN_STACK.map((t) => (
					<span key={t} className="vsc-badge">{t}</span>
				))}
			</div>

			<h2 className="text-xl font-semibold text-white mt-8 mb-3 border-b border-[var(--vsc-separator)] pb-2">
				About
			</h2>
			<p className="text-[var(--vsc-fg-soft)] leading-relaxed mb-4">
				I build production web services and automation tooling — primarily with{' '}
				<span className="tok-type">Python</span> (
				<span className="tok-keyword">Django</span>,{' '}
				<span className="tok-keyword">Flask</span>,{' '}
				<span className="tok-keyword">FastAPI</span>) backed by{' '}
				<span className="tok-keyword">PostgreSQL</span> and deployed on{' '}
				<span className="tok-keyword">VPS</span> infrastructure (
				<span className="tok-string">Vultr</span>,{' '}
				<span className="tok-string">GCP</span>) behind{' '}
				<span className="tok-keyword">Nginx</span> and{' '}
				<span className="tok-keyword">Cloudflare Tunnel</span>.
			</p>

			<h2 className="text-xl font-semibold text-white mt-8 mb-3 border-b border-[var(--vsc-separator)] pb-2">
				Quick Start
			</h2>
			<pre className="vsc-card p-4 code-font overflow-x-auto vsc-scroll">
				<div><span className="tok-comment"># activate virtualenv and explore the modules</span></div>
				<div><span className="tok-control">$</span> python -m portfolio app/about.py</div>
				<div><span className="tok-control">$</span> python -m portfolio app/projects.py</div>
				<div><span className="tok-control">$</span> python -m portfolio app/skills.py</div>
				<div><span className="tok-control">$</span> python -m portfolio app/experience.py</div>
				<div><span className="tok-control">$</span> python -m portfolio app/contact.py</div>
			</pre>

			<h2 className="text-xl font-semibold text-white mt-8 mb-3 border-b border-[var(--vsc-separator)] pb-2">
				Get in Touch
			</h2>
			<div className="flex flex-wrap gap-3">
				<a className="vsc-btn" href={CONTACTS[0].href}>Email Me</a>
				<a
					className="vsc-btn vsc-btn-secondary"
					href={CONTACTS[2].href}
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub
				</a>
				<a
					className="vsc-btn vsc-btn-secondary"
					href={CONTACTS[3].href}
					target="_blank"
					rel="noopener noreferrer"
				>
					LinkedIn
				</a>
			</div>
		</div>
	);
}

/* -------------------------------------------------------------------------
 * requirements.txt
 * ------------------------------------------------------------------------- */

function RequirementsFile() {
	const reqs: Array<[string, string]> = [
		['django', '5.0.*'],
		['flask', '3.0.*'],
		['fastapi', '0.115.*'],
		['uvicorn[standard]', '0.32.*'],
		['gunicorn', '23.0.*'],
		['psycopg[binary]', '3.2.*'],
		['sqlalchemy', '2.0.*'],
		['alembic', '1.13.*'],
		['pydantic', '2.9.*'],
		['httpx', '0.27.*'],
		['python-dotenv', '1.0.*'],
		['celery', '5.4.*'],
		['redis', '5.0.*'],
		['openpyxl', '3.1.*'],
		['reportlab', '4.2.*'],
		['pypdf', '5.0.*'],
		['opencv-python', '4.10.*'],
	];

	const lines: ReactNode[] = [
		<>{Cm('# pinned production dependencies')}</>,
		<>{Cm('# install with: pip install -r requirements.txt')}</>,
		<>{' '}</>,
	];
	reqs.forEach(([pkg, ver]) => {
		lines.push(
			<>
				<span className="tok-attr">{pkg}</span>
				{P('==')}
				<span className="tok-string">{ver}</span>
			</>,
		);
	});
	return <CodeFrame>{lines}</CodeFrame>;
}

/* -------------------------------------------------------------------------
 * about.py
 * ------------------------------------------------------------------------- */

function AboutFile() {
	const lines: ReactNode[] = [
		<>{Cm('# about.py — who I am')}</>,
		<>{K('from')} dataclasses {K('import')} dataclass{P(',')} field</>,
		<>{' '}</>,
		<>@{Fn('dataclass')}</>,
		<>{K('class')} {T('Developer')}{P(':')}</>,
		<>{'    '}{V('name')}{P(':')} {T('str')} {P('=')} {S('"Erick John Pascual"')}</>,
		<>{'    '}{V('role')}{P(':')} {T('str')} {P('=')} {S('"Python Full-Stack Developer"')}</>,
		<>{'    '}{V('focus')}{P(':')} {T('str')} {P('=')} {S('"Django · Flask · FastAPI · self-hosted infra"')}</>,
		<>{'    '}{V('location')}{P(':')} {T('str')} {P('=')} {S('"Philippines 🇵🇭"')}</>,
		<>{'    '}{V('education')}{P(':')} {T('list')}{P('[')}{T('dict')}{P(']')} {P('=')} {Fn('field')}{B('(')}{V('default_factory')}{P('=')}{K('lambda')}{P(':')} {B('[')}</>,
		<>{'        '}{B('{')}{S('"school"')}{P(':')} {S('"Rizal Technological University"')}{P(',')} {S('"degree"')}{P(':')} {S('"BS Computer Engineering"')}{P(',')} {S('"years"')}{P(':')} {S('"2020–2025"')}{B('}')}{P(',')}</>,
		<>{'        '}{B('{')}{S('"school"')}{P(':')} {S('"Daehan College of Business and Technology"')}{P(',')} {S('"strand"')}{P(':')} {S('"ICT"')}{P(',')} {S('"years"')}{P(':')} {S('"2017–2019"')}{B('}')}{P(',')}</>,
		<>{'    '}{B('])')}</>,
		<>{'    '}{V('philosophy')}{P(':')} {T('str')} {P('=')} {S('"Ship reliable software. Own the whole stack."')}</>,
		<>{' '}</>,
		<>{Cm('"""')}</>,
		<>{Cm('I’m a Computer Engineering grad who loves building end-to-end:')}</>,
		<>{Cm('  • Python backends with Django, Flask, FastAPI')}</>,
		<>{Cm('  • PostgreSQL data models and migrations')}</>,
		<>{Cm('  • Nginx + Cloudflare Tunnel for safe public exposure')}</>,
		<>{Cm('  • VPS deployments on Vultr and GCP')}</>,
		<>{Cm('"""')}</>,
		<>{' '}</>,
		<>{C('if')} __name__ {P('==')} {S('"__main__"')}{P(':')}</>,
		<>{'    '}{Fn('print')}{B('(')}{T('Developer')}{B('())')}</>,
	];
	return <CodeFrame>{lines}</CodeFrame>;
}

/* -------------------------------------------------------------------------
 * skills.py
 * ------------------------------------------------------------------------- */

function SkillsFile() {
	return (
		<div className="vsc-fade-in p-6 sm:p-10">
			<div className="mb-2 text-[var(--vsc-fg-muted)] text-xs uppercase tracking-wider code-font">
				preview · skills.py
			</div>

			<h2 className="text-2xl font-semibold text-white mb-2 code-font">
				<span className="tok-variable">stack</span>{' '}
				<span className="tok-punct">:</span>{' '}
				<span className="tok-type">list</span>
				<span className="tok-bracket">[</span>
				<span className="tok-type">str</span>
				<span className="tok-bracket">]</span>{' '}
				<span className="tok-punct">=</span>{' '}
				<span className="tok-bracket">[ ]</span>
			</h2>
			<p className="text-[var(--vsc-fg-dim)] mb-8 code-font text-sm">
				# main tech stack first, then everything else
			</p>

			{/* Main stack */}
			<div className="vsc-card p-5 mb-8">
				<div className="flex items-center justify-between mb-4">
					<h3 className="text-lg font-semibold text-white code-font">
						<span className="tok-keyword">class</span>{' '}
						<span className="tok-type">MainStack</span>
						<span className="tok-punct">:</span>
					</h3>
					<span className="vsc-badge">{MAIN_STACK.length} items</span>
				</div>
				<div className="flex flex-wrap gap-2">
					{MAIN_STACK.map((s) => (
						<span
							key={s}
							className="px-3 py-1.5 rounded-md bg-[var(--vsc-list-active)] text-white text-sm code-font border border-[var(--vsc-accent)]"
						>
							{s}
						</span>
					))}
				</div>
			</div>

			{/* Other categories */}
			<div className="grid sm:grid-cols-2 gap-4">
				{SKILL_CATEGORIES.map((cat) => (
					<div key={cat.title} className="vsc-card p-4">
						<div className="flex items-center justify-between mb-3">
							<h4 className="text-sm font-semibold text-[var(--vsc-fg)] code-font">
								<span className="tok-keyword">class</span>{' '}
								<span className="tok-type">{cat.title.replace(/\s+/g, '')}</span>
								<span className="tok-punct">:</span>
							</h4>
							<span className="text-xs text-[var(--vsc-fg-muted)] code-font">
								{cat.skills.length}
							</span>
						</div>
						<div className="flex flex-wrap gap-1.5">
							{cat.skills.map((s) => (
								<span
									key={s}
									className="text-xs code-font px-2 py-1 rounded bg-[var(--vsc-input)] text-[var(--vsc-variable)] border border-transparent hover:border-[var(--vsc-accent)] transition-colors"
								>
									{s}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

/* -------------------------------------------------------------------------
 * projects.py
 * ------------------------------------------------------------------------- */

function ProjectsFile() {
	return (
		<div className="vsc-fade-in p-6 sm:p-10">
			<div className="mb-2 text-[var(--vsc-fg-muted)] text-xs uppercase tracking-wider code-font">
				preview · projects.py
			</div>

			<h2 className="text-2xl font-semibold text-white mb-2 code-font">
				<span className="tok-variable">PROJECTS</span>
				<span className="tok-punct">:</span>{' '}
				<span className="tok-type">list</span>
				<span className="tok-bracket">[</span>
				<span className="tok-type">Project</span>
				<span className="tok-bracket">]</span>{' '}
				<span className="tok-punct">=</span>{' '}
				<span className="tok-bracket">[</span>
			</h2>
			<p className="text-[var(--vsc-fg-dim)] mb-6 code-font text-sm">
				# {PROJECTS.length} entries · most recent first
			</p>

			<div className="grid lg:grid-cols-2 gap-4">
				{PROJECTS.map((p) => (
					<article key={p.title} className="vsc-card p-5 flex flex-col">
						<header className="flex items-start justify-between gap-3 mb-2">
							<h3 className="text-lg font-semibold text-white">
								{p.title}
							</h3>
							<span className="vsc-badge shrink-0">{p.year}</span>
						</header>
						<p className="text-sm text-[var(--vsc-fg-soft)] mb-3 leading-relaxed">
							{p.description}
						</p>

						<div className="flex flex-wrap gap-1.5 mb-3">
							{p.tags.map((tag) => (
								<span
									key={tag}
									className="text-xs code-font px-2 py-0.5 rounded bg-[var(--vsc-input)] text-[var(--vsc-variable)]"
								>
									{tag}
								</span>
							))}
						</div>

						<ul className="text-sm text-[var(--vsc-fg-dim)] space-y-1 mt-auto">
							{p.features.map((f) => (
								<li key={f} className="flex gap-2">
									<span className="tok-comment shrink-0">▸</span>
									<span>{f}</span>
								</li>
							))}
						</ul>
					</article>
				))}
			</div>

			<p className="mt-6 code-font text-[var(--vsc-fg-muted)]">
				<span className="tok-bracket">]</span>
			</p>
		</div>
	);
}

/* -------------------------------------------------------------------------
 * experience.py
 * ------------------------------------------------------------------------- */

function ExperienceFile() {
	return (
		<div className="vsc-fade-in p-6 sm:p-10">
			<div className="mb-2 text-[var(--vsc-fg-muted)] text-xs uppercase tracking-wider code-font">
				preview · experience.py
			</div>

			<h2 className="text-2xl font-semibold text-white mb-2 code-font">
				<span className="tok-variable">EXPERIENCE</span>
				<span className="tok-punct">:</span>{' '}
				<span className="tok-type">list</span>
				<span className="tok-bracket">[</span>
				<span className="tok-type">Role</span>
				<span className="tok-bracket">]</span>{' '}
				<span className="tok-punct">=</span>{' '}
				<span className="tok-bracket">[</span>
			</h2>
			<p className="text-[var(--vsc-fg-dim)] mb-6 code-font text-sm">
				# developer-relevant roles only
			</p>

			<ol className="space-y-4">
				{EXPERIENCE.map((e) => (
					<li key={`${e.company}-${e.period}`} className="vsc-card p-5">
						<div className="flex flex-wrap items-start justify-between gap-3 mb-2">
							<div>
								<h3 className="text-lg font-semibold text-white">
									{e.position}{' '}
									<span className="tok-comment text-base">
										@ {e.company}
									</span>
								</h3>
								<p className="text-xs code-font text-[var(--vsc-fg-muted)] mt-1">
									{e.period} · {e.type}
								</p>
							</div>
							{e.current && (
								<span
									className="vsc-badge"
									style={{
										background: 'rgba(46, 160, 67, 0.2)',
										color: '#7ee787',
										borderColor: 'rgba(46, 160, 67, 0.4)',
									}}
								>
									● current
								</span>
							)}
						</div>
						<ul className="text-sm text-[var(--vsc-fg-soft)] space-y-1.5 mt-3">
							{e.bullets.map((b) => (
								<li key={b} className="flex gap-2">
									<span className="tok-keyword shrink-0">{'>'}</span>
									<span>{b}</span>
								</li>
							))}
						</ul>
					</li>
				))}
			</ol>

			<p className="mt-6 code-font text-[var(--vsc-fg-muted)]">
				<span className="tok-bracket">]</span>
			</p>
		</div>
	);
}

/* -------------------------------------------------------------------------
 * contact.py
 * ------------------------------------------------------------------------- */

function ContactFile() {
	const lines: ReactNode[] = [
		<>{Cm('# contact.py — reach me through any channel below')}</>,
		<>{K('from')} typing {K('import')} {T('TypedDict')}</>,
		<>{' '}</>,
		<>{K('class')} {T('Channel')}{B('(')}{T('TypedDict')}{B(')')}{P(':')}</>,
		<>{'    '}{V('label')}{P(':')} {T('str')}</>,
		<>{'    '}{V('value')}{P(':')} {T('str')}</>,
		<>{'    '}{V('href')}{P(':')} {T('str')}</>,
		<>{' '}</>,
		<>{K('def')} {Fn('contact')}{B('()')} {P('->')} {T('list')}{B('[')}{T('Channel')}{B(']')}{P(':')}</>,
		<>{'    '}{K('return')} {B('[')}</>,
	];

	CONTACTS.forEach((c) => {
		lines.push(
			<>
				{'        '}
				{B('{')}
				{S('"label"')}
				{P(':')} {S(`"${c.label}"`)}
				{P(',')} {S('"value"')}
				{P(':')}{' '}
				<a
					className="tok-link tok-string"
					href={c.href}
					target={c.href.startsWith('http') ? '_blank' : undefined}
					rel="noopener noreferrer"
				>
					{`"${c.value}"`}
				</a>
				{P(',')} {S('"href"')}
				{P(':')} {S(`"${c.href}"`)}
				{B('}')}
				{P(',')}
			</>,
		);
	});

	lines.push(<>{'    '}{B(']')}</>);
	lines.push(<>{' '}</>);
	lines.push(<>{Cm('# I usually reply within 24 hours.')}</>);

	return (
		<>
			<CodeFrame>{lines}</CodeFrame>
			<div className="px-6 sm:px-10 pb-10 mt-6 grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
				{CONTACTS.map((c) => (
					<a
						key={c.label}
						href={c.href}
						target={c.href.startsWith('http') ? '_blank' : undefined}
						rel="noopener noreferrer"
						className="vsc-card p-4 flex items-center justify-between hover:translate-y-[-1px] transition-transform"
					>
						<div>
							<div className="code-font text-xs text-[var(--vsc-fg-muted)] uppercase tracking-wider">
								{c.label}
							</div>
							<div className="text-[var(--vsc-fg-soft)] text-sm code-font mt-1 break-all">
								{c.value}
							</div>
						</div>
						<span className="text-[var(--vsc-accent)] code-font text-sm">→</span>
					</a>
				))}
			</div>
		</>
	);
}

/* -------------------------------------------------------------------------
 * Router
 * ------------------------------------------------------------------------- */

export function FileContent({ id }: { id: FileId }) {
	switch (id) {
		case 'README.md':       return <ReadmeFile />;
		case 'requirements.txt': return <RequirementsFile />;
		case 'about.py':        return <AboutFile />;
		case 'projects.py':     return <ProjectsFile />;
		case 'skills.py':       return <SkillsFile />;
		case 'experience.py':   return <ExperienceFile />;
		case 'contact.py':      return <ContactFile />;
	}
}
