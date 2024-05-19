'use client';
import React, { SyntheticEvent, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import './form.scss';
import { useSyncParamsInput } from '@/hooks';

export const Form = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const inputRef = useSyncParamsInput('search');

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    if (formRef.current) {
      const formValues = new FormData(formRef.current);
      if (formValues.get('search')) {
        router.push(`/items?search=${formValues.get('search')}`);
      }
    }
  };

  return (
    <div className='nav-form-area'>
      <form
        ref={formRef}
        onSubmit={handleSubmit}>
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
          placeholder='Nunca dejes de buscar'
          className='nav-search'
          ref={inputRef}
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
  );
};
