import Image from 'next/image';
import React, { useState } from 'react';
import resizing from '@/assets/icons/Resizing.png';
import returnPolicy from '@/assets/icons/return product.png';
import guarantee from '@/assets/icons/Guarantee.png';
import engraving from '@/assets/icons/engraving.png';

const AzaliaProccess = () => {
  const [activeTab, setActiveTab] = useState('');

  const toggleTab = (tab: string) => {
    setActiveTab(activeTab === tab ? '' : tab);
  };

  return (
    <div className="bg-gray-100 w-full py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Text Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">THE Azalia Mozaffarian PROCESS</h2>
            <p className="text-gray-700 mb-4">
              Every product is made to order and totally customizable.
            </p>
            <p className="text-gray-700 mb-4">
              We source GIA &amp; IGI certified diamonds on a live marketplace
              between our suppliers. This allows us to find the best value option
              for you... and as we don't hold any stock, I am totally unbiased and
              can give my honest opinion on stones (this is why our Google reviews
              are so good)... but in the end, it’s all up to you!
            </p>
            <p className="text-gray-700">
              Eventually, after you have selected a diamond option, orders are
              secured with a 25% deposit and then 75% is due on collection or
              prior to shipping. Rings take around 10-14 days usually but can be
              done quicker if urgent... Deposit can be paid online or in our
              office.
            </p>
          </div>

          {/* Accordion Section */}
          <div className="space-y-4">
            {/* Lifetime Guarantee */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Image
                  src={guarantee}
                  alt="Lifetime Guarantee"
                  className="w-6 h-6"
                />
              </div>
              <div className="flex-1">
                <button
                  className="flex justify-between items-center w-full text-left font-medium"
                  onClick={() => toggleTab('lifetimeGuarantee')}
                >
                  <span>LIFETIME GUARANTEE</span>
                  <span className='text-2xl'>{activeTab === 'lifetimeGuarantee' ? '-' : '+'}</span>
                </button>
                {activeTab === 'lifetimeGuarantee' && (
                  <p className="text-gray-600 mt-2">
                    All our pieces are thoroughly checked prior to shipment /
                    delivery. However, if there is ever a problem with an item
                    you’ve purchased from us, we are 100% committed to ensuring
                    the quality of our products and will repair any damage
                    following an evaluation.
                  </p>
                )}
              </div>
            </div>

            {/* Free Resizing */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Image
                  src={resizing}
                  alt="Free Resizing"
                  className="w-6 h-6"
                />
              </div>
              <div className="flex-1">
                <button
                  className="flex justify-between items-center w-full text-left font-medium"
                  onClick={() => toggleTab('freeResizing')}
                >
                  <span>FREE RESIZING</span>
                  <span className='text-2xl'>{activeTab === 'freeResizing' ? '-' : '+'}</span>
                </button>
                {activeTab === 'freeResizing' && (
                  <p className="text-gray-600 mt-2">
                    We will be more than happy to resize any item(s) purchased,
                    free of charge. To have your item resized, please send an
                    email to{' '}
                    <a
                      href="mailto:info@fergusjames.com"
                      className="text-blue-500 underline"
                    >
                      info@fergusjames.com
                    </a>
                    .
                  </p>
                )}
              </div>
            </div>

            {/* 30 Days Return */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Image
                  src={returnPolicy}
                  alt="30 Days Return"
                  className="w-6 h-6"
                />
              </div>
              <div className="flex-1">
                <button
                  className="flex justify-between items-center w-full text-left font-medium"
                  onClick={() => toggleTab('returnPolicy')}
                >
                  <span>30 DAYS RETURN</span>
                  <span className='text-2xl'>{activeTab === 'returnPolicy' ? '-' : '+'}</span>
                </button>
                {activeTab === 'returnPolicy' && (
                  <p className="text-gray-600 mt-2">
                    We want you to be 100% satisfied with your purchase. If you’re
                    not completely happy, please return your item(s) within 30
                    days in the original condition for a full refund or exchange.
                  </p>
                )}
              </div>
            </div>

            {/* Free Engraving */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Image
                  src={engraving}
                  alt="Free Engraving"
                  className="w-6 h-6"
                />
              </div>
              <div className="flex-1">
                <button
                  className="flex justify-between items-center w-full text-left font-medium"
                  onClick={() => toggleTab('freeEngraving')}
                >
                  <span>FREE ENGRAVING</span>
                  <span className='text-2xl'>{activeTab === 'freeEngraving' ? '-' : '+'}</span>
                </button>
                {activeTab === 'freeEngraving' && (
                  <p className="text-gray-600 mt-2">
                    We offer free engraving on all of our engagement rings,
                    wedding bands, and eternity rings. Personal engravings can be
                    alpha-numeric in a range of styles including lower case, upper
                    case, and italics. Approximately 15 characters. This option
                    will be presented to you at checkout.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AzaliaProccess;
