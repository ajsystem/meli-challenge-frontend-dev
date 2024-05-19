/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import { Breadcrumb } from '@/components/breadcrumb';

describe('Breadcrumb component', () => {
  it('renders the breadcrumb component with categories', () => {
    const categories = ['Electronics', 'Computers', 'Phones'];
    render(<Breadcrumb categories={categories} />);

    categories.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  it('renders an empty breadcrumb component when categories is empty', () => {
    const categories: string[] = [];
    render(<Breadcrumb categories={categories} />);

    expect(screen.queryByText('Electronics')).not.toBeInTheDocument();
  });

  it('renders the breadcrumb component with a single category', () => {
    const categories = ['Electronics'];
    render(<Breadcrumb categories={categories} />);

    expect(screen.getByText('Electronics')).toBeInTheDocument();
  });

  it('renders the breadcrumb component with a category that includes special characters', () => {
    const categories = ['Electrónica'];
    render(<Breadcrumb categories={categories} />);

    expect(screen.getByText('Electrónica')).toBeInTheDocument();
  });

  it('renders the breadcrumb component with a category that includes numbers', () => {
    const categories = ['Electronics 1'];
    render(<Breadcrumb categories={categories} />);

    expect(screen.getByText('Electronics 1')).toBeInTheDocument();
  });
});
