
import Link from 'next/link';
import React from 'react';

const Navlinks = async() => {
      const res = await fetch("https://api.abcz.workers.dev/api/bazardor/categories");
  const data = await res.json();
  
    return (
        
        <div className='flex gap-5 max-w-7xl  mx-auto my-4 '>
            {data.map(menu => <Link key={menu?.id} href={`/category/${menu?.slug}`}><span>{menu?.icon}</span>{menu.nameBn}</Link>)}
        </div>
    );
};

export default Navlinks;