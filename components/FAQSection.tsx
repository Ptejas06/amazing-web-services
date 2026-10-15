import { FAQ_ITEMS } from '@/components/faqData';

export default function FAQSection() {
  return (
    <section id="faqs" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-emerald-700">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-display text-3xl font-extrabold text-midnight-900 sm:text-4xl">
            A few useful answers before we talk.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
            These answers describe the services listed on this site. Project scope, schedule, and estimates are discussed individually.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {FAQ_ITEMS.map((faq) => (
            <details
              key={faq.id}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 open:border-emerald-300 open:bg-emerald-50/50"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-midnight-900 marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700">
                <span>{faq.question}</span>
                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-300 text-emerald-700 transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 pr-8 text-sm leading-relaxed text-slate-700">{faq.answer}</p>
            </details>
          ))}
        </div>

        <p className="mt-8 text-sm text-slate-600">
          Still have a question?{' '}
          <a href="mailto:nagtej64@gmail.com" className="font-semibold text-emerald-800 underline underline-offset-4 hover:text-emerald-900">
            Email Prabhu Tejas
          </a>
          , or open the FAQ assistant in the lower-right corner.
        </p>
      </div>
    </section>
  );
}
