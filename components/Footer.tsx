import React from 'react';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-midnight-950 text-slate-300 pt-12 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 pb-8 border-b border-white/10">
          <div className="max-w-xl">
            <p className="font-display font-extrabold text-white tracking-tight">
              AMAZING WEB SERVICES
            </p>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              Software development and technology consulting for web applications, cloud, data, and business systems.
            </p>
            <p className="mt-3 text-sm text-slate-400">
              <span className="text-slate-200">Prabhu Tejas</span> · Chief Architect &amp; Developer
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 text-sm">
            <a href="#services" className="hover:text-emerald-300 transition-colors">Services</a>
            <a href="#contact" className="hover:text-emerald-300 transition-colors">Contact</a>
            <a
              href="mailto:nagtej64@gmail.com"
              className="inline-flex items-center gap-2 hover:text-emerald-300 transition-colors"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              nagtej64@gmail.com
            </a>
          </div>
        </div>

        <div className="pt-6 text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} Amazing Web Services.</p>
        </div>
      </div>
    </footer>
  );
}
