/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import { ProductDetails } from '@/components/product-details/product-details';
import { ItemDetails } from '@/shared/interfaces';

const mockProduct: ItemDetails = {
  condition: 'new',
  title: 'Test Product',
  picture: 'https://example.com/test-product.jpg',
  price: { amount: 100, currency: 'ARS', decimals: 2 },
  description: 'This is a test product.',
};

describe('ProductDetails component', () => {
  it('renders the product details correctly', () => {
    render(<ProductDetails product={mockProduct} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$ 100')).toBeInTheDocument();
    expect(screen.getByText('Descripción del producto')).toBeInTheDocument();
    expect(screen.getByText('This is a test product.')).toBeInTheDocument();
  });

  it('renders the condition and sold count', () => {
    render(<ProductDetails product={mockProduct} />);
    expect(screen.getByText('Nuevo - 234 vendidos')).toBeInTheDocument();
  });

  it('displays the correct image', () => {
    render(<ProductDetails product={mockProduct} />);
    expect(screen.getByAltText('Test Product')).toBeInTheDocument();
  });
});
