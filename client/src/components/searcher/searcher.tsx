import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './searcher.scss';
import { Form } from '@/components/form';

export const Searcher = () => {
  return (
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

      <Form />
    </div>
  );
};
