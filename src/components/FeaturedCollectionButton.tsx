import React from 'react';

interface FeaturedCollectionButtonProps {
  buttonText: string;
  href: string;
}

const FeaturedCollectionButton: React.FC<FeaturedCollectionButtonProps> = ({ buttonText, href }) => {
  return (
    <div className="flex justify-center mt-4 animate-fade-in">
      <a
        className="bg-white hover:bg-black hover:text-white text-gray-800 text-xl py-3 px-8 rounded shadow transition duration-300 border border-black "
        href={href}
        data-load-more=""
      >
        <span>{buttonText}</span>
      </a>
    </div>
  );
};

export default FeaturedCollectionButton;


