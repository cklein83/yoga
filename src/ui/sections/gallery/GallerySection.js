"use client"

import { useEffect } from "react";

//import GLightbox from 'glightbox'
//import 'glightbox/dist/css/glightbox.min.css'

import Image from "next/image";

//import dynamic from "next/dynamic";
//const GLightbox = dynamic(() => import("GLightbox").default, { ssr: false })

import GLightbox from 'glightbox-ssr';
import 'glightbox/dist/css/glightbox.min.css'

export default function GallerySection() {
  
  useEffect(() => {
    const lightbox = GLightbox({
      selector: '.glightbox',
      loop: true
    });
    //console.log(lightbox)
  })

  return (
    <section id="gallery" className="p-10 lg:p-20 scroll-mt-20">

      <h1 className="flex justify-center text-3xl md:text-3xl xl:text-5xl font-bold mb-5">
        Impressionen
      </h1> 

      <hr className="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10" />

      <div className="flex flex-wrap space-x-0 lg:space-x-3 space-y-2 lg:space-y-3 justify-center">
        {[...Array(24).keys()].map((n) => (
          <div className="w-1/2 lg:w-1/4 flex space-x-0 justify-center" key={n}>
            <a href={`/gallery/pic${(n + 1).toString().padStart(2, "0")}.webp`} className="glightbox">
              <Image
                className="rounded-lg m-0 lg:m-3 shadow-lg text-center object-cover w-32 h-32 lg:w-72 lg:h-72"
                src={`/gallery/pic${(n + 1).toString().padStart(2, "0")}.webp`}
                alt="Galeriebild"
                width={300}
                height={400}
                priority
              />              
            </a>
          </div>
        ))}

      </div>
    </section>

  )
}