'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CategoryLinks = ({ categories }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((menu) => {
        const isActive = pathname === `/category/${menu.slug}`;

        return (
          <Link
            key={menu.id}
            href={`/category/${menu.slug}`}
            className={`flex items-center gap-2 rounded-box px-4 py-2 transition-colors ${
              isActive
                ? 'bg-purple-500 text-white font-semibold shadow-sm'
                : 'bg-base-100 text-base-content hover:bg-green-100 hover:text-purple-400'
            }`}
          >
            <span>{menu.icon}</span>
            <span>{menu.nameBn}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryLinks;