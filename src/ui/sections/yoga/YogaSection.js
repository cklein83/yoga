import Image from "next/image";


export default function YogaSection() {
  return (
    <section id="yoga" class="p-10 lg:p-20 scroll-mt-20">

      <div class="flex flex-col lg:flex-row justify-center mb-10 lg:mb-20">

        <div class="lg:w-1/3 lg:px-4 px-2 self-center">
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
            Jahrhundertelang stand Yoga nur Menschen offen, die bereit waren, sich einen Lehrer in Indien zu suchen
            und lange Zeit sprach es nur jene an, die bereit waren, zurückgezogen zu leben und weltlichen Gütern zu entsagen.
          </p>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            H.H. Swami Sivananda (1887 – 1963) und Swami Vishnudevananda (1927 – 1993) gehörten zu den ersten indischen Yogameistern,
            die Yoga allen Menschen zugänglich machten, unabhängig von Alter, Status oder dem Ort, an dem sie lebten.
            Dadurch leisteten sie einen großen Beitrag zur Verbreitung des Yoga im Westen.
          </p>
        </div>

        <div class="w-full lg:w-1/3 px-2 lg:px-4 items-center">
          <Image
            className="rounded-lg text-center mb-3"
            src="/yoga.webp"
            alt="Buddha Figur"
            width={700}
            height={400}
            priority
          />
        </div>
      </div>

      <div class="flex flex-col lg:flex-row justify-center mb-5 lg:mb-10">
        <div class="w-full lg:w-1/3 px-2 lg:px-4">
          <Image
            className="rounded-lg text-center mb-3"
            src="/yoga2b.webp"
            alt="Seerose"
            width={700}
            height={400}
            priority
          />
        </div>
        <div class="w-full lg:w-1/3 px-2 lg:px-4 self-center">
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 mb-10">
            Egal, ob du gerade erst mit Yoga beginnen willst oder schon langjährige Praxis hast,
            ob du jung oder alt bist – hier ist ein Ort, der dir hilft zu entspannen, bei dir selbst anzukommen und die Seele baumeln zu lassen.
          </p>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 mb-10">
            Hierzu nutzen wir alle Disziplinen des Yoga: Körperübungen, Atemübungen, Übungen um die Aufmerksamkeit nach innen zu lenken,
            den Geist zu konzentrieren und Meditation. 
          </p>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 mb-10">
            Gemeinsam entwickeln und erhalten die Lehrer und Schüler eine liebevolle Atmosphäre
            der Freude und des seelischen Wachstums für sich selbst und für andere.
          </p>
        </div>
      </div>

      <div class="flex flex-col items-center p-5 lg:p-10">

        <div class="mb-5 text-center items-center">
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            Offizieller Partner der Hochschule Heilbronn
          </p>
          <Image
            className="flex mb-10"
            src="/hshn.webp"
            alt="Logo der Hochschule Heilbronn"
            width={300}
            height={100}
            priority
          />
        </div>

        {/*
        <div class="text-center">
          <p class="max-w-2xl font-light text-gray-500 md:text-lg lg:text-xl mb-2">
            In Zusammenarbeit mit <span className="font-bold">Auszeit Alexandra Germer</span>.
          </p>
          <p class="font-medium text-blue-600 hover:underline md:text-lg lg:text-xl ">
            <a href="https://g.co/kgs/eKHYqA" target="_blank">Hier klicken für weitere Infos.</a>
          </p>
        </div>
        */}

      </div>

    </section>
  )
}