import { ArrowDown, ArrowRight, BarChart3, Cloud, Workflow, Code2 } from 'lucide-react';

const STAGES = [
  { title: 'Workflows', detail: 'Goals, users, and current processes', icon: Workflow },
  { title: 'Software', detail: 'Applications, APIs, and integrations', icon: Code2 },
  { title: 'Cloud & data', detail: 'Infrastructure, analytics, and dashboards', icon: Cloud },
  { title: 'Useful insight', detail: 'Information to support decisions', icon: BarChart3 },
];

export default function ServiceMap() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-emerald-700">
            CONNECTED SYSTEMS
          </span>
          <h2 className="font-display text-3xl font-extrabold text-midnight-900 sm:text-4xl">
            A simple map from business need to useful insight.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
            An illustrative view of how workflows, software, cloud, and data can fit together. The right design depends on each project.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-stretch" aria-label="Illustrative workflow and technology map">
          {STAGES.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <div key={stage.title} className="contents">
                <article className="flex min-h-36 flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-midnight-900">{stage.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-700">{stage.detail}</p>
                </article>
                {index < STAGES.length - 1 && (
                  <div className="flex items-center justify-center py-0 text-emerald-700" aria-hidden="true">
                    <ArrowRight className="hidden h-5 w-5 md:block" />
                    <ArrowDown className="h-5 w-5 md:hidden" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-xs text-slate-600">Illustrative diagram only; it contains no client or performance data.</p>
      </div>
    </section>
  );
}
