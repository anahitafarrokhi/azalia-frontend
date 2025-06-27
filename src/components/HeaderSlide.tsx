import React from 'react';
import MegaMenu from './MegaMenu';
import engagementRings from '@/assets/images/menu-eng.webp';
import gemstones from '@/assets/images/menu-gemstone.webp';
import diamonds from '@/assets/images/menu-diamonds.webp';
import contactus from '@/assets/images/contact-nav-image.webp';
import jewellery from '@/assets/images/menu-jewel.webp';

import pic1 from '@/assets/images/pic17.jpeg';
import pic2 from '@/assets/images/pic2.jpeg';
import pic3 from '@/assets/images/pic3.jpeg';
import pic4 from '@/assets/images/pic4.jpeg';
import pic5 from '@/assets/images/pic5.jpeg';
import pic6 from '@/assets/images/pic6.jpeg';


import start from '@/assets/icons/start.svg';
import luxuary from '@/assets/icons/luxuary.svg';
import recent from '@/assets/icons/recent.svg';
import upload from '@/assets/icons/upload.svg';
import rosegold from '@/assets/icons/18k-rose-gold.png';
import yellow from '@/assets/icons/18k-yellow-gold.png';
import platinum from '@/assets/icons/platinum.png';
import trilogy from '@/assets/icons/trilogy.svg';
import halo from '@/assets/icons/halo.svg';
import solitiare from '@/assets/icons/solitiare.svg';
import diamondband from '@/assets/icons/diamond-band.svg';

import round from '@/assets/icons/round.png';
import pear from '@/assets/icons/pear.png';
import princess from '@/assets/icons/princess.png';
import cushion from '@/assets/icons/cushion.png';
import asscher from '@/assets/icons/asscher.png';
import oval from '@/assets/icons/oval.png';
import emerald from '@/assets/icons/emerald.png';
import radient from '@/assets/icons/radient.png';
import heart from '@/assets/icons/heart.png';
import marquise from '@/assets/icons/marquise.png';

import necklace from '@/assets/icons/jew-necklace.svg';
import braclet from '@/assets/icons/jew-braclet.svg';
import earrings from '@/assets/icons/jew-earrings.svg';
import rings from '@/assets/icons/jew-rings.svg';

import pink from '@/assets/icons/pink-sapphirep3x.svg';
import blue from '@/assets/icons/blue-sapphireb3x.svg';
import green from '@/assets/icons/emeraldGreen.svg';
import red from '@/assets/icons/rubyr3x.svg';
import luxuarynecklace from '@/assets/icons/luxuarynecklace1x.svg';
import luxuaryear from '@/assets/icons/luxuaryear1x.svg';
import giftdiamondnecklacce from '@/assets/icons/gift-diamond-necklacce.svg';
import hoopsearring from '@/assets/icons/gift-hoops-earring.svg';
import tennisbracelet from '@/assets/icons/gifts-tennis-bracelet.svg';
import luxuarybrace from '@/assets/icons/luxuarybrace1x.svg';
import gifts from '@/assets/images/menu-gifts.webp';
import HeaderImage from './HeaderImage';

type HeaderSlideProps = {
  navbarValue: string;
  closeMenu?: () => void; // <-- NEW

};

const HeaderSlide: React.FC<HeaderSlideProps> = ({ navbarValue,closeMenu }) => {
  const menuItemsengagement_rings1 = [
    {
      name: 'Our recent rings',
      href: '/recentlymaderings',
      imgSrc: recent,
      JewelleryType : 0 ,
      Category : 3 
    },
    {
      name: 'Upload your adorable ring here',
      href: '/uploadyourdreamring',
      imgSrc: upload,
    },
    {
      name: 'Start with a Ring Setting',
      href: '/ringdesign',
      imgSrc: start,
    },
    {
      name: 'Start with a Natural Diamond',
      href: '/startwithdiamondNat',
      imgSrc: luxuary,
    },
    {
      name: 'Start with a Lab-Grown Diamond',
      href: '/startwithdiamondLab',
      imgSrc: luxuary,
    },
    {
      name: 'Signature Engagement Rings',
      href: '/recentlymaderings',
      imgSrc: luxuary,
      JewelleryType :6 ,
      Category : 3 

    },
  ];
  const menuItemsengagement_rings2 = [
    {
      name: '18K White Gold',
      href: '/ringdesign',
      imgSrc: platinum,
    },
    {
      name: '18K Yellow Gold',
      href: '/ringdesign',
      imgSrc: yellow,
    },
    {
      name: '18K Rose Gold',
      href: '/ringdesign',
      imgSrc: rosegold,
    },
    {
      name: 'Platinum',
      href: '/ringdesign',
      imgSrc: platinum,
    },
  ];
  const menuItemsengagement_rings3 = [
    {
      name: 'Solitaire',
      href: '/ringdesign',
      imgSrc: solitiare,
    },
    {
      name: 'Diamond Band',
      href: '/ringdesign',
      imgSrc: diamondband,
    },
    {
      name: 'Halo',
      href: '/ringdesign',
      imgSrc: halo,
    },
    {
      name: 'Trilogy',
      href: '/ringdesign',
      imgSrc: trilogy,
    },
  ];

  const menuItemsengagement_rings4 = [
    {
      name: 'Round',
      href: '/ringdesign',
      imgSrc: round,
    },
    {
      name: 'Pear',
      href: '/ringdesign',
      imgSrc: pear,
    },
    {
      name: 'Princess',
      href: '/ringdesign',
      imgSrc: princess,
    },
    {
      name: 'Cushion',
      href: '/ringdesign',
      imgSrc: cushion,
    },
    {
      name: 'Asscher',
      href: '/ringdesign',
      imgSrc: asscher,
    },
    {
      name: 'Oval',
      href: '/ringdesign',
      imgSrc: oval,
    },
    {
      name: 'Radiant',
      href: '/ringdesign',
      imgSrc: radient,
    },
    {
      name: 'Emerald',
      href: '/ringdesign',
      imgSrc: emerald,
    },
    {
      name: 'Heart',
      href: '/ringdesign',
      imgSrc: heart,
    },
    {
      name: 'Marquise',
      href: '/ringdesign',
      imgSrc: marquise,
    },
  ];
  const menuItemsgemstones1 = [
    {
      name: 'Emerald Earrings',
      href: '/recentlymaderings',
      imgSrc: green,
      JewelleryType : 46,
      Category :4
    },
    {
      name: 'Blue Sapphire Earrings',
      href: '/recentlymaderings',
      imgSrc: blue,
      JewelleryType : 47,
      Category : 4
    },
    {
      name: 'Pink Sapphire Earrings',
      href: '/recentlymaderings',
      imgSrc: pink,
      JewelleryType : 48,
      Category : 4
    },
    {
      name: 'Ruby Earrings',
      href: '/recentlymaderings',
      imgSrc: red,
      JewelleryType : 49,
      Category : 4
    },
  ];
  const menuItemsgemstones2 = [
    {
      name: 'Emerald Bracelets',
      href: '/recentlymaderings',
      imgSrc: green,
      JewelleryType : 46,
      Category : 5
    },

  ];
  const menuItemsgemstones3 = [
    {
      name: 'Emerald Pendent',
      href: '/recentlymaderings',
      imgSrc: green,
      JewelleryType : 46 ,
      Category : 6
    },

  ];
  const menuItemsgemstones4 = [
    {
      name: 'Green Emerald',
      href: '/recentlymaderings',
      imgSrc: green,
      JewelleryType : 46 ,
      Category : 0
    },
    {
      name: 'Blue Sapphire',
      href: '/recentlymaderings',
      imgSrc: blue,
      JewelleryType : 47 ,
      Category : 0
    },
    {
      name: 'Pink Sapphire',
      href: '/recentlymaderings',
      imgSrc: pink,
      JewelleryType : 48,
      Category : 0
    },
    {
      name: 'Red Ruby',
      href: '/recentlymaderings',
      imgSrc: red,
      JewelleryType : 49 ,
      Category : 0
    },
  ];
  const menuItemsdiamonds1 = [
    {
      name: 'Round',
      href: '/DiamondShapes',
      imgSrc: round,
      Shape :10
    },
    {
      name: 'Pear',
      href: '/DiamondShapes',
      imgSrc: pear,
      Shape :1
    },
    {
      name: 'Princess',
      href: '/DiamondShapes',
      imgSrc: princess,
      Shape :2
    },
    {
      name: 'Cushion',
      href: '/DiamondShapes',
      imgSrc: cushion,
      Shape :6
    },
    {
      name: 'Asscher',
      href: '/DiamondShapes',
      imgSrc: asscher,
      Shape :7
    },
    {
      name: 'Oval',
      href: '/DiamondShapes',
      imgSrc: oval,
      Shape :3
    },
    {
      name: 'Radiant',
      href: '/DiamondShapes',
      imgSrc: radient,
      Shape :4
    },
    {
      name: 'Emerald',
      href: '/DiamondShapes',
      imgSrc: emerald,
      Shape :5
    },
    {
      name: 'Heart',
      href: '/DiamondShapes',
      imgSrc: heart,
      Shape :9
    },
    {
      name: 'Marquise',
      href: '/DiamondShapes',
      imgSrc: marquise,
      Shape :8
    },
  ];
  const menuItemsdiamonds2 = [
    {
      name: 'Diamond Hoops',
      href: '/recentlymaderings',
      JewelleryType : 19 ,
      Category : 4

    },
    {
      name: 'Diamond Studs',
      href: '/recentlymaderings',
      JewelleryType : 17 ,
      Category : 4

    },
    {
      name: 'Fashion Studs',
      href: '/recentlymaderings',
      JewelleryType : 50 ,
      Category : 4

    },
    {
      name: 'Tennis Bracelets',
      href: '/recentlymaderings',
      JewelleryType : 52 ,
      Category : 5
    },
    {
      name: 'Diamond Pendants',
      href: '/recentlymaderings',
      JewelleryType : 22 ,
      Category : 6

    },
    {
      name: 'Fashion Pendants',
      href: '/recentlymaderings',
      JewelleryType : 51 ,
      Category : 6
    },

  ];
  const menuItemsgifts1 = [
    {
      name: 'Hoop Earrings',
      href: '/pages/engagement-rings/?metal=18K%20White%20Gold',
      imgSrc: hoopsearring,
    },
    {
      name: 'Tennis Bracelets',
      href: '/pages/engagement-rings/?metal=18K%20Yellow%20Gold',
      imgSrc: tennisbracelet,
    },
    {
      name: 'Diamond Necklace',
      href: '/pages/engagement-rings/?metal=18K%20Rose%20Gold',
      imgSrc: giftdiamondnecklacce,
    }
  ];
  const menuItemsgifts2 = [
    {
      name: 'Earrings',
      href: '/pages/engagement-rings/?metal=18K%20White%20Gold',
      imgSrc: luxuaryear,
    },
    {
      name: 'Bracelets',
      href: '/pages/engagement-rings/?metal=18K%20Yellow%20Gold',
      imgSrc: luxuarybrace,
    },
    {
      name: 'Necklaces',
      href: '/pages/engagement-rings/?metal=18K%20Rose%20Gold',
      imgSrc: luxuarynecklace,
    }
  ];
  const menuItemsgifts3 = [
    {
      name: 'Gifts For Her',
      href: '/pages/engagement-rings/?metal=18K%20White%20Gold',
    },

  ];
  const menuItemsgifts4 = [
    {
      name: 'Gifts Under $750',
      href: '/pages/engagement-rings/?metal=18K%20White%20Gold',
    },
    {
      name: 'Gifts Under $1000',
      href: '/pages/engagement-rings/?metal=18K%20Yellow%20Gold',
    },
    {
      name: 'Gifts Under $1500',
      href: '/pages/engagement-rings/?metal=18K%20Rose%20Gold',
    }
  ];
  const menuItemsgifts5 = [
    {
      name: 'Birthday',
      href: '/pages/engagement-rings/?metal=18K%20White%20Gold',
    }
  ];
  const menuItemscontactus1 = [
    {
      name: 'About Us',
      href: '/aboutus',
    },
    {
      name: 'FAQs',
      href: '/faqs',
    },
    // {
    //   name: 'Blog',
    //   href: '/pages/engagement-rings/?metal=18K%20Rose%20Gold',
    // },

  ];
  const menuItemscontactus2 = [
    {
      name: 'Office 11F',
      href: '',
    },
    {
      name: 'Almas Tower, JLT',
      href: '',
    },
    {
      name: 'Dubai, UAE',
      href: '',
    },
    {
      name: '+971 52 360 6874',
      href: '',
    },
  ];
  const menuItemscontactus3 = [
    {
      name: 'Monday',
      href: '/pages/engagement-rings/?metal=18K%20White%20Gold',
    },
    {
      name: '9AM - 5:30PM',
      href: '/pages/engagement-rings/?metal=Platinum',
    },
    {
      name: 'Tuesday',
      href: '/pages/engagement-rings/?metal=18K%20Yellow%20Gold',
    },
    {
      name: '9AM - 5:30PM',
      href: '/pages/engagement-rings/?metal=Platinum',
    },
    {
      name: 'Wednesday',
      href: '/pages/engagement-rings/?metal=18K%20Rose%20Gold',
    },
    {
      name: '9AM - 5:30PM',
      href: '/pages/engagement-rings/?metal=Platinum',
    },
    {
      name: 'Thursday',
      href: '/pages/engagement-rings/?metal=Platinum',
    },
    {
      name: '9AM - 5:30PM',
      href: '/pages/engagement-rings/?metal=Platinum',
    },
    {
      name: 'Friday',
      href: '/pages/engagement-rings/?metal=Platinum',
    },
    {
      name: '9AM - 5:30PM',
      href: '/pages/engagement-rings/?metal=Platinum',
    },
    {
      name: 'Saturday',
      href: '/pages/engagement-rings/?metal=Platinum',
    },
    {
      name: 'Closed',
      href: '/pages/engagement-rings/?metal=Platinum',
    },
    {
      name: 'Sunday',
      href: '/pages/engagement-rings/?metal=Platinum',
    },
    {
      name: 'Closed',
      href: '/pages/engagement-rings/?metal=Platinum',
    }
  ];
  const menuItemsjewellery1 = [
    {
      name: 'Ring',
      href: '/recentlymaderings',
      imgSrc: rings,
      JewelleryType : 0 ,
      Category : 3 
    },
  
    {
      name: 'Earrings',
      href: '/recentlymaderings',
      imgSrc: earrings,
      JewelleryType : 0 ,
      Category : 4 
    },
    {
      name: 'Bracelets',
      href: '/recentlymaderings',
      imgSrc: braclet,
      JewelleryType : 0 ,
      Category : 5 
    },
    {
      name: 'Necklaces',
      href: '/recentlymaderings',
      imgSrc: necklace,
      JewelleryType : 0 ,
      Category : 6 
    },
  ];
  const menuItemsjewellery2 = [
    {
      name: 'Natural Engagement Rings',
      href: '/recentlymaderings',
      JewelleryType : 39 ,
      Category :3 
    },
    {
      name: 'Lab-Grown Engagement Ring',
      href: '/recentlymaderings',
      JewelleryType : 40 ,
      Category : 3 
    },
    {
      name: 'Wedding Rings',
      href: '/recentlymaderings',
      JewelleryType : 10 ,
      Category : 3
    },
    {
      name: 'Eternity Rings',
      href: '/recentlymaderings',
      JewelleryType : 13 ,
      Category : 3
    },
    {
      name: 'Fashion Rings',
      href: '/recentlymaderings',
      JewelleryType : 14 ,
      Category : 3 
    },
  ];
  const menuItemsjewellery3 = [
    {
      name: 'Tennis Bracelets',
      href: '/recentlymaderings',
      imgSrc: luxuary,
      JewelleryType : 42 ,
      Category : 5

    },
    {
      name: 'Letter Bracelets',
      href: '/recentlymaderings',
      imgSrc: luxuary,
      JewelleryType : 45 ,
      Category : 5

    }
  ];
  const menuItemsjewellery4 = [
    {
      name: 'Constellation Pendants',
      href: '/recentlymaderings',
      JewelleryType : 34,
      Category : 6
    },
    {
      name: 'Constellation Rings',
      href: '/recentlymaderings',
      JewelleryType : 29,
      Category : 3
    },
    {
      name: 'Letter Pendants',
      href: '/recentlymaderings',
      JewelleryType : 35,
      Category : 6
    },

  ];
  const menuItemsjewellery5 = [
    {
      name: 'Diamond Studs',
      href: '/recentlymaderings',
      JewelleryType : 17,
      Category : 4
    },
    {
      name: 'Diamond Hoops',
      href: '/recentlymaderings',
      JewelleryType : 19,
      Category : 4
    },
    {
      name: 'Fashion Studs',
      href: '/recentlymaderings',
      JewelleryType : 20,
      Category : 4
    },
    {
      name: 'Fashion Drops',
      href: '/recentlymaderings',
      JewelleryType : 41,
      Category : 4
    },
    {
      name: 'Letter Studs',
      href: '/recentlymaderings',
      JewelleryType : 21,
      Category : 4
    },

  ];
  const menuItemsjewellery6 = [
    {
      name: 'Diamond Pendants',
      href: '/recentlymaderings',
      JewelleryType : 22,
      Category : 6
    },
    {
      name: 'Fashion Pendants',
      href: '/recentlymaderings',
      JewelleryType : 23,
      Category : 6
    },
    {
      name: 'Constellation Pendants',
      href: '/recentlymaderings',
      JewelleryType : 34,
      Category : 6
    },
    {
      name: 'Letter pendants',
      href: '/recentlymaderings',
      JewelleryType : 35,
      Category : 6
    },
    {
      name: 'Arabic Letter Pendants',
      href: '/recentlymaderings',
      JewelleryType : 32,
      Category : 6
    },

  ];

  return (
    <div className=" bg-white overflow-hidden relative border-t mt-4 container mx-auto">
      <div className={`transition-transform duration-1000 ease-in-out ${navbarValue === 'engagement_rings' ? 'translate-x-90' : '-translate-x-full'}`}>
        {navbarValue === 'engagement_rings' && (
          <section className="flex gap-4 px-4 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 w-4/5">
              <MegaMenu onItemClick={closeMenu} items={menuItemsengagement_rings1} twoLines={false} />
              <MegaMenu onItemClick={closeMenu} items={menuItemsengagement_rings2} title={'Shop By Metal'} twoLines={false} biggerImg={true} />
              <MegaMenu onItemClick={closeMenu} items={menuItemsengagement_rings3} title={'Shop By Style'} twoLines={false} biggerImg={true} />
              <MegaMenu onItemClick={closeMenu} items={menuItemsengagement_rings4} title={'Shop By Shape'} twoLines={true} />
            </div>
            <div className="hidden lg:flex w-1/5">
              <HeaderImage imgSrc={pic1} altText={'engagement_rings'} />
            </div>
          </section>
        )}

      </div>
      <div className={`w-full h-full transition-transform duration-1000 ease-in-out  ${navbarValue === 'jewellery' ? 'translate-x-90' : 'translate-x-full'}`}>
        {navbarValue === 'jewellery' && (
          <section className="flex gap-4 px-4 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 w-4/5">
              <MegaMenu onItemClick={closeMenu} items={menuItemsjewellery1} title={'Categories'} twoLines={false} />
              <div>
                <MegaMenu onItemClick={closeMenu} items={menuItemsjewellery2} title={'Rings'} twoLines={false} notShowIcon={true}  />
                <p className="p-2"></p>

                <MegaMenu onItemClick={closeMenu} items={menuItemsjewellery3} title={'Bracelets'} twoLines={false} notShowIcon={true} />
              </div>
              <div>
                <MegaMenu onItemClick={closeMenu} items={menuItemsjewellery5} title={'Earrings'} twoLines={false} notShowIcon={true} />
                <p className="p-2"></p>
                <MegaMenu onItemClick={closeMenu} items={menuItemsjewellery6} title={'Necklaces'} twoLines={false} notShowIcon={true} />
              </div>
              <MegaMenu onItemClick={closeMenu} items={menuItemsjewellery4} title={'Collections'} twoLines={false} notShowIcon={true} />
            </div>
            <div className="hidden lg:flex w-1/5">
              <HeaderImage imgSrc={pic2} altText={'jewellery'} />
            </div>
          </section>
        )}
      </div>
      <div className={`w-full h-full transition-transform duration-1000 ease-in-out ${navbarValue === 'gemstones' ? 'translate-x-90' : '-translate-x-full'}`}>
        {navbarValue === 'gemstones' && (
          <section className="flex gap-4 px-4 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 w-4/5">
              <MegaMenu onItemClick={closeMenu} items={menuItemsgemstones1} title={'Earrings'} twoLines={false} />
              <MegaMenu onItemClick={closeMenu} items={menuItemsgemstones2} title={'Bracelets'} twoLines={false} />
              <MegaMenu onItemClick={closeMenu} items={menuItemsgemstones3} title={'Necklaces'} twoLines={false} />
              <MegaMenu onItemClick={closeMenu} items={menuItemsgemstones4} title={'Shop By Gemstone'} twoLines={false} />
            </div>
            <div className="hidden lg:flex w-1/5">
              <HeaderImage imgSrc={pic3} altText={'gemstones'} />
            </div>
          </section>
        )}
      </div>
      <div className={`w-full h-full transition-transform duration-1000 ease-in-out ${navbarValue === 'gifts' ? 'translate-x-90' : 'translate-x-full'}`}>
        {navbarValue === 'gifts' && (
          <section className="flex gap-4 px-4 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 w-4/5">
              <MegaMenu onItemClick={closeMenu} items={menuItemsgifts1} title={'Top Gifts'} twoLines={false} />
              <MegaMenu onItemClick={closeMenu} items={menuItemsgifts2} title={'Shop By Type'} twoLines={false} />
              <MegaMenu onItemClick={closeMenu} items={menuItemsgifts3} title={'Shop By Gender'} twoLines={false} notShowIcon={true} />
              <MegaMenu onItemClick={closeMenu} items={menuItemsgifts4} title={'More Gifts Ideals'} twoLines={false} notShowIcon={true} />
              <MegaMenu onItemClick={closeMenu} items={menuItemsgifts5} title={'Shop By Occasion'} twoLines={false} notShowIcon={true} />

            </div>
            <div className="hidden lg:flex w-1/5">
              <HeaderImage imgSrc={pic4} altText={'gifts'} />
            </div>
          </section>
        )}
      </div>
      <div className={`w-full h-full transition-transform duration-1000 ease-in-out ${navbarValue === 'diamonds' ? 'translate-x-90' : '-translate-x-full'}`}>
        {navbarValue === 'diamonds' && (
          <section className="flex gap-4 px-4 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-4/5">
              <MegaMenu onItemClick={closeMenu} items={menuItemsengagement_rings1} twoLines={false} />
              <MegaMenu onItemClick={closeMenu} items={menuItemsdiamonds1} title={'Loose Diamonds'} twoLines={true} />
              <MegaMenu onItemClick={closeMenu} items={menuItemsdiamonds2} title={'Diamond Jewellery'} notShowIcon={true} twoLines={false} />
            </div>
            <div className="hidden lg:flex w-1/5">
              <HeaderImage imgSrc={pic5} altText={'diamonds'} />
            </div>
          </section>
        )}
      </div>
      <div className={`w-full h-full transition-transform duration-1000 ease-in-out ${navbarValue === 'contact_us' ? 'translate-x-90' : 'translate-x-full'}`}>
        {navbarValue === 'contact_us' && (
          <section className="flex gap-4 px-4 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-4/5">
              <MegaMenu onItemClick={closeMenu} items={menuItemscontactus1} title={'Explore'} twoLines={false} notShowIcon={true} />
              <MegaMenu onItemClick={closeMenu} items={menuItemscontactus2} title={'Contact Us'} twoLines={false} notShowIcon={true} textModel={true} />
              <MegaMenu onItemClick={closeMenu} items={menuItemscontactus3} title={'By Appointment Only'} twoLines={true} notShowIcon={true} textModel={true} />
            </div>
            <div className="hidden lg:flex w-1/5">
              <HeaderImage imgSrc={pic6} altText={'contact_us'} />
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default HeaderSlide;
