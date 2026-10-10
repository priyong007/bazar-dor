
import Link from 'next/link';
import React from 'react';

const getSingleProduct = async (id) => {
    const res = await fetch(
        `https://api.abcz.workers.dev/api/bazardor/products/${id}`
    );

    if (!res.ok) {
        return null;
    }

    const data = await res.json();
    return data;
};

const ProductDetailsPage = async ({ params }) => {
    const { id } = await params;
    console.log(id);

    const product = await getSingleProduct(id);
    console.log(product);

    if (!product || !product.id) {
        return (
            <div className="max-w-7xl mx-auto p-10">
                <p>পণ্য খুঁজে পাওয়া যায়নি!</p>
            </div>
        );
    }

    const markets = product?.markets || [];

    const lowestMarket = markets.length
        ? markets.reduce((min, market) =>
            market.min < min.min ? market : min
        )
        : null;

    const highestMarket = markets.length
        ? markets.reduce((max, market) =>
            market.max > max.max ? market : max
        )
        : null;

    const averagePrice = markets.length
        ? (
            markets.reduce(
                (total, market) =>
                    total + (market.min + market.max) / 2,
                0
            ) / markets.length
        ).toFixed(2)
        : null;

    const formatPrice = (price) =>
        new Intl.NumberFormat('bn-BD', {
            maximumFractionDigits: 2,
        }).format(price);

    return (
        <div className="min-h-screen bg-[#f0f5f0] py-6 px-4">
            <div className="max-w-7xl mx-auto">


                {/* Breadcrumb */}
                <div className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-2">
                    <Link className='text-blue-700' href="/">
                        হোম
                    </Link> <span>&gt;</span>
                    <Link href={`/category/${product?.category}`} className="hover:text-green-600" > {product?.categoryNameBn}
                    </Link>
                    <span>&gt;</span> <span className="text-gray-800 font-medium">
                        {product?.nameBn}
                    </span>
                     
                    </div>

                {/* Product Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 bg-white border border-gray-200 rounded-xl p-5 md:p-8 my-6">

                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center bg-gray-100 rounded-xl w-16 h-16 text-4xl shrink-0">
                            {product?.image}
                        </div>

                        <div>
                            <p className="text-2xl font-bold text-gray-800">
                                {product?.nameBn}
                            </p>

                            <p className="text-sm text-gray-500 mt-1">
                                প্রতি {product?.unit === 'kg' ? 'কেজি' : product?.unit} ·{' '}
                                {product?.categoryNameBn}
                            </p>

                            <p className="text-sm text-gray-600 mt-2">
                                গতকালের তুলনায় আজ দাম{' '}
                                {product?.change?.dir === 'up'
                                    ? 'বেড়েছে'
                                    : product?.change?.dir === 'down'
                                        ? 'কমেছে'
                                        : 'পরিবর্তন হয়নি'}{' '}
                                : {formatPrice(Math.abs(product?.change?.pct || 0))}%
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#f0f5f0] rounded-xl p-4 text-center min-w-32">
                        <p className="text-sm text-gray-500">
                            আজকের দাম
                        </p>

                        <p className="text-3xl font-bold text-gray-800">
                            {formatPrice(product?.today)}
                        </p>

                        <p className="text-sm text-gray-500">
                            টাকা / {product?.unit}
                        </p>

                        <p className={`text-sm font-semibold mt-1 ${product?.change?.dir === 'up'
                            ? 'text-red-500'
                            : product?.change?.dir === 'down'
                                ? 'text-green-600'
                                : 'text-gray-500'
                            }`}>
                            {product?.change?.dir === 'up'
                                ? '▲'
                                : product?.change?.dir === 'down'
                                    ? '▼'
                                    : '—'}{' '}
                            {formatPrice(Math.abs(product?.change?.pct || 0))}%
                        </p>
                    </div>
                </div>

                {/* 2nd div */}
                <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6">

                    <p className="font-bold text-gray-800 mb-4">
                        দামের সারসংক্ষেপ
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                        {/* Lowest Price */}
                        <div className="bg-white border border-gray-200 rounded-xl p-5">
                            <p className="text-sm text-gray-500">
                                সর্বনিম্ন দাম
                            </p>

                            <p className="text-2xl font-bold text-green-600">
                                {formatPrice(
                                    lowestMarket
                                        ? lowestMarket.min
                                        : product?.today
                                )} টাকা
                            </p>

                            <p className="text-sm text-gray-600 mt-2">
                                {lowestMarket
                                    ? `সবচেয়ে কম দামের বাজার: ${lowestMarket.market}`
                                    : 'বাজারের তথ্য পাওয়া যায়নি'}
                            </p>
                        </div>

                        {/* Highest Price */}
                        <div className="bg-white border border-gray-200 rounded-xl p-5">
                            <p className="text-sm text-gray-500">
                                সর্বোচ্চ দাম
                            </p>

                            <p className="text-2xl font-bold text-red-500">
                                {formatPrice(
                                    highestMarket
                                        ? highestMarket.max
                                        : product?.today
                                )} টাকা
                            </p>

                            <p className="text-sm text-gray-600 mt-2">
                                {highestMarket
                                    ? `সবচেয়ে বেশি দামের বাজার: ${highestMarket.market}`
                                    : 'বাজারের তথ্য পাওয়া যায়নি'}
                            </p>
                        </div>

                        {/* Average Price */}
                        <div className="bg-white border border-gray-200 rounded-xl p-5">
                            <p className="text-sm text-gray-500">
                                গড় দাম
                            </p>

                            <p className="text-2xl font-bold text-green-600">
                                {formatPrice(
                                    averagePrice !== null
                                        ? Number(averagePrice)
                                        : product?.today
                                )} টাকা
                            </p>

                            <p className="text-sm text-gray-600 mt-2">
                                {markets.length > 0
                                    ? `${formatPrice(markets.length)}টি বাজারের তথ্যের ভিত্তিতে`
                                    : 'বাজারের তথ্য পাওয়া যায়নি'}
                            </p>
                        </div>
                    </div>

                    {/* Price History */}
                    <p className="font-bold text-gray-800 mt-7 mb-4">
                        দামের পরিবর্তন
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                        <div className="bg-[#f0f5f0] rounded-xl p-4">
                            <p className="text-sm text-gray-500">
                                আজকের দাম
                            </p>
                            <p className="font-bold text-lg">
                                {formatPrice(product?.today)} টাকা
                            </p>
                        </div>

                        <div className="bg-[#f0f5f0] rounded-xl p-4">
                            <p className="text-sm text-gray-500">
                                গতকালের দাম
                            </p>
                            <p className="font-bold text-lg">
                                {formatPrice(product?.yesterday)} টাকা
                            </p>
                        </div>

                        <div className="bg-[#f0f5f0] rounded-xl p-4">
                            <p className="text-sm text-gray-500">
                                গত সপ্তাহের দাম
                            </p>
                            <p className="font-bold text-lg">
                                {formatPrice(product?.lastWeek)} টাকা
                            </p>
                        </div>

                        <div className="bg-[#f0f5f0] rounded-xl p-4">
                            <p className="text-sm text-gray-500">
                                গত মাসের দাম
                            </p>
                            <p className="font-bold text-lg">
                                {formatPrice(product?.lastMonth)} টাকা
                            </p>
                        </div>
                    </div>

                    {/* বাজারভিত্তিক আজকের দাম */}
                    <p className="font-bold text-gray-800 py-5">
                        বাজারভিত্তিক আজকের দাম
                    </p>

                    <div className="overflow-x-auto border border-gray-200 rounded-xl">
                        <table className="table w-full">
                            <thead>
                                <tr className="bg-[#f7faf7] text-gray-500">
                                    <th>বাজার</th>
                                    <th>বিভাগ</th>
                                    <th className="text-right">সর্বনিম্ন</th>
                                    <th className="text-right">সর্বোচ্চ</th>
                                    <th className="text-right">গড়</th>
                                </tr>
                            </thead>

                            <tbody>
                                {markets.map((market, index) => {
                                    const avg =
                                        (market.min + market.max) / 2;

                                    return (
                                        <tr key={`${market.market}-${index}`}>
                                            <td className="font-medium">
                                                {market.market}
                                            </td>

                                            <td>{market.division}</td>

                                            <td className="text-right text-green-600">
                                                {formatPrice(market.min)} টাকা
                                            </td>

                                            <td className="text-right text-red-500">
                                                {formatPrice(market.max)} টাকা
                                            </td>

                                            <td className="text-right font-semibold">
                                                {formatPrice(avg)} টাকা
                                            </td>
                                        </tr>
                                    );
                                })}

                                {markets.length === 0 && (
                                    <tr>
                                        <td colSpan={5} className="text-center py-8">
                                            কোনো বাজারের তথ্য পাওয়া যায়নি।
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
