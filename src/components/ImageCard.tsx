import Image from 'next/image';
import React from 'react';

interface ImageCardProps {
  imageUrl: any;
  link: string;
  title: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, link, title }) => {
  return (
    <div className="w-full  flex">
      <div className="w-full">
        <div className="relative w-full hover:scale-105 transform transition duration-300">
          <a href={link} className="block h-full">
            <Image
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
              width={700}
              //style={{ aspectRatio: "1 / 1" }}
            />
          </a>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-100">
            <h3 className="text-white text-lg font-semibold text-center">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
