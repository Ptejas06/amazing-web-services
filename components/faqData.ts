export type FAQItem = {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'services',
    question: 'What services can you help with?',
    answer:
      'The listed services include custom and full-stack applications, AI and machine-learning prototypes, cloud architecture, FinOps, data science and dashboards, plus workflow integrations for supply chain, finance, tax, and corporate governance.',
    keywords: ['services', 'what do you do', 'what can you help with', 'offerings', 'software', 'web app', 'application', 'development', 'build'],
  },
  {
    id: 'start',
    question: 'How does a project get started?',
    answer:
      'Start with the outcome you need, who will use it, what tools or systems are involved, and any constraints. We can use that to discuss scope and a technical approach before work is agreed.',
    keywords: ['start', 'begin', 'first step', 'process', 'project', 'how to work together'],
  },
  {
    id: 'pricing',
    question: 'How much does a project cost?',
    answer:
      'There is no fixed price list on this site. Cost depends on the scope, integrations, and constraints. Share a short outline and we can discuss an estimate before any work is agreed.',
    keywords: ['price', 'pricing', 'cost', 'quote', 'budget', 'estimate'],
  },
  {
    id: 'timeline',
    question: 'How long does a project take?',
    answer:
      'Timing depends on the requirements, integrations, and dependencies. Once the scope is understood, we can discuss a realistic schedule before work begins.',
    keywords: ['how long', 'timeline', 'when', 'delivery time', 'duration', 'deadline'],
  },
  {
    id: 'existing-systems',
    question: 'Can you improve or connect an existing system?',
    answer:
      'Yes. The listed work includes improvements to web products and integrations between applications and business systems. Mention the tools involved and the problem you want to solve.',
    keywords: ['existing', 'integration', 'integrate', 'connect systems', 'improve', 'legacy', 'api'],
  },
  {
    id: 'ai',
    question: 'Can you help with AI or machine learning?',
    answer:
      'AI and machine-learning work listed on the site includes data preparation, prototypes, and integration into existing workflows. A useful starting point is the task, available data, and outcome you want to evaluate.',
    keywords: ['ai', 'machine learning', 'ml', 'artificial intelligence', 'prototype'],
  },
  {
    id: 'cloud-data',
    question: 'Can you help with cloud or data projects?',
    answer:
      'The listed work includes cloud setup and architecture, FinOps and cloud cost visibility, plus data preparation, analytics, dashboards, and forecasting. The right starting point depends on your current systems and goals.',
    keywords: ['cloud', 'finops', 'cloud cost', 'data', 'analytics', 'dashboard', 'forecast'],
  },
  {
    id: 'industries',
    question: 'What business areas do you work with?',
    answer:
      'The site lists software and workflow work for supply chain, finance and accounting, tax preparation, corporate governance, and contract management. This is technology support, not legal, tax, or accounting advice.',
    keywords: ['industry', 'industries', 'supply chain', 'finance', 'accounting', 'tax', 'legal', 'governance'],
  },
  {
    id: 'contact',
    question: 'How can I contact Prabhu?',
    answer:
      'Email Prabhu Tejas at nagtej64@gmail.com. Briefly describe the goal, current setup, and any important constraints. Please do not include passwords, payment details, or confidential information.',
    keywords: ['contact', 'email', 'reach', 'talk', 'speak', 'enquiry', 'inquiry', 'prabhu'],
  },
  {
    id: 'privacy',
    question: 'Does this chatbot use AI or send my messages anywhere?',
    answer:
      'This is a fixed FAQ assistant, not an AI model. Its answers are selected in your browser, and chat messages are not sent to a chatbot service. If you use the project enquiry form, that form will send data through Formspree after it is configured.',
    keywords: ['chatbot', 'bot', 'privacy', 'save', 'stored', 'store', 'send my messages', 'is this ai'],
  },
];

export const QUICK_QUESTIONS = [
  'What services do you offer?',
  'How does a project get started?',
  'How is pricing worked out?',
  'Can you help with AI?',
];

const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9@]+/g, ' ').trim();

export function answerFAQ(question: string) {
  const normalizedQuestion = normalize(question);
  const questionWords = new Set(normalizedQuestion.split(' '));
  let bestMatch: FAQItem | undefined;
  let bestScore = 0;

  for (const faq of FAQ_ITEMS) {
    let score = 0;
    for (const keyword of faq.keywords) {
      const normalizedKeyword = normalize(keyword);
      const matched = normalizedKeyword.includes(' ')
        ? normalizedQuestion.includes(normalizedKeyword)
        : questionWords.has(normalizedKeyword);
      if (normalizedKeyword && matched) {
        score += normalizedKeyword.includes(' ') ? 4 : normalizedKeyword.length <= 2 ? 6 : 2;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = faq;
    }
  }

  if (bestMatch && bestScore >= 2) return bestMatch.answer;

  return 'I can’t answer that confidently from the information published here. Email Prabhu at nagtej64@gmail.com and he can follow up. Please leave out passwords, payment details, and confidential information.';
}
