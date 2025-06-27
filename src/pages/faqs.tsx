import React, { useEffect, useState } from "react";
import AboutImage from "@/components/AboutImage";
import faqimg from '@/assets/images/FAQ.png';
import Faq from "@/components/Faq";


export default function Faqs() {

  return (
    <div>
      <AboutImage text={"Frequently Asked Questions"} href={faqimg}/>
      <Faq/>
    </div>
  );
}
