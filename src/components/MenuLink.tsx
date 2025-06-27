import React from 'react';

interface MenuLinkProps {
  text: string;
  href: string;
}

const MenuLink: React.FC<MenuLinkProps> = ({ text }) => {
  return (
    <h2 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
      {text}
    </h2>
  );
};

export default MenuLink;
