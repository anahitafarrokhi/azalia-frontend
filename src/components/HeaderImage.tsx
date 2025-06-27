import React from 'react';
import Image from 'next/image';

interface HeaderImageProps {
  imgSrc: any;
  altText: string;
}

const HeaderImage: React.FC<HeaderImageProps> = ({ imgSrc, altText }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <Image src={imgSrc} alt={altText} className="w-full h-auto object-cover rounded-md" />
    </div>
  );
};

export default HeaderImage;
