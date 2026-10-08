
import React from 'react';

const getCategoryProducts = async() => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories')
    const data = await res.json();
    return data
}
const CategoryProducts = async({params}) => {
    const {categorySlug} = await params;
    console.log(categorySlug)
    return (
        <div>
            produts of a category
        </div>
    );
};

export default CategoryProducts;