'use client';

import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { useReducedMotion } from 'framer-motion';
import { MessageCircle, Send, X } from 'lucide-react';
import { answerFAQ, QUICK_QUESTIONS } from '@/components/faqData';

type ChatMessage = {
  speaker: 'assistant' | 'visitor';
  text: string;
};

const WELCOME_MESSAGE =
  'Hi! I can answer common questions about services, project steps, pricing, and contact. I use fixed FAQs rather than AI, and your chat stays in this browser.';

export default function FAQChatbot() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState('');
  const reduceMotion = useReducedMotion();
  const [messages, setMessages] = useState<ChatMessage[]>([
    { speaker: 'assistant', text: WELCOME_MESSAGE },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    bottomRef.current?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'end' });
  }, [messages, open, reduceMotion]);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  function sendQuestion(question: string) {
    const cleaned = question.trim();
    if (!cleaned) return;

    setMessages((current) => [
      ...current,
      { speaker: 'visitor', text: cleaned },
      { speaker: 'assistant', text: answerFAQ(cleaned) },
    ]);
    setDraft('');
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendQuestion(draft);
  }

  return (
    <>
      {open && (
        <section
          id="faq-chat-panel"
          role="dialog"
          aria-modal="false"
          aria-labelledby="faq-chat-title"
          className="fixed bottom-24 right-4 z-[60] flex max-h-[min(42rem,calc(100dvh-8rem))] w-[min(25rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-950/25 sm:bottom-24 sm:right-6"
        >
          <header className="flex items-start justify-between gap-4 bg-midnight-900 px-5 py-4 text-white">
            <div>
              <h2 id="faq-chat-title" className="font-display text-lg font-bold">Website FAQ assistant</h2>
              <p className="mt-1 text-xs text-slate-200">Instant answers from the published FAQs</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close FAQ assistant"
              className="rounded-lg p-2 text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </header>

          <div className="min-h-0 flex-1 overflow-y-auto bg-slate-50 px-4 py-4" role="log" aria-live="polite" aria-relevant="additions text" aria-label="Conversation">
            <div className="space-y-3">
              {messages.map((message, index) => (
                <div
                  key={`${message.speaker}-${index}`}
                  className={`flex ${message.speaker === 'visitor' ? 'justify-end' : 'justify-start'}`}
                >
                  <p
                    className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      message.speaker === 'visitor'
                        ? 'rounded-br-md bg-emerald-700 text-white'
                        : 'rounded-bl-md border border-slate-200 bg-white text-slate-800'
                    }`}
                  >
                    {message.text}
                  </p>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>
          </div>

          <div className="border-t border-slate-200 bg-white px-4 pb-4 pt-3">
            {messages.length === 1 && (
              <div className="mb-3 flex flex-wrap gap-2" aria-label="Suggested questions">
                {QUICK_QUESTIONS.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => sendQuestion(question)}
                    className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-left text-xs font-medium text-emerald-950 hover:bg-emerald-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <label htmlFor="faq-chat-input" className="sr-only">Ask a question</label>
              <input
                ref={inputRef}
                id="faq-chat-input"
                type="text"
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                maxLength={500}
                placeholder="Ask a question…"
                className="min-w-0 flex-1 rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-500 focus:border-emerald-700 focus:ring-4 focus:ring-emerald-700/10"
              />
              <button
                type="submit"
                disabled={!draft.trim()}
                aria-label="Send question"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-700 text-white hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
            <p className="mt-3 text-center text-[11px] leading-relaxed text-slate-600">
              This assistant does not send or store chat messages. Please leave out sensitive information.{' '}
              <a href="mailto:nagtej64@gmail.com" className="font-semibold text-emerald-800 underline underline-offset-2">
                Email Prabhu
              </a>
            </p>
          </div>
        </section>
      )}

      <button
        type="button"
        aria-controls={open ? 'faq-chat-panel' : undefined}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="fixed bottom-4 right-4 z-[60] inline-flex min-h-12 items-center gap-2 rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-emerald-950/25 transition-colors hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 sm:bottom-5 sm:right-6"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        <span>{open ? 'Close assistant' : 'Ask a question'}</span>
      </button>
    </>
  );
}
