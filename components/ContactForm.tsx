'use client';

import React, { useState } from 'react';
import { Send, Mail } from 'lucide-react';

type SubmissionState = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm({
  selectedService,
  onServiceChange,
}: {
  selectedService?: string;
  onServiceChange?: (val: string) => void;
}) {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID?.trim();
  const formAction = formId ? `https://formspree.io/f/${formId}` : undefined;
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!formAction) return;

    const form = event.currentTarget;
    setSubmissionState('sending');

    try {
      const response = await fetch(formAction, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) throw new Error('Form submission failed');

      form.reset();
      onServiceChange?.('');
      setSubmissionState('success');
    } catch {
      setSubmissionState('error');
    }
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block mb-2">
              GET IN TOUCH
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-midnight-900 leading-tight mb-4">
              Tell us what you are looking to build.
            </h2>
            <p className="text-slate-700 text-base leading-relaxed mb-8">
              Share a little about your project, current challenges, or goals. Prabhu Tejas, Chief Architect &amp; Developer, will review your enquiry.
            </p>

            <div className="flex items-start gap-4 mb-8">
              <div className="w-11 h-11 rounded-xl bg-cyan-50 text-teal-700 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display font-bold text-midnight-900 text-sm">Email</h3>
                <a
                  className="text-sm text-slate-700 hover:text-emerald-700 underline underline-offset-2"
                  href="mailto:consulting@amazingwebservices.com"
                >
                  consulting@amazingwebservices.com
                </a>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Please do not include passwords, payment details, or other sensitive information in your message.
            </p>
          </div>

          <div className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-10 border border-slate-300 shadow-xl shadow-slate-900/5">
            <h3 className="font-display text-2xl font-bold text-midnight-900 mb-1">
              Project enquiry
            </h3>
            <p className="text-sm text-slate-700 mb-6">
              Fields marked with * are required.
            </p>

            {!formAction && (
              <p className="mb-5 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-950" role="status">
                The online form is being configured. You can email us directly using the address on this page.
              </p>
            )}

            <form action={formAction} method="POST" onSubmit={handleSubmit} className="space-y-5">
              <fieldset disabled={!formAction || submissionState === 'sending'} className="space-y-5 disabled:opacity-60">
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Leave this field empty</label>
                  <input id="website" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-800 mb-1.5">
                      Full name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      maxLength={120}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-400 bg-white focus:border-emerald-700 focus:ring-4 focus:ring-emerald-700/10 outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-800 mb-1.5">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      maxLength={254}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-400 bg-white focus:border-emerald-700 focus:ring-4 focus:ring-emerald-700/10 outline-none text-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-slate-800 mb-1.5">
                      Company (optional)
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      maxLength={160}
                      className="w-full px-4 py-3 rounded-xl border border-slate-400 bg-white focus:border-emerald-700 focus:ring-4 focus:ring-emerald-700/10 outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-slate-800 mb-1.5">
                      Area of interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={selectedService || ''}
                      onChange={(event) => onServiceChange?.(event.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-400 bg-white focus:border-emerald-700 focus:ring-4 focus:ring-emerald-700/10 outline-none text-sm"
                    >
                      <option value="">Select an area (optional)</option>
                      <option value="Custom Application Building">Custom application building</option>
                      <option value="Full-Stack Web Development">Web development</option>
                      <option value="AI & ML Solutions">AI and machine learning</option>
                      <option value="Cloud Setup & Architecture">Cloud architecture</option>
                      <option value="FinOps">FinOps</option>
                      <option value="Data Science">Data and analytics</option>
                      <option value="Supply Chain Optimization">Supply chain systems</option>
                      <option value="Finance & Accounting">Finance systems</option>
                      <option value="Taxation">Tax workflows</option>
                      <option value="Corporate Law Tech Integrations">Governance and contract systems</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-800 mb-1.5">
                    How can we help? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    maxLength={5000}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-400 bg-white focus:border-emerald-700 focus:ring-4 focus:ring-emerald-700/10 outline-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!formAction || submissionState === 'sending'}
                  className="w-full py-4 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-700 to-teal-700 hover:brightness-110 shadow-lg shadow-emerald-700/20 flex items-center justify-center gap-2 transition-all disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span>{submissionState === 'sending' ? 'Sending…' : 'Send enquiry'}</span>
                  <Send className="w-4 h-4" aria-hidden="true" />
                </button>
              </fieldset>

              <p className="min-h-6 text-sm text-slate-800" aria-live="polite" role="status">
                {submissionState === 'success' && 'Thank you. Your enquiry was sent.'}
                {submissionState === 'error' && 'We could not send your enquiry. Please try again or email us directly.'}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
