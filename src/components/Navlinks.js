import React from 'react';
import CategoryLinks from './CategoryLinks';

const Navlinks = async () => {
  const res = await fetch(
    'https://api.abcz.workers.dev/api/bazardor/categories'
  );

  const data = await res.json();

  return (
    <div className="max-w-7xl mx-auto my-4">
      <CategoryLinks categories={data} />
    </div>
  );
};

export default Navlinks;