"use client";
import DailyDeals from "@/components/UI/DailyDonor/DailyDonor";
import AboutSection from "@/components/UI/HomePage/AboutSection/AboutSection";
import DonorMap from "@/components/UI/HomePage/DonarListMap/DonarListMap";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import OurServiceSection from "@/components/UI/HomePage/OurServiceSection/OurServiceSection";
import RecentDonorSection from "@/components/UI/HomePage/RecentDonorSection/RecentDonorSection";
import SearchDonorSection from "@/components/UI/HomePage/SearchDonorSection/SearchDonorSection";
import Testimonials from "@/components/UI/HomePage/Testimonials/Testimonials";
import { motion, useScroll } from "framer-motion";

import React, { useRef } from "react";

const HomePage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.3 1"],
  });
  return (
    <>
      {/* <div>
        <div>
          <h1>1</h1>
        </div>
        <div>
          <h1>2</h1>
        </div>
      </div> */}

      <HeroSection />
      <SearchDonorSection />
      <DailyDeals />
      <AboutSection />
      {/* <OurServiceSection /> */}
      <RecentDonorSection />
      <DonorMap />
      <Testimonials />
    </>
  );
};

export default HomePage;
