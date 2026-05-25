import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { FadeUpController } from '@/components/FadeUpController';
import { Providers } from '@/components/layout/Providers';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'dBA Academy — Educação que Transforma',
  description:
    'A dBA Academy é a referência em formação fiscal, contabilística e financeira em Moçambique. Programas práticos, instrutores experientes e uma comunidade de profissionais.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={inter.variable}>
      <body>
        <Providers>
          <FadeUpController />
          <AnnouncementBar />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
