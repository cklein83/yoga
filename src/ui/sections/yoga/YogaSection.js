import Image from "next/image";

export default function YogaSection() {
  return (
    <section className="p-5 lg:p-20 flex flex-col justify-center scroll-mt-20">

      <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-5 self-center">
         Yoga <span className="text-amber-600">Info</span>
      </h1>

      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <Image
            className="w-full"
            src="/blog1.webp"
            alt="Yoga Saal"
            width={600}
            height={400}
            priority
          />
        </div>
        <div className="w-full lg:w-1/2 bg-blue-200 p-3 lg:p-10">
          <h2 className="max-w-2xl font-extrabold tracking-tight leading-none md:text35xl xl:text-4xl mb-7 self-center">
            Hatha Yoga
          </h2>
          <div>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
              ... ist eine Form von Yoga, bei der die Einheit zwischen Körper und Geist vor allem durch körperliche Übungen (Asanas), durch Atemübungen (Pranayama) und Meditation angestrebt wird.              
            </p>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
              Es ist in der westlichen Welt die am meisten verbreitetste Yogaart. Hatha bedeutet Kraft, Ausdauer, Energie und ist ein Oberbegriff für ein körperbezogenes Yoga. 
            </p>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">  
              Der Körper wird kräftiger und geschmeidiger. Im Hatha-Yoga ist das Ziel die Erlangung eines dynamischen Gleichgewichts zwischen diesen zwei Grundprinzipien.
            </p>
          </div>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 bg-green-50 p-3 lg:p-10">
            <h2 className="max-w-2xl font-extrabold tracking-tight leading-none md:text35xl xl:text-4xl mb-7 self-center">
              Yoga für jeden
            </h2>
            <div>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                Jahrhundertelang stand Yoga nur Menschen offen, die bereit waren, sich einen Lehrer in Indien zu suchen, und lange Zeit sprach es nur jene an, die bereit waren, zurückgezogen zu leben und weltlichen Gütern zu entsagen.
              </p>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
              H.H. Swami Sivananda (1887 – 1963) und Swami Vishnudevananda (1927 – 1993) gehörten zu den ersten indischen Yogameistern, die Yoga allen Menschen zugänglich machten, unabhängig von Alter, Status oder dem Ort, an dem sie lebten.
              </p>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">  
              Dadurch leisteten sie einen großen Beitrag zur Verbreitung des Yoga im Westen.
              </p>
            </div>
          </div>        
        <div className="w-full lg:w-1/2">
          <Image
            className="w-full"
            src="/blog2.webp"
            alt="Yoga Saal Nahaufnahme"
            width={600}
            height={400}
            priority
          />
        </div>
      </div>

    </section>
  )
}