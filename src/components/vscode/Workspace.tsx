'use client';

import { useState } from 'react';
import { FILES, type FileId } from '@/lib/portfolio-data';
import { FileContent } from './FileContent';
import {
	ChevronIcon,
	CloseIcon,
	FileIconFor,
	FolderIcon,
	activityIcon,
} from './Icons';

const DEFAULT_TAB: FileId = 'README.md';

export default function Workspace() {
	const [openTabs, setOpenTabs] = useState<FileId[]>([DEFAULT_TAB]);
	const [activeTab, setActiveTab] = useState<FileId>(DEFAULT_TAB);
	const [activeView, setActiveView] = useState<'explorer' | 'search' | 'git' | 'debug' | 'ext' | 'none'>('explorer');
	const [appOpen, setAppOpen] = useState(true);
	const [sidebarOpen, setSidebarOpen] = useState(true);

	const openFile = (id: FileId) => {
		setOpenTabs((tabs) => (tabs.includes(id) ? tabs : [...tabs, id]));
		setActiveTab(id);
	};

	const closeTab = (id: FileId, e: React.MouseEvent) => {
		e.stopPropagation();
		setOpenTabs((tabs) => {
			const next = tabs.filter((t) => t !== id);
			if (id === activeTab && next.length > 0) {
				setActiveTab(next[next.length - 1]);
			} else if (next.length === 0) {
				setActiveTab(DEFAULT_TAB);
				return [DEFAULT_TAB];
			}
			return next;
		});
	};

	const activeMeta = FILES.find((f) => f.id === activeTab) ?? FILES[0];

	const rootFiles = FILES.filter((f) => f.folder === 'root');
	const appFiles = FILES.filter((f) => f.folder === 'app');

	return (
		<div className="h-screen w-screen flex flex-col bg-[var(--vsc-bg)] text-[var(--vsc-fg)] overflow-hidden">
			{/* ============== Title bar ============== */}
			<header
				className="h-8 shrink-0 flex items-center justify-between px-3 select-none"
				style={{ background: 'var(--vsc-titlebar)' }}
			>
				<div className="flex items-center gap-2">
					<div className="flex gap-1.5">
						<span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
						<span className="w-3 h-3 rounded-full bg-[#febc2e]" />
						<span className="w-3 h-3 rounded-full bg-[#28c840]" />
					</div>
					<span className="ml-3 text-xs text-[var(--vsc-fg-soft)] hidden sm:inline">
						File   Edit   Selection   View   Go   Run   Terminal   Help
					</span>
				</div>
				<div className="text-xs text-[var(--vsc-fg-dim)] truncate max-w-[60%] text-center">
					{activeMeta.name} — portfolio — Visual Studio Code
				</div>
				<div className="text-xs text-[var(--vsc-fg-dim)] hidden sm:flex gap-3">
					<span>—</span>
					<span>▢</span>
					<span>×</span>
				</div>
			</header>

			{/* ============== Body ============== */}
			<div className="flex-1 flex min-h-0">
				{/* Activity bar */}
				<nav
					className="w-12 shrink-0 flex flex-col items-center justify-between py-2"
					style={{ background: 'var(--vsc-activitybar)' }}
					aria-label="Activity bar"
				>
					<div className="flex flex-col gap-1">
						{(['explorer', 'search', 'git', 'debug', 'ext'] as const).map((v) => (
							<button
								key={v}
								onClick={() => {
									if (activeView === v && sidebarOpen) {
										setSidebarOpen(false);
									} else {
										setActiveView(v);
										setSidebarOpen(true);
									}
								}}
								className={`w-12 h-12 flex items-center justify-center transition-colors relative ${
									activeView === v && sidebarOpen
										? 'text-white'
										: 'text-[var(--vsc-fg-dim)] hover:text-white'
								}`}
								aria-label={v}
								title={v}
							>
								{activeView === v && sidebarOpen && (
									<span className="absolute left-0 top-0 bottom-0 w-0.5 bg-white" />
								)}
								{activityIcon(v)}
							</button>
						))}
					</div>
					<div className="flex flex-col gap-1">
						{(['account', 'settings'] as const).map((v) => (
							<button
								key={v}
								className="w-12 h-12 flex items-center justify-center text-[var(--vsc-fg-dim)] hover:text-white"
								aria-label={v}
								title={v}
							>
								{activityIcon(v)}
							</button>
						))}
					</div>
				</nav>

				{/* Sidebar (Explorer) */}
				{sidebarOpen && (
					<aside
						className="w-60 shrink-0 hidden md:flex flex-col vsc-scroll overflow-y-auto"
						style={{ background: 'var(--vsc-sidebar)' }}
						aria-label="Sidebar"
					>
						<div className="px-4 py-2 text-[11px] uppercase tracking-wider text-[var(--vsc-fg-dim)] font-semibold flex items-center justify-between">
							<span>Explorer</span>
							<span className="code-font">···</span>
						</div>

						{activeView === 'explorer' && (
							<>
								<div className="px-3 py-1 text-[11px] uppercase tracking-wider text-[var(--vsc-fg-soft)] font-semibold flex items-center gap-1">
									<ChevronIcon open />
									<span>portfolio</span>
								</div>

								{/* Root files */}
								{rootFiles.map((f) => (
									<button
										key={f.id}
										onClick={() => openFile(f.id)}
										className={`vsc-list-item w-full text-left ${activeTab === f.id ? 'active' : ''}`}
										style={{ paddingLeft: 24 }}
									>
										<FileIconFor meta={f} />
										<span>{f.name}</span>
									</button>
								))}

								{/* app folder */}
								<button
									onClick={() => setAppOpen((o) => !o)}
									className="w-full flex items-center gap-1 px-3 py-0.5 text-[var(--vsc-fg-soft)] hover:bg-[var(--vsc-hover)] text-[13px]"
									style={{ paddingLeft: 16 }}
								>
									<ChevronIcon open={appOpen} />
									<FolderIcon open={appOpen} className="w-4 h-4" />
									<span>app</span>
								</button>

								{appOpen &&
									appFiles.map((f) => (
										<button
											key={f.id}
											onClick={() => openFile(f.id)}
											className={`vsc-list-item w-full text-left ${activeTab === f.id ? 'active' : ''}`}
											style={{ paddingLeft: 38 }}
										>
											<FileIconFor meta={f} />
											<span>{f.name}</span>
										</button>
									))}
							</>
						)}

						{activeView === 'search' && (
							<div className="p-3 text-sm text-[var(--vsc-fg-dim)]">
								<input
									type="text"
									placeholder="Search"
									className="w-full px-2 py-1 bg-[var(--vsc-input)] text-[var(--vsc-fg)] text-sm rounded-sm border border-transparent focus:border-[var(--vsc-accent)] outline-none"
								/>
								<p className="mt-3 text-xs">No results yet. Type to search.</p>
							</div>
						)}

						{activeView === 'git' && (
							<div className="p-3 text-sm text-[var(--vsc-fg-dim)]">
								<p className="text-[var(--vsc-fg-soft)] mb-1">Source Control</p>
								<p className="text-xs">Branch: <span className="tok-string">main</span></p>
								<p className="text-xs mt-2 tok-success" style={{ color: 'var(--vsc-success)' }}>
									✓ Working tree clean
								</p>
							</div>
						)}

						{activeView === 'debug' && (
							<div className="p-3 text-sm text-[var(--vsc-fg-dim)]">
								<p>No debug sessions.</p>
							</div>
						)}

						{activeView === 'ext' && (
							<div className="p-3 text-sm text-[var(--vsc-fg-dim)]">
								<p className="text-[var(--vsc-fg-soft)] mb-2">Installed</p>
								<ul className="space-y-1 text-xs">
									<li>Python · ms-python</li>
									<li>Pylance</li>
									<li>Tailwind CSS IntelliSense</li>
									<li>GitLens</li>
									<li>Docker</li>
								</ul>
							</div>
						)}
					</aside>
				)}

				{/* Editor area */}
				<main className="flex-1 min-w-0 flex flex-col">
					{/* Mobile file picker */}
					<div className="md:hidden border-b border-[var(--vsc-separator)] p-2 flex gap-1 overflow-x-auto vsc-scroll" style={{ background: 'var(--vsc-sidebar)' }}>
						{FILES.map((f) => (
							<button
								key={f.id}
								onClick={() => openFile(f.id)}
								className={`shrink-0 px-3 py-1.5 text-xs rounded ${
									activeTab === f.id
										? 'bg-[var(--vsc-list-active)] text-white'
										: 'text-[var(--vsc-fg-soft)] bg-[var(--vsc-input)]'
								}`}
							>
								{f.name}
							</button>
						))}
					</div>

					{/* Tab bar */}
					<div className="hidden md:flex shrink-0 border-b border-[var(--vsc-separator)] overflow-x-auto vsc-scroll" style={{ background: '#252526' }}>
						{openTabs.map((id) => {
							const meta = FILES.find((f) => f.id === id)!;
							const isActive = id === activeTab;
							return (
								<div
									key={id}
									className={`vsc-tab ${isActive ? 'active' : ''}`}
									onClick={() => setActiveTab(id)}
								>
									<FileIconFor meta={meta} />
									<span>{meta.name}</span>
									<button
										onClick={(e) => closeTab(id, e)}
										className="ml-1 p-0.5 rounded hover:bg-[var(--vsc-hover)] text-[var(--vsc-fg-dim)] hover:text-white"
										aria-label={`close ${meta.name}`}
									>
										<CloseIcon />
									</button>
								</div>
							);
						})}
					</div>

					{/* Breadcrumbs */}
					<div className="hidden md:flex shrink-0 px-4 py-1 text-xs text-[var(--vsc-fg-dim)] code-font border-b border-[var(--vsc-separator)] gap-1">
						<span>portfolio</span>
						{activeMeta.folder !== 'root' && <><span>›</span><span>{activeMeta.folder}</span></>}
						<span>›</span>
						<span className="text-[var(--vsc-fg-soft)]">{activeMeta.name}</span>
					</div>

					{/* Editor body */}
					<section
						className="flex-1 min-h-0 overflow-y-auto vsc-editor-scroll"
						style={{ background: 'var(--vsc-editor)' }}
						aria-label={`Editor: ${activeMeta.name}`}
					>
						<FileContent id={activeTab} />
					</section>
				</main>
			</div>

			{/* ============== Status bar ============== */}
			<footer
				className="h-6 shrink-0 flex items-center justify-between px-3 text-xs text-white/90"
				style={{ background: 'var(--vsc-statusbar)' }}
			>
				<div className="flex items-center gap-4">
					<span className="flex items-center gap-1">
						<svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
							<circle cx="6" cy="6" r="2" />
							<circle cx="6" cy="18" r="2" />
							<circle cx="18" cy="12" r="2" />
							<path d="M6 8v8M8 6h7a3 3 0 013 3v1" />
						</svg>
						main
					</span>
					<span>0 ⚠ 0 ⓧ</span>
				</div>
				<div className="flex items-center gap-4">
					<span className="hidden sm:inline">Ln 1, Col 1</span>
					<span className="hidden sm:inline">UTF-8</span>
					<span>{activeMeta.language}</span>
				</div>
			</footer>
		</div>
	);
}
