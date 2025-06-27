import React, { useEffect, useState } from "react";
import NavBar from '../components/NavBar';
import homescreen_img from '@/assets/images/homescreen_img.jpg';
import Image from "next/image";
import HomeProductCardSlider from "@/components/HomeProductCardSlider";
import FeaturedCollectionButton from "@/components/FeaturedCollectionButton";
import { ImageCardContainer } from "@/components/ImageCardContainer";
import { Title } from "@/components/Title";
import { CelebritiesImageCardContainer } from "@/components/CelebritiesImageCardContainer";
import FooterContainer from "@/components/FooterContainer";
import Link from 'next/link';
import BudgetRange from "@/components/BudgetRange";


export default function Home() {

  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        {/* Background Image */}
        <Image
          src={homescreen_img}
          alt="Engagement Ring"
          className="w-full h-[500px] md:h-[800px] lg:h-[1000px] object-cover"
        />

        {/* Overlay for md+ only */}
        <div className="hidden md:flex absolute inset-0 bg-black bg-opacity-25 px-8 md:px-16 justify-center items-start flex-col">
          <h1 className="text-white text-4xl md:text-5xl mb-2 leading-tight">
            <p>Design your perfect</p>
            <p>engagement ring</p>
          </h1>
          <Link href="/ringdesign">
            <button className="bg-white text-black font-semibold px-6 py-4 mt-4 rounded shadow hover:bg-gray-200">
              GET STARTED
            </button>
          </Link>
        </div>
      </div>

      {/* Title + CTA for mobile only */}
      <div className="flex flex-col items-center text-center px-4 py-6 md:hidden">
        <h1 className="text-2xl font-semibold text-black leading-snug">
          <p>Design your perfect</p>
          <p>engagement ring</p>
        </h1>
        <Link href="/ringdesign">
          <button className="bg-black text-white font-semibold px-6 py-3 mt-4 rounded hover:bg-gray-800">
            GET STARTED
          </button>
        </Link>
      </div>

      {/* Products Section */}
      <section className="p-6 sm:p-8 container mx-auto">
        <Title title={"Recently Made Rings"} />
        <HomeProductCardSlider />
      </section>

      <FeaturedCollectionButton
        buttonText={"View All"}
        href={`/recentlymaderings?JewelleryType=6&Category=3`}
      />

      <ImageCardContainer />

      <section className="bg-gray-200">
        <CelebritiesImageCardContainer />
      </section>

      {/* Instagram Section */}
      <div className="container mx-auto py-8">
        <div className="text-center mb-6 px-4">
          <h2 className="text-2xl font-semibold animate-fade-in">
            Follow us on Instagram
          </h2>
          <p className="text-gray-700 mt-2 animate-fade-in text-sm sm:text-base">
            Tag <span className="font-semibold">@AzaliaMozaffarian</span> in your
            Instagram photos for a chance to be featured here.
            <br />
            Find more inspiration on{" "}
            <a
              href="https://www.instagram.com/fergusjamesdiamonds/"
              className="underline text-blue-600"
              target="_blank"
            >
              our Instagram
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
