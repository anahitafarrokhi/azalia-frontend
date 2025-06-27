import React from 'react'
import ImageCard from './ImageCard'
import cele1 from '@/assets/images/cele1.webp';
import cele2 from '@/assets/images/cele2.webp';
import cele3 from '@/assets/images/cele3.webp';
import cele4 from '@/assets/images/cele4.webp';

import pic7 from '@/assets/images/pic7.jpeg';
import pic8 from '@/assets/images/pic8.jpeg';
import pic9 from '@/assets/images/pic9.jpeg';
import pic14 from '@/assets/images/pic14.jpeg';
import { Title } from './Title';
import CelebritiesImageCard from './CelebritiesImageCard';


export const CelebritiesImageCardContainer = () => {
  const cards = [
    {
      imageUrl: pic7,
      link: "/collections/diamond-earrings",
      title: "Scott Mctominay",
    },
    {
      imageUrl: pic8,
      link: "/collections/diamond-bracelets",
      title: "Lucy Mecklenburgh",
    },
    {
      imageUrl: pic14,
      link: "/collections/diamond-necklaces",
      title: "Rod Stewart",
    },
    {
      imageUrl: pic9,
      link: "/collections/diamond-jewellery",
      title: "The Vardys",
    },
  ];
  return (
    <section className="container mx-auto py-8 bg-gray-200">
      {/* <h2 className="text-center text-2xl font-semibold mb-8">As worn by</h2> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
        {cards.map((card, index) => (
          <CelebritiesImageCard
            key={index}
            imageUrl={card.imageUrl}
            link={card.link}
            title={card.title}
            altText={card.title}
          />
        ))}
      </div>
    </section>
  )
}
