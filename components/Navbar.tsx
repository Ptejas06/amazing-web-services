'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Our Services', href: '#services' },
  { label: 'Domain Expertise', href: '#domain-expertise' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Why Choose Us', href: '#why-choose-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 backdrop-blur-md border-b ${
        scrolled
          ? 'bg-midnight-900/90 border-emerald-500/25 shadow-xl shadow-midnight-950/40'
          : 'bg-midnight-950/75 border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* CSS/SVG Geometric Connected-Node & Cloud Logo */}
        <a href="#top" className="flex items-center gap-3.5 group focus:outline-none">
          <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500/20 via-teal-500/15 to-midnight-900 border border-emerald-400/40 flex items-center justify-center shadow-lg group-hover:border-emerald-400 transition-colors">
            <svg
              width="28"
              height="28"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Amazing Web Services Logo"
            >
              <defs>
                <linearGradient id="awsLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#34D399" />
                  <stop offset="50%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
              {/* Hexagonal Enterprise Shield */}
              <path
                d="M18 3L31 10.5V25.5L18 33L5 25.5V10.5L18 3Z"
                stroke="url(#awsLogoGrad)"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="rgba(16, 185, 129, 0.08)"
              />
              {/* Connected Cloud & Neural Node Contour */}
              <path
                d="M11 21.5C9.3 21.5 8 20.2 8 18.5C8 17 9.1 15.7 10.6 15.5C11.2 12.9 13.5 11 16.3 11C19.5 11 22.1 13.4 22.3 16.5C23.8 16.7 25 18 25 19.5C25 21.2 23.7 22.5 22 22.5H11Z"
                stroke="#FFFFFF"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="18" cy="11" r="2.2" fill="#34D399" />
              <circle cx="11" cy="22" r="2.2" fill="#22D3EE" />
              <circle cx="25" cy="20" r="2.2" fill="#34D399" />
              <line
                x1="18"
                y1="13.2"
                x2="18"
                y2="26.5"
                stroke="url(#awsLogoGrad)"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <circle cx="18" cy="27" r="2" fill="#FFFFFF" />
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-white">
                AMAZING WEB SERVICES
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-slate-400 font-semibold">
              Software &bull; Cloud &bull; Data
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-200 hover:text-emerald-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:brightness-110 shadow-lg shadow-emerald-500/25 hover:-translate-y-0.5 transition-all"
          >
            <span>Discuss a Project</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </nav>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-white/10 border border-white/15 text-white hover:bg-white/15 transition-colors"
          aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
            className="lg:hidden bg-midnight-900/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-slate-100 hover:text-emerald-400 transition-colors py-1"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg"
              >
                <span>Discuss a Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
