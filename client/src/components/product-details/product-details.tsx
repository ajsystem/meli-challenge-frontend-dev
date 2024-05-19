import { ItemDetails } from '@/shared/interfaces';
import Image from 'next/image';
import { currencyFormatter } from '@/shared/utils';
import './product-details.scss';

export const ProductDetails = ({ product }: { product: ItemDetails }) => {
  return (
    <section className='details-container'>
      <div className='info-price-container'>
        <div className='image-container'>
          <Image
            className='main-image'
            width={680}
            height={680}
            src={product.picture}
            alt={product.title}
          />
        </div>
        <div className='price-details-container'>
          <p className='condition-sold'>{product.condition === 'new' ? 'Nuevo' : 'Usado'} - 234 vendidos</p>
          <h2 className='title'>{product.title}</h2>
          <p className='price'>{currencyFormatter(product.price.amount, product.price.currency)}</p>
          <div className='buy-btn-container'>
            <button type='button'>Comprar</button>
          </div>
        </div>
      </div>
      <div className='description-container'>
        <h3 className='description-title'>Descripción del producto</h3>
        <p className='product-description'>{product.description}</p>
      </div>
    </section>
  );
};
