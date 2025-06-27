import React from 'react';
import MenuLink from './MenuLink';
import MenuItem from './MenuItem';

interface MenuItemProps {
  name: string;
  href: string;
  imgSrc?: any;
  JewelleryType?: number;
  Category?: number;
  Shape?: number;
}

interface MegaMenuProps {
  items: MenuItemProps[];
  title?: string;
  twoLines: boolean;
  biggerImg?: boolean;
  notShowIcon?: boolean;
  textModel?: boolean;
  onItemClick?: () => void; 
}

const MegaMenu: React.FC<MegaMenuProps> = ({
  items,
  title,
  twoLines,
  biggerImg,
  notShowIcon,
  textModel,
  onItemClick
}) => {
  return (
    <div className="flex flex-col w-full">
      {title ? (
        <div className="border-b pb-2 mb-2">
          <MenuLink text={title} href="/" />
        </div>
      ) : (
        <div className="hidden lg:flex pb-2 mb-2 h-9" />
      )}

      <ul
        className={`grid gap-y-2 text-xs sm:text-sm md:text-base ${
          twoLines
            ? 'grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-x-4'
            : 'grid-cols-1'
        }`}
      >
        {items.map((item, index) => (
          <MenuItem
            key={index}
            name={item.name}
            href={item.href}
            imgSrc={item.imgSrc}
            biggerImg={biggerImg}
            notShowIcon={notShowIcon}
            textModel={textModel}
            JewelleryType={item.JewelleryType}
            Category={item.Category}
            Shape={item.Shape}
            onClick={onItemClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default MegaMenu;
