'use client';

const Error = ({ error }: { error: Error }) => {
  return (
    <div className='error-container'>
      <p>Error: {error.message}</p>
    </div>
  );
};

export default Error;
