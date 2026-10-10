
import Link from 'next/link';
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
            <Link href={`/product/${product?.id}`}>
            
            <div className="card bg-base-200 flex ">
                
                    <div className=" flex gap-2">
                    <p className="bg-gray-300 rounded-xl px-3 py-2 text-4xl ">{product?.image}</p>
                    <div>
                        <h2 className="card-title">{product?.nameBn}</h2>
                    <p>{product?.unit}</p>
                    </div>

                </div>

                <div className='flex justify-between items-center'>
                    <div className='mt-3'>
                    <p>আজকের দাম</p>
                    <p><span className='text-2xl'>{`${product?.today} `}</span> টাকা</p>
                </div>
                

                {/* Right side: Price change */} 
                
                <div className="text-right shrink-0"> <p className={`text-sm font-semibold ${ product?.change?.dir === "up" ? "text-red-500" : product?.change?.dir === "down" ? "text-green-600" : "text-gray-500" }`} > {product?.change?.dir === "up" ? "▲" : product?.change?.dir === "down" ? "▼" : "—"}{" "} {Math.abs(product?.change?.pct || 0)}% </p> <p className="text-xs text-gray-500"> {product?.change?.dir === "up" ? "দাম বেড়েছে" : product?.change?.dir === "down" ? "দাম কমেছে" : "দাম অপরিবর্তিত"} </p> </div>
                </div>

                

            </div>
            
            </Link>
            
        </div>
    );
};

export default ProductsCards;