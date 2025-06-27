import React from 'react';
import TopCategories from './TopCategories';
import Newsletter from './Newsletter';

const FooterContainer = () => {
  const FooterItems1 = [
    { title: 'Engagement Rings', href: '/recentlymaderings', JewelleryType: 6, Category: 3 },
    { title: 'Wedding Rings', href: '/recentlymaderings', JewelleryType: 10, Category: 3 },
    { title: 'Recently Made Rings', href: '/recentlymaderings', JewelleryType: 0, Category: 3 },
    { title: 'Jewellery', href: '/pages/engagement-rings/?metal=18K%20Rose%20Gold' },
    { title: 'Diamonds', href: '/pages/engagement-rings/?metal=18K%20Rose%20Gold' },
  ];

  const FooterItems2 = [
    { title: 'International Delivery', href: '/faqs' },
    { title: 'Lifetime Guarantee', href: '/faqs' },
    { title: 'Contact Us', href: '/contactus' },
    {
      title: 'Make an appointment',
      href: 'https://api.whatsapp.com/send/?phone=971523606874&text=Hi%21+I%27d+like+to+book+an+appointment.+Please+let+me+know+your+availability.&type=phone_number&app_absent=0'
    },
  ];

  const FooterItems3 = [
    { title: '+971 52 360 6874', href: 'https://api.whatsapp.com/send/?phone=971523606874&text=Hi%21+I%27d+like+to+book+an+appointment.+Please+let+me+know+your+availability.&type=phone_number&app_absent=0' },
    { title: 'info@fergusjames.com', href: '/contactus' },
  ];

  const FooterItems4 = [
    { title: 'About Azalia Mozafarian', href: '/aboutus' },
    { title: 'Returns Policy', href: '/faqs' },
    { title: 'FAQs', href: '/faqs' },
  ];

  return (
    <footer className="bg-white">
      {/* Optional Top Strip */}
      <section className="bg-gray-300 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Reserved for promo or links */}
        </div>
      </section>

      {/* Footer Content */}
      <div className="bg-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <TopCategories items={FooterItems1} header="BEST-SELLING CATEGORIES" />
          <TopCategories items={FooterItems2} header="AZALIA GUARANTEE" />
          <TopCategories items={FooterItems3} header="CUSTOMER SUPPORT" />
          <TopCategories items={FooterItems4} header="BROWSE" />
        </div>

        {/* Newsletter */}
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-xl text-center">
            <Newsletter />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterContainer;
