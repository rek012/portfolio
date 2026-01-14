'use client';

import { useState, useEffect } from 'react';


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const target = document.querySelector(targetId);
    if (target) {
      // Get the actual navbar height dynamically
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 80;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <>
      <nav 
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'py-3 bg-slate-900/95 backdrop-blur-xl shadow-lg shadow-blue-500/10' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo with animated glow */}
            <a href="#hero" onClick={(e) => handleSmoothScroll(e, '#hero')} className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center transform group-hover:rotate-180 transition-transform duration-500">
                  <span className="text-white font-bold text-sm">EJ</span>
                </div>
                <span className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 hidden sm:block">
                  Erick John Pascual
                </span>
              </div>
            </a>

            {/* Desktop Navigation - Hidden on mobile, shows on md+ */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="group relative px-4 py-2 text-gray-300 hover:text-blue-300 transition-colors duration-300 cursor-pointer"
                  style={{ 
                    animation: `slideDown 0.5s ease-out ${index * 0.1}s backwards` 
                  }}
                >
                  <span className="relative z-10">{link.label}</span>
                  <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 rounded-lg transition-colors duration-300"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-3/4 transition-all duration-300"></div>
                </a>
              ))}
              
              {/* CTA Button */}
              <a
                href="#hero"
                onClick={(e) => handleSmoothScroll(e, '#hero')}
                className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-400/50 hover:scale-105 cursor-pointer"
                style={{ animation: 'slideDown 0.5s ease-out 0.5s backwards' }}
              >
                Hire Me
              </a>
            </div>

            {/* Tablet Navigation - Shows on sm to md */}
            <div className="hidden sm:flex md:hidden items-center gap-1">
              {navLinks.slice(0, 3).map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="group relative px-3 py-2 text-sm text-gray-300 hover:text-blue-300 transition-colors duration-300 cursor-pointer"
                >
                  <span className="relative z-10">{link.label}</span>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-3/4 transition-all duration-300"></div>
                </a>
              ))}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="ml-2 p-2 rounded-lg border border-blue-400/30 hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </button>
            </div>

            {/* Mobile Toggle - Shows only on small screens */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="sm:hidden p-2 rounded-lg border border-blue-400/30 hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300"
            >
              <div className="w-5 h-5 flex flex-col justify-center gap-1">
                <span className={`h-0.5 bg-blue-400 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`h-0.5 bg-blue-400 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`h-0.5 bg-blue-400 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile/Tablet Dropdown Menu */}
      <div 
        className={`fixed top-16 right-4 md:hidden z-40 transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-blue-400/20 shadow-2xl shadow-blue-500/20 overflow-hidden">
          <div className="p-2">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="block px-6 py-3 text-gray-300 hover:text-blue-300 hover:bg-blue-400/10 rounded-lg transition-all duration-300 cursor-pointer"
                style={{
                  animation: isMobileMenuOpen ? `slideIn 0.3s ease-out ${index * 0.05}s backwards` : 'none'
                }}
              >
                <span className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                  {link.label}
                </span>
              </a>
            ))}
            <div className="my-2 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
            <a
              href="#hero"
              onClick={(e) => handleSmoothScroll(e, '#hero')}
              className="block mx-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-center rounded-lg font-medium transition-all duration-300 shadow-lg shadow-blue-500/30 cursor-pointer"
              style={{
                animation: isMobileMenuOpen ? 'slideIn 0.3s ease-out 0.25s backwards' : 'none'
              }}
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}