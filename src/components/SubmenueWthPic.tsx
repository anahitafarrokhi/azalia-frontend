import React from 'react';

const SubmenueWthPic = () => {
  const menuItems = [
    {
      name: '18K White Gold',
      href: '/pages/engagement-rings/?metal=18K%20White%20Gold',
      imgSrc: 'https://fergusjames.in/product_images/uploaded_images/platinum.png',
    },
    {
      name: '18K Yellow Gold',
      href: '/pages/engagement-rings/?metal=18K%20Yellow%20Gold',
      imgSrc: 'https://fergusjames.in/product_images/uploaded_images/18k-yellow-gold.png',
    },
    {
      name: '18K Rose Gold',
      href: '/pages/engagement-rings/?metal=18K%20Rose%20Gold',
      imgSrc: 'https://fergusjames.in/product_images/uploaded_images/18k-rose-gold.png',
    },
    {
      name: 'Platinum',
      href: '/pages/engagement-rings/?metal=Platinum',
      imgSrc: 'https://fergusjames.in/product_images/uploaded_images/platinum.png',
    },
  ];

  return (
    <li className="relative group">
      <a href="#" className="block text-lg font-medium hover:text-blue-600">
        Shop by Metal
      </a>
      <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-md rounded-md">
        <ul className="p-4">
          {menuItems.map((item, index) => (
            <li key={index} className="flex items-center space-x-2 mb-3 hover:text-blue-500">
              <a href={item.href} className="flex items-center">
                <img src={item.imgSrc} alt={item.name} width="50" className="mr-2" />
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default SubmenueWthPic;
