import React from 'react';
import { redirect } from 'next/navigation';
import './page.scss';
import Image from 'next/image';

interface ResponseItems {
  author: Author;
  categories: string[];
  items: Item[];
}

interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
}

interface Price {
  currency: string;
  amount: number;
  decimals: number;
}

interface Author {
  name: string;
  lastname: string;
}

const page = async ({ params, searchParams }: { params: { slug: string }; searchParams?: { [key: string]: string | string[] | undefined } }) => {
  if (!searchParams?.search) {
    redirect(`/`);
  }

  const request = await fetch(`http://localhost:3000/api/items?q=${searchParams.search}`);

  if (!request.ok) {
    throw new Error('No se pudo realizar la búsqueda');
  }

  const data: ResponseItems = await request.json();

  const currencyFormatter = (amount: number, currencyID: string) => {
    const formatter = new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: currencyID,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    return formatter.format(amount);
  };

  console.log({ data });
  return (
    <>
      <section className='breadcrumb'>
        <nav aria-label='breadcrumb'>
          <ol>
            {data.categories.map((category) => (
              <li key={category}>
                <p>{category}</p>
              </li>
            ))}
          </ol>
        </nav>
      </section>

      <section className='results-container'>
        <ol>
          {data.items.map((item) => (
            <li
              key={item.id}
              className='product-container'>
              <div className='product-details-wrapper'>
                <Image
                  className='product-image'
                  src={item.picture}
                  width={180}
                  height={180}
                  alt={item.title}
                />
                <div className='details'>
                  <div className='details-price-shipping'>
                    <p className='price'>{currencyFormatter(item.price.amount, item.price.currency)}</p>
                    {item.free_shipping && (
                      <Image
                        className='free-shipping'
                        src={'/images/ic_shipping@2x.png'}
                        width={26}
                        height={26}
                        alt={item.title}
                      />
                    )}
                  </div>
                  <h2 className='details-title'>{item.title}</h2>
                </div>
                <div className='location'>
                  <p>Capital Federal</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
};

export default page;
