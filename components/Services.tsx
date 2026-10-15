'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Layers,
  Code2,
  Cpu,
  Cloud,
  DollarSign,
  BarChart3,
  Truck,
  Landmark,
  FileCheck2,
  Scale,
  ArrowUpRight,
  LucideIcon,
} from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  pillar: 'Engineering & Tech' | 'Strategic Consulting' | 'Domain Expertise';
  description: string;
  highlights: string;
  icon: LucideIcon;
}

export const SERVICES_DATA: ServiceItem[] = [
  // Pillar 1: Engineering & Tech
  {
    id: 'custom-apps',
    title: 'Custom Application Building',
    pillar: 'Engineering & Tech',
    description:
      'Design and development of web, mobile, and business applications shaped around your requirements.',
    highlights: 'Web • Mobile • Integrations',
    icon: Layers,
  },
  {
    id: 'fullstack-web',
    title: 'Full-Stack Web Development',
    pillar: 'Engineering & Tech',
    description:
      'Front-end and back-end development, integrations, and improvements for modern web products.',
    highlights: 'Web Applications • APIs',
    icon: Code2,
  },
  {
    id: 'ai-ml',
    title: 'AI & ML Solutions',
    pillar: 'Engineering & Tech',
    description:
      'Explore and build AI and machine-learning features, from data preparation and prototypes to integration with existing workflows.',
    highlights: 'AI Prototypes • Data Workflows',
    icon: Cpu,
  },
  // Pillar 2: Strategic Consulting
  {
    id: 'cloud-setup',
    title: 'Cloud Setup & Architecture',
    pillar: 'Strategic Consulting',
    description:
      'Cloud architecture, setup, and technical improvements for reliability, security, and cost visibility.',
    highlights: 'Cloud Setup • Architecture',
    icon: Cloud,
  },
  {
    id: 'finops',
    title: 'FinOps',
    pillar: 'Strategic Consulting',
    description:
      'Understand cloud spend, improve cost visibility, and prioritize practical optimization opportunities.',
    highlights: 'Cloud Cost Visibility • FinOps',
    icon: DollarSign,
  },
  {
    id: 'data-science',
    title: 'Data Science',
    pillar: 'Strategic Consulting',
    description:
      'Data preparation, analytics, dashboards, and forecasting to make operational data easier to use.',
    highlights: 'Analytics • Dashboards • Forecasts',
    icon: BarChart3,
  },
  // Pillar 3: Domain Expertise
  {
    id: 'supply-chain',
    title: 'Supply Chain Optimization',
    pillar: 'Domain Expertise',
    description:
      'Software and data integrations for inventory, fulfilment, and logistics workflows.',
    highlights: 'Inventory • Logistics • Integrations',
    icon: Truck,
  },
  {
    id: 'finance-accounting',
    title: 'Finance & Accounting',
    pillar: 'Domain Expertise',
    description:
      'Workflow automation and integrations for accounting and finance systems.',
    highlights: 'Finance Workflows • Integrations',
    icon: Landmark,
  },
  {
    id: 'taxation',
    title: 'Taxation',
    pillar: 'Domain Expertise',
    description:
      'Software integrations and workflow tools for tax preparation and compliance teams.',
    highlights: 'Tax Workflows • Integrations',
    icon: FileCheck2,
  },
  {
    id: 'corporate-law',
    title: 'Corporate Law Tech Integrations',
    pillar: 'Domain Expertise',
    description:
      'Workflow and document-system integrations for corporate governance and contract management.',
    highlights: 'Documents • Governance • Integrations',
    icon: Scale,
  },
];

const PILLARS = ['All', 'Engineering & Tech', 'Strategic Consulting', 'Domain Expertise'] as const;

export default function Services({
  onSelectService,
}: {
  onSelectService?: (serviceTitle: string) => void;
}) {
  const reduceMotion = useReducedMotion();
  const [selectedPillar, setSelectedPillar] = useState<(typeof PILLARS)[number]>('All');

  const visibleServices =
    selectedPillar === 'All'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((item) => item.pillar === selectedPillar);

  return (
    <section id="services" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Pillar Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 block mb-2">
              SERVICES
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-midnight-900">
              Software and technology services
            </h2>
            <p className="text-slate-600 max-w-2xl mt-3 text-base sm:text-lg">
              Explore the areas where we can help with planning, development, and technology integrations.
            </p>
          </div>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter services by area">
            {PILLARS.map((pillar) => {
              const active = selectedPillar === pillar;
              return (
                <button
                  key={pillar}
                  type="button"
                  onClick={() => setSelectedPillar(pillar)}
                  aria-pressed={active}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all ${
                    active
                      ? 'bg-midnight-900 text-white border-midnight-900 shadow-md'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-emerald-500 hover:text-midnight-900'
                  }`}
                >
                  {pillar}
                </button>
              );
            })}
          </div>
        </div>

        {/* Service Cards Grid */}
        <div id="domain-expertise" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.id}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : index * 0.05 }}
                whileHover={reduceMotion ? undefined : { y: -6 }}
                className="group bg-white rounded-2xl p-7 border-[1.5px] border-slate-200 hover:border-emerald-500 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="w-12 h-12 p-3 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 group-hover:bg-gradient-to-br group-hover:from-emerald-600 group-hover:to-teal-700 group-hover:text-white group-hover:border-transparent transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">
                      {service.pillar}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-midnight-900 mb-2.5 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-800">
                  <span>{service.highlights}</span>
                  <a
                    href="#contact"
                    onClick={() => onSelectService && onSelectService(service.title)}
                    className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-bold"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
