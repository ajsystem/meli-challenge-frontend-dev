/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import { ProductResultCard } from '@/components/product-result-card';

const productItem = {
  id: '123',
  picture: 'https://example.com/image.jpg',
  title: 'Sample Product',
  price: { amount: 100, currency: 'ARS', decimals: 2 },
  free_shipping: true,
  condition: 'new',
};

describe('ProductResultCard component', () => {
  it('renders ProductResultCard with correct props', () => {
    render(<ProductResultCard productItem={productItem} />);

    expect(screen.getByText('Sample Product')).toBeInTheDocument();
    expect(screen.getByText('$ 100')).toBeInTheDocument();
    expect(screen.getByText('Capital Federal')).toBeInTheDocument();
  });

  it('renders the correct image', () => {
    render(<ProductResultCard productItem={productItem} />);

    expect(screen.getByAltText('Sample Product')).toBeInTheDocument();
  });

  it('renders the correct shipping icon', () => {
    render(<ProductResultCard productItem={productItem} />);

    expect(screen.getByAltText('Envío gratis')).toBeInTheDocument();
  });
});
