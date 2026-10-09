
"use client";

import React, { useState } from "react";
import ProductsCards from "@/components/ProductsCards";

const SortedCategoryProducts = ({ products }) => {
    const [sortOrder, setSortOrder] = useState("default");

    const sortedProducts = [...products].sort((a, b) => {
        if (sortOrder === "low-to-high") {
            return a.today - b.today;
        }

        if (sortOrder === "high-to-low") {
            return b.today - a.today;
        }

        return 0;
    });

    return (
        <>
            <div className="bg-base-200 p-6 my-6 flex justify-end">
                <p className="pt-2 mx-2">সাজান</p>

                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="select select-neutral"
                >
                    <option value="default">ডিফল্ট</option>
                    <option value="low-to-high">ছোট থেকে বড়</option>
                    <option value="high-to-low">বড় থেকে ছোট</option>
                </select>
            </div>

            

            <div>

                <p className="my-5">
                মোট {sortedProducts.length}টি পণ্য দেখানো হচ্ছে
            </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sortedProducts.map((product) => (
                        <ProductsCards
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>

            </div>


        </>
    );
};

export default SortedCategoryProducts;



