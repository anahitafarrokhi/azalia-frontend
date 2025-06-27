import React, { useEffect, useState } from "react";
import AboutImage from "@/components/AboutImage";
import faqimg from '@/assets/images/FAQ.png';
import AllRecentEngagementRings from "@/components/AllRecentEngagementRings";
import Filter from "@/components/Filter";


export default function fashionpendants() {

    return (
        <div>
            <AboutImage text={"Fashion Pendants"} href={faqimg} />
            
        </div>
    );
}
