
import React from "react";

const Loadingpage = () => {
  return (
    <div className="min-h-screen bg-base-100 px-4 py-8">
      <div className="mx-auto max-w-7xl animate-pulse">

        {/* Heading Skeleton */}
        <div className="mb-8 space-y-3">
          <div className="h-8 w-64 rounded-lg bg-gray-200"></div>
          <div className="h-4 w-80 max-w-full rounded bg-gray-200"></div>
        </div>

        {/* Banner Skeleton */}
        <div className="mb-10 flex flex-col items-center justify-between gap-6 rounded-2xl bg-gray-100 p-6 sm:flex-row sm:p-10">
          <div className="w-full space-y-4">
            <div className="h-8 w-3/4 rounded-lg bg-gray-200"></div>
            <div className="h-4 w-full rounded bg-gray-200"></div>
            <div className="h-4 w-5/6 rounded bg-gray-200"></div>
            <div className="h-10 w-36 rounded-lg bg-gray-300"></div>
          </div>

          <div className="h-40 w-40 shrink-0 rounded-2xl bg-gray-200"></div>
        </div>

        {/* Products Heading */}
        <div className="mb-6 h-7 w-56 rounded-lg bg-gray-200"></div>

        {/* Product Cards Skeleton */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              {/* Product Image */}
              <div className="mb-5 flex items-center gap-4">
                <div className="h-16 w-16 shrink-0 rounded-xl bg-gray-200"></div>

                <div className="flex-1 space-y-3">
                  <div className="h-5 w-3/4 rounded bg-gray-200"></div>
                  <div className="h-3 w-1/2 rounded bg-gray-200"></div>
                </div>
              </div>

              {/* Price */}
              <div className="mb-4 space-y-3">
                <div className="h-4 w-24 rounded bg-gray-200"></div>
                <div className="h-8 w-32 rounded-lg bg-gray-200"></div>
              </div>

              {/* Price Change */}
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <div className="h-4 w-24 rounded bg-gray-200"></div>
                <div className="h-6 w-16 rounded-full bg-gray-200"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Loadingpage;

