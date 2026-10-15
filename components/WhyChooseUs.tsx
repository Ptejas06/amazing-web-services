'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Compass, MessageSquareText, Code2 } from 'lucide-react';

const PROJECT_STEPS = [
  {
    number: '01',
    title: 'Understand the need',
    description:
      'Start with your goals, users, constraints, and what you already have in place.',
    icon: Compass,
  },
  {
    number: '02',
    title: 'Agree on a plan',
    description:
      'Shape the scope and technical approach together before implementation begins.',
    icon: MessageSquareText,
  },
  {
    number: '03',
    title: 'Build and review',
    description:
      'Develop in clear steps, review progress, and adjust based on feedback.',
    icon: Code2,
  },
];

export default function WhyChooseUs() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="why-choose-us" className="py-24 bg-midnight-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 block mb-2">
            HOW WE WORK
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            A clear path from first conversation to working software.
          </h2>
          <p className="text-slate-200 mt-4 text-base sm:text-lg leading-relaxed">
            We begin by understanding the problem and agreeing on a practical scope. You can review the approach and progress as the work takes shape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PROJECT_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={step.number}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : index * 0.06 }}
                className="p-6 rounded-2xl bg-white/[0.05] border border-white/10"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-bold tracking-widest text-emerald-300">{step.number}</span>
                  <Icon className="w-5 h-5 text-teal-300" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-200 leading-relaxed">{step.description}</p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-emerald-400/25 bg-emerald-400/5 p-6 sm:p-7">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-300 mb-2">
            Your technical contact
          </p>
          <p className="text-lg font-semibold text-white">Prabhu Tejas · Chief Architect &amp; Developer</p>
        </div>
      </div>
    </section>
  );
}
