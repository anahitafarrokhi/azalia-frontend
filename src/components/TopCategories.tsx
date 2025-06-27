import Link from 'next/link';
import React from 'react';
interface MenuItem {
  title: string;
  href: string;
  JewelleryType? : number;
  Category? : number;

}
interface TopCategoriesProps {
  items: MenuItem[];
  header: string;
}

const TopCategories: React.FC<TopCategoriesProps> = ({ items, header }) => {
  return (
    <div className="border border-gray-300 rounded-md p-4 space-y-4">
      <h3 className="text-lg font-semibold " style={{ color: '#0e0d0dc7' }}>{header}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href ? { pathname: item.href, query: { Category : item.Category, JewelleryType: item.JewelleryType } } : "#"}
              target={item.href ? "_blank" : undefined}
              className="text-gray-700 hover:text-black"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>



  );
};

export default TopCategories;
