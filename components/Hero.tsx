'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Compass } from 'lucide-react';

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 hero-mesh-bg text-white overflow-hidden"
    >
      <div className="absolute inset-0 hero-tech-grid pointer-events-none" aria-hidden="true" />
      <motion.div
        animate={reduceMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.45, 0.75, 0.45] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-16 left-[6%] w-96 h-96 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <motion.div
        animate={reduceMotion ? undefined : { scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 right-[6%] w-[28rem] h-[28rem] rounded-full bg-teal-500/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.55, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-wider uppercase text-emerald-200">
                Software &bull; Cloud &bull; Data
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white mb-6">
              Technology shaped around your business.
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 max-w-2xl leading-relaxed mb-9">
              Amazing Web Services helps teams plan and build web applications, custom software, data tools, and cloud solutions. Tell us what you are working on and we can discuss a practical next step.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 shadow-lg shadow-emerald-500/30 hover:brightness-110 transition-all"
              >
                <span>Discuss a Project</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold text-slate-100 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-emerald-400 transition-colors backdrop-blur-md"
              >
                <Compass className="w-5 h-5 text-emerald-400" aria-hidden="true" />
                <span>Explore Services</span>
              </a>
            </div>
          </motion.div>

          <motion.aside
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.1, ease: 'easeOut' }}
            className="lg:col-span-5"
            aria-label="Chief Architect and Developer"
          >
            <div className="max-w-md mx-auto rounded-3xl bg-slate-900/80 border border-white/15 p-7 sm:p-9 shadow-2xl backdrop-blur-xl">
              <div className="w-28 h-28 rounded-full mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-emerald-400 via-emerald-600 to-teal-600 border-4 border-white/15 shadow-xl shadow-emerald-900/40">
                <span className="font-display text-3xl font-extrabold text-white" aria-hidden="true">PT</span>
              </div>
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300 mb-2">
                  Chief Architect &amp; Developer
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  Prabhu Tejas
                </h2>
                <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                  Architecture and software development for practical business needs.
                </p>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
