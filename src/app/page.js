"use client"

import AboutSection from "@/ui/sections/about/AboutSection";
import BookSection from "@/ui/sections/book/BookSection";
import GallerySection from "@/ui/sections/gallery/GallerySection";
import HeroSection from "@/ui/sections/hero/HeroSection";
import ServiceSection from "@/ui/sections/services/ServiceSection";
import ShopSection from "@/ui/sections/shop/ShopSection";
import StudioSection from "@/ui/sections/studio/StudioSection";

export default function Home() {

  return (

    <>
      <HeroSection />

      <ServiceSection />

      <AboutSection />

      <StudioSection />

      <BookSection />
{/*
      <ContactSection />
  */}
      <GallerySection />

      <ShopSection />

    </>
  );
}
