import React, { useEffect, useState } from "react";
import AboutImage from "@/components/AboutImage";
import AboutSection from "@/components/AboutSection";
import AzaliaProccess from "@/components/AzaliaProccess";
import contact from '@/assets/images/contact-nav-image.webp';


export default function Aboutus() {

  return (
    <div>
      <AboutImage text={"About Azalia Mozafarrian"} href={contact}/>
      <AboutSection/>
      <AzaliaProccess/>
    </div>
  );
}
