import React from 'react';

const page = ({ params, searchParams }: { params: { slug: string }; searchParams?: { [key: string]: string | string[] | undefined } }) => {
  return <div>{searchParams?.search || 'nada'}</div>;
};

export default page;
