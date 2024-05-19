import './breadcrumb.scss';

export const Breadcrumb = ({ categories }: { categories: string[] }) => {
  return (
    <section className='breadcrumb'>
      <nav aria-label='breadcrumb'>
        <ol>
          {categories.map((category) => (
            <li key={category}>
              <p>{category}</p>
            </li>
          ))}
        </ol>
      </nav>
    </section>
  );
};
