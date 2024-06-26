import React from 'react';
import { redirect } from 'next/navigation';
import './page.scss';
import { Metadata } from 'next';
import { api } from '@/shared/api';
import { Breadcrumb } from '@/components/breadcrumb';
import { ProductResultCard } from '@/components/product-result-card';

export async function generateMetadata({ searchParams }: { searchParams?: { [key: string]: string } }): Promise<Metadata> {
  const search = searchParams?.search || '';
  return {
    title: `Resultados para: ${search}`,
  };
}

const page = async ({ searchParams }: { searchParams?: { [key: string]: string } }) => {
  if (!searchParams?.search) {
    redirect(`/`);
  }

  const data = await api.search(searchParams.search);

  return (
    <>
      <Breadcrumb categories={data.categories} />
      <section className='results-container'>
        {data.items.length === 0 && <p className='no-results'>No se encontraron resultados, intenta realizar otra búsqueda.</p>}

        <ol>
          {data.items.map((item) => (
            <li
              key={item.id}
              className='product-container'>
              <ProductResultCard productItem={item} />
            </li>
          ))}
        </ol>
      </section>
    </>
  );
};

export default page;
