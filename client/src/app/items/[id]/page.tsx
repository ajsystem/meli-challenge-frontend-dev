import { Breadcrumb } from '@/components/breadcrumb';
import { ProductDetails } from '@/components/product-details/product-details';
import { api } from '@/shared/api';
import { Metadata } from 'next';
import './page.scss';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const data = await api.getItem(params.id);
  return {
    title: `${data.item.title} - MeLi`,
    description: data.item.description,
  };
}

const page = async ({ params }: { params: { id: string } }) => {
  const data = await api.getItem(params.id);

  return (
    <>
      <Breadcrumb categories={data.item.categories} />
      <ProductDetails product={data.item} />
    </>
  );
};

export default page;
