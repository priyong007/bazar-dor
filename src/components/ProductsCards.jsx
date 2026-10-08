
import React from 'react';

const ProductsCards = ({ product }) => {

    const {
        id,
        slug,
        nameBn,
        category,
        categoryNameBn,
        categoryIcon,
        unit,
        image,
        today,
        yesterday,
        lastWeek,
        lastMonth,
        change,
        dir,
        pct } = product;

    return (
        <div className=''>
            <div className="card bg-base-100  shadow-sm  ">
                <div className=" flex gap-2">
                    <p className="bg-gray-300 rounded-xl px-3 py-2 text-4xl ">{product?.image}</p>
                    <div>
                        <h2 className="card-title">{product?.nameBn}</h2>
                    <p>প্রতি কেজি</p>
                    </div>

                </div>

                <div className='mt-3'>
                    <p>আজকের দাম</p>
                    <p><span className='text-2xl'>{`${product?.today} `}</span> টাকা</p>
                </div>

            </div>
        </div>
    );
};

export default ProductsCards;