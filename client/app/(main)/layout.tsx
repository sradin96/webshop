import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import 'react-loading-skeleton/dist/skeleton.css';
import Footer from '../components/shared/Footer/Footer';
import Header from '../components/shared/Header/Header';
import Providers from './providers';
import '../../styles/main.scss'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'NextJS Starter',
  description: 'NextJS Starter description',
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
