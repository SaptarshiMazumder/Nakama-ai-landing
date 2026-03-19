import { Inter, Space_Grotesk } from 'next/font/google';
import CookieBanner from '@/components/CookieBanner';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata = {
  title: 'Nakama AI - AI Teammates for Modern Teams',
  description: 'Nakama AI builds practical AI products for sales, marketing, and specialized model-driven experiences.',
  keywords: 'AI, SaaS, artificial intelligence, AI sales agent, AI marketing agent, enterprise AI, machine learning',
  authors: [{ name: 'Nakama AI' }],
  openGraph: {
    title: 'Nakama AI - AI Teammates for Modern Teams',
    description: 'Practical AI products for sales, marketing, and specialized model-driven experiences.',
    type: 'website',
    url: 'https://nakamaai.co',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body suppressHydrationWarning>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}

