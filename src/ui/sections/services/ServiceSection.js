import Service from "./service";


export default function ServiceSection() {
  return (
    <section id="services" className="p-10 lg:p-20">

      <div className="flex flex-col lg:flex-row lg:space-x-10 justify-center scroll-mt-20">

        <div className="w-full lg:w-1/3 xl:w-1/5 mb-3 lg:mb-0">
          <Service title="Entspannung"
            description="Jede Yogastunde wird mit einer tiefen Entspannungsphase abgeschlossen. Alle Körpersysteme vom Bewegungsapparat bis hin zum Nervensystem einschließlich der mentalen Ebene werden vollkommen entspannt."
            imgSrc="/service1.webp" imgAlt="Service: Entspannung" />
        </div>

        <div className="w-full lg:w-1/3 xl:w-1/5 mb-3 lg:mb-0">
          <Service title="Atmung"
            description="Die Yogaatmung (Pranayama) lehrt wie die gesamte Atemkapazität genutzt werden kann. Der Geist wird klar und der Körper wird mit Energie aufgeladen."
            imgSrc="/service2.webp" imgAlt="Service: Atmung" />
        </div>

        <div className="w-full lg:w-1/3 xl:w-1/5 mb-3 lg:mb-0">
          <Service title="Meditation"
            description="Innere Ruhe, Zufriedenheit und seelische Ausgeglichenheit kann durch eine regelmäßige Meditationspraxis erreicht werden. Das eigene Selbst, unsere wahre innere Natur wird nach und nach erkannt."
            imgSrc="/service3.webp" imgAlt="Service: Meditation" />
        </div>
      </div>


    </section>
  )
}