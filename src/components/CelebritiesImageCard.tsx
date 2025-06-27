import Image from 'next/image';
import React from 'react';

interface ImageCardProps {
  imageUrl: any;
  link: string;
  title: string;
  altText: string;
}

const CelebritiesImageCard: React.FC<ImageCardProps> = ({ imageUrl, link, title, altText }) => {
  return (
    <div className="w-full flex flex-col items-center ">
    <div className="w-full overflow-hidden relative">
      <a href={link} className="block h-full">
        <Image
          src={imageUrl}
          alt={altText}
          className="w-full h-full object-cover  hover:scale-110 transform transition duration-500"
          loading="lazy"
          style={{ aspectRatio: "0.65 / 1" }}
        />
      </a>
    </div>
    {/* <h3 className="text-center text-black font-medium text-sm mt-4">{title}</h3> */}
  </div>
  );
};


export default CelebritiesImageCard;
