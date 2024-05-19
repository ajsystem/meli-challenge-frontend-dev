import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import { Searcher } from '@/components/searcher';

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
        <header className='nav-header'>
          <Searcher />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
