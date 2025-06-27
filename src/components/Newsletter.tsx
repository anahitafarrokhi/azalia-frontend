import { Facebook } from '@/assets/svgs/Facebook';
import { Instagram } from '@/assets/svgs/Instagram';
import { Pinterest } from '@/assets/svgs/Pinterest';
import { Twiter } from '@/assets/svgs/Twiter';
import React from 'react';

const Newsletter = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">NEWSLETTER</h3>
      <p className="text-gray-700">
      Never miss out on new collections, events, or exclusive discounts.
      </p>
      <form className="flex items-center space-x-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
        >
          Subscribe
        </button>
      </form>
      {/* Social Media Links */}
      <div className="flex space-x-4">
        <a
          href="https://pinterest.com"
          target="_blank"
          rel="noreferrer"
          className="text-gray-700 hover:text-black w-12 h-12 p-4 rounded-full bg-gray-200"
        >
          <Pinterest color={"black"}/>

          
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          className="text-gray-700 hover:text-black w-12 h-12 p-4 rounded-full bg-gray-200"
        >
          
          <Facebook color={"black"}/>

        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="text-gray-700 hover:text-black  w-12 h-12 p-4 rounded-full bg-gray-200"
        >
          <Instagram color={"black"}/>

        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          className="text-gray-700 hover:text-black w-12 h-12 p-4 rounded-full bg-gray-200"
        >
          <Twiter color={"black"}/>
        </a>
      </div>
    </div>
  );
};

export default Newsletter;
