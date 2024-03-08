"use client"

import AboutSection from "@/ui/sections/about/AboutSection";
import BookSection from "@/ui/sections/book/BookSection";
import GallerySection from "@/ui/sections/gallery/GallerySection";
import HeroSection from "@/ui/sections/hero/HeroSection";
import OpenerSection from "@/ui/sections/opener/OpenerSection";
import ServiceSection from "@/ui/sections/services/ServiceSection";
import ShopSection from "@/ui/sections/shop/ShopSection";
import StudioSection from "@/ui/sections/studio/StudioSection";

export default function Home() {

  return (

    <>
      <HeroSection />

      <div id="services">
        <OpenerSection />

        <ServiceSection />

        <AboutSection />

        <StudioSection />
      </div>

      <BookSection />
{/*
      <ContactSection />
  */}
      <GallerySection />

      <ShopSection />

    </>
  );
}
