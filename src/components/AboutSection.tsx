import React from "react";
import Azalia from '@/assets/images/Azalia.png';
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center md:items-start">
      {/* Image Section */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-end">
        <Image
          src={Azalia}
          alt="Azalia Mozaffarian"
          className="rounded-lg shadow-md w-full max-w-md md:max-w-full"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
          About Azalia
        </h2>
        <p className="text-sm sm:text-base text-gray-700 mb-4">
          A Legacy of Seven Generations. A Future of Timeless Elegance.
        </p>
        <p className="text-sm sm:text-base text-gray-700 mb-4">
          Azalia Mozaffarian Jewelry is more than a brand—it is the continuation of a remarkable legacy. Born into the Mozaffarian family, one of the most respected jewelry dynasties in Iran, Azalia represents the seventh generation of jewelers who have dedicated their lives to the art of fine jewelry and exceptional gemstones.

        </p>
        <p className="text-sm sm:text-base text-gray-700">
          From the grand bazaars of Tehran to the global stage of luxury in Dubai, our family has built a name synonymous with trust, craftsmanship, and distinction for over 150 years.

        </p>
        <p className="text-sm sm:text-base text-gray-700">
          Carrying this heritage forward with modern vision, Azalia combines deep-rooted expertise in diamonds and colored stones with contemporary design sensibilities. With 23 years of personal experience, she brings to life creations that are as meaningful as they are exquisite—each one telling a story of tradition, authenticity, and refined beauty.

        </p>
        <p className="text-sm sm:text-base text-gray-700">
          At the heart of our philosophy is one promise: to honor our legacy by creating jewelry that becomes part of yours.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;







