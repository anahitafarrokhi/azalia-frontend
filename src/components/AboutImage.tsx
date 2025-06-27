import React from "react";
import Image from 'next/image';
interface AboutImagekProps {
  text: string;
  href: any;
}
const AboutImage: React.FC<AboutImagekProps> = ({ text, href }) => {
  return (
    <div>
      <div className="relative">
        <Image
          src={href}
          alt="Engagement Ring"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 bg-black bg-opacity-25">
          <h1 className="text-white text-4xl md:text-5xl  mb-1">
            <p>
              {text}
            </p>
          </h1>
        </div>
      </div>
    </div>
  );
};
export default AboutImage;
