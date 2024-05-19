import Image from 'next/image';
import Link from 'next/link';
import { Item } from '@/shared/interfaces';
import './product-result-card.scss';
import { currencyFormatter } from '@/shared/utils';

export const ProductResultCard = ({ productItem }: { productItem: Item }) => {
  return (
    <div className='product-details-wrapper'>
      <Link href={`/items/${productItem.id}`}>
        <Image
          className='product-image'
          src={productItem.picture}
          width={180}
          height={180}
          alt={productItem.title}
        />
      </Link>
      <div className='details'>
        <div className='details-price-shipping'>
          <Link
            href={`/items/${productItem.id}`}
            className='price'>
            <p>{currencyFormatter(productItem.price.amount, productItem.price.currency)}</p>
          </Link>
          {productItem.free_shipping && (
            <Image
              className='free-shipping'
              src={'/images/ic_shipping@2x.png'}
              width={26}
              height={26}
              alt={'Envío gratis'}
            />
          )}
        </div>
        <h2 className='details-title'>
          <Link href={`/items/${productItem.id}`}>{productItem.title}</Link>
        </h2>
      </div>
      <div className='location'>
        <p>Capital Federal</p>
      </div>
    </div>
  );
};
