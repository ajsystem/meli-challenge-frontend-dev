import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Searcher } from '@/components/searcher';
import { Suspense } from 'react';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Test práctico MeLi',
  description: 'Buscador de productos de MeLi',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        <Suspense>
          <header>
            <div className='nav-header'>
              <Searcher />
            </div>
          </header>
          <main>
            <div className='main-container'>{children}</div>
          </main>
        </Suspense>
      </body>
    </html>
  );
}
