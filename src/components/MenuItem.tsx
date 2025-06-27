import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface MenuItemProps {
  name: string;
  href: string;
  imgSrc?: string;
  biggerImg?: boolean;
  notShowIcon?: boolean;
  textModel?: boolean;
  Category?: number;
  JewelleryType?: number;
  Shape? : number;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  name,
  href,
  imgSrc,
  biggerImg,
  notShowIcon,
  textModel,
  Category,
  JewelleryType,
  Shape,
  onClick
}) => {
  const imageSize = biggerImg ? 'w-10 h-10' : 'w-7 h-7';

  return (
    <li
      className={`flex items-center transition ease-in-out duration-300 h-auto sm:h-10 ${
        textModel ? '' : 'hover:bg-gray-100'
      }`}
    >
      {textModel ? (
        <div className={`flex items-center space-x-2 ${textModel ? 'cursor-text' : ''}`}>
          {!notShowIcon && imgSrc && (
            <Image
              src={imgSrc}
              alt={name}
              width={100}
              height={100}
              className={`${imageSize} object-contain`}
            />
          )}
          <span className="text-xs sm:text-sm md:text-base">{name}</span>
        </div>
      ) : (
       <Link
  href={{
    pathname: href,
    query: {
      JewelleryType,
      Category,
      Shape,
    },
  }}
  className="flex items-center space-x-2 w-full"
  onClick={onClick} // ← This closes the mobile menu
>
  {!notShowIcon && imgSrc && (
    <Image
      src={imgSrc}
      alt={name}
      width={100}
      height={100}
      className={`${imageSize} object-contain`}
    />
  )}
  <span className="text-xs sm:text-xs md:text-sm xl:text-base">{name}</span>
</Link>
      )}
    </li>
  );
};

export default MenuItem;
