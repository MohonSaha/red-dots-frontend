"use client";
import AboutSection from "@/components/UI/HomePage/AboutSection/AboutSection";
import DonorMap from "@/components/UI/HomePage/DonarListMap/DonarListMap";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import OurServiceSection from "@/components/UI/HomePage/OurServiceSection/OurServiceSection";
import RecentDonorSection from "@/components/UI/HomePage/RecentDonorSection/RecentDonorSection";
import SearchDonorSection from "@/components/UI/HomePage/SearchDonorSection/SearchDonorSection";
import Testimonials from "@/components/UI/HomePage/Testimonials/Testimonials";

import React from "react";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <SearchDonorSection />
      <AboutSection />
      {/* <OurServiceSection /> */}
      <RecentDonorSection />
      <DonorMap />
      <Testimonials />
    </>
  );
};

export default HomePage;
