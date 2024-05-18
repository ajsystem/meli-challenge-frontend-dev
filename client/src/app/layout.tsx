import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import Link from 'next/link';

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
          <div className='nav-header-content'>
            <div className='nav-logo-area'>
              <Link href='/'>
                <Image
                  className='meli-logo'
                  src='/images/Logo_ML@2x.png'
                  alt={'MeLi, donde consigues y compras de todo.'}
                  width={70}
                  height={47}
                />
              </Link>
            </div>
            <div className='nav-form-area'>
              <form action='/items'>
                <label
                  className='visually-hidden'
                  htmlFor='search'>
                  Ingresa lo que quieras encontrar
                </label>
                <input
                  type='text'
                  id='search'
                  name='search'
                  autoCorrect='off'
                  autoComplete='off'
                  autoCapitalize='off'
                  placeholder='Nunca dejes de buscar'
                  className='nav-search'
                />
                <button
                  type='submit'
                  aria-label='Buscar'
                  className='nav-search-button'>
                  <Image
                    className='search-logo'
                    src='/images/ic_Search@2x.png'
                    alt={'Buscar'}
                    width={20}
                    height={20}
                  />
                </button>
              </form>
            </div>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
