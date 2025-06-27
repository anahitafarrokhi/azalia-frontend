import React from 'react'
import ImageCard from './ImageCard'
import ladz1 from '@/assets/images/ladz1.webp';
import ladz2 from '@/assets/images/ladz2.webp';
import ladz3 from '@/assets/images/ladz3.webp';
import ladz4 from '@/assets/images/ladz4.webp';


import pic10 from '@/assets/images/pic10.jpeg';
import pic11 from '@/assets/images/pic11.jpeg';
import pic12 from '@/assets/images/pic12.jpeg';
import pic13 from '@/assets/images/pic13.jpeg';




export const ImageCardContainer = () => {
  const cards = [
    {
      imageUrl: pic13,
      link: "/collections/diamond-earrings",
      title: "DIAMOND EARRINGS",
    },
    {
      imageUrl: pic11,
      link: "/collections/diamond-bracelets",
      title: "DIAMOND BRACELETS",
    },
    {
      imageUrl: pic12,
      link: "/collections/diamond-necklaces",
      title: "DIAMOND NECKLACES",
    },
    {
      imageUrl: pic10,
      link: "/collections/diamond-jewellery",
      title: "DIAMOND JEWELLERY",
    },
  ];
  return (
    <section className="container mx-auto py-8">
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div key={index} className="mb-8">
            <div className="aspect-w-1 aspect-h-1">
              <ImageCard imageUrl={card.imageUrl} link={card.link} title={card.title} />
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
