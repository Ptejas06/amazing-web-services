import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQChatbot from '@/components/FAQChatbot';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Amazing Web Services | Software & Technology',
  description:
    'Software development and technology consulting for web applications, cloud, data, and business systems.',
  applicationName: 'Amazing Web Services',
  openGraph: {
    title: 'Amazing Web Services | Software & Technology',
    description:
      'Software development and technology consulting for web applications, cloud, data, and business systems.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FAQChatbot />
      </body>
    </html>
  );
}
