import Image from "next/image";
import PrimaryCTA from "../../lib/PrimaryCTA";
import SecondaryCTA from "../../lib/SecondaryCTA";
import Carousel from "@/ui/lib/Carousel";


const slides = [
  "/hero.webp",
  "/hero2.webp",
  "/yoga.webp"
]

export default function HeroSection() {

  return (
    <section id="home" class="bg-amber-100 scroll-mt-20">

      <div class="flex flex-col lg:flex-row place-self-center px-4 py-10 mx-auto lg:py-18">

        <div class="flex flex-col mb-5 lg:mb-0 place-self-center place-items-center w-full lg:w-1/2 text-center">

          <Image
            className="mb-4 lg:mb-7 w-32 h-32 md:w-40 md:h-40"
            src="/logo.webp"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />

          <h1 class="max-w-2xl mb-4 font-extrabold tracking-tight leading-none text-3xl md:text-5xl xl:text-6xl">
            Willkommen im <span className="text-amber-600">Yogacenter Obersulm</span>
          </h1>
          <p class="max-w-2xl mb-6 font-light text-white-500 lg:mb-8 md:text-lg lg:text-xl">
            Das Yoga Center in deiner Nähe.
          </p>

          <div class="flex flex-row space-x-2 lg:w-1/2">
            <PrimaryCTA name="Termin buchen" href="#book" />
            <SecondaryCTA name="Kontakt aufnehmen" href="#book" />
          </div>
        </div>

        <div class="w-full lg:w-1/2">
          <div className="max-w-3xl">
            <Carousel autoSlide={true} >
              {[...slides.map((s, i) => (
                <Image
                  key={i}
                  className="rounded-lg"
                  src={s}
                  alt="Hero"
                  width={800}
                  height={600}
                  priority
                />
              ))]}
            </Carousel>
          </div>
        </div>

      </div>
    </section>
  )
}