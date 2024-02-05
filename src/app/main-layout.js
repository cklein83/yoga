"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/ui/sections/nav/Navigation";
import { useEffect, useRef, useState } from "react";
import ScrollToTop from "@/ui/lib/ScrollToTop";
import Footer from "@/ui/sections/footer/Footer";

const inter = Inter({ subsets: ["latin"] });


export default function MainLayout({ children }) {

  //const [scrollPosition, setSrollPosition] = useState(0);
  const [showGoTop, setshowGoTop] = useState(false);


  const refScrollUp = useRef();

  const handleScrollUp = () => {
    refScrollUp.current.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <main className="flex flex-col">

      <div ref={refScrollUp}></div>

      <Navigation />

      <div class="mt-20">
        {children}
      </div>

      <Footer />

      {showGoTop && (
        <ScrollToTop scrollUpFn={handleScrollUp} />
      )}

    </main>

  );
}
