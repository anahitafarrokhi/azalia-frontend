import React, { useEffect, useState } from "react";
import AboutImage from "@/components/AboutImage";
import faqimg from '@/assets/images/FAQ.png';
import AllRecentEngagementRings from "@/components/AllRecentEngagementRings";
import Filter from "@/components/Filter";


export default function letterstuds() {

    return (
        <div>
            <AboutImage text={"Letter Studs"} href={faqimg} />
            
        </div>
    );
}
