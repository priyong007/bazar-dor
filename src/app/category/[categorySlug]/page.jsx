
import ProductsCards from '@/components/ProductsCards';
import Link from 'next/link';
import React from 'react';
import { FaLessThan } from 'react-icons/fa';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

const getCategoryProducts = async (categorySlug) => {
    const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products?category=${categorySlug}`)
    const data = await res.json();
    return data
};
const getCategories = async () => {
    const res = await fetch("https://api.api-store.workers.dev/api/bazardor/categories");
    const data = await res.json();
    return data;
}
const CategoryProducts = async ({ params }) => {
    const { categorySlug } = await params;
    // console.log(categorySlug);



    const categoryProducts = await getCategoryProducts(categorySlug);
    // console.log(categoryProducts, 'test1')

    const categories = await getCategories()

    const currentCategory = categories.find(c => c.slug == categorySlug)
    console.log(currentCategory)
    return (
        <div className='max-w-7xl mx-auto w-full'>
            produts of a category
            {/* breadcumbs */}
            <div className='flex gap-2 max-w-7xl mx-auto my-4'>
                <Link href={'/'}>Home</Link>
                <span className='pt-1'><MdOutlineArrowForwardIos /></span>
                <p>{currentCategory?.nameBn}</p>
            </div>

            {/* left */}
            <div className='flex gap-4 bg-base-200 p-10'>

                <div className='text-5xl'>
                    {currentCategory?.icon}
                </div>
                {/* right */}
                <div>
                    <p className='text-2xl'>{currentCategory?.nameBn}</p>
                    <p>{categoryProducts?.length} <span>টি পণ্যের আজকের দাম ও পরিবর্তন</span></p>
                </div>
            </div>

            <div>
                sorting
            </div>
            <p className='my-5'>{`মোট ${categoryProducts?.length}টি পণ্য দেখানো হচ্ছে`}</p>

            <div className='grid grid-cols-3 gap-4'>
                {
                   categoryProducts.map(product => <ProductsCards key={product.id} product={product} ></ProductsCards>) 
                }
            </div>
        </div>
    );
};

export default CategoryProducts;