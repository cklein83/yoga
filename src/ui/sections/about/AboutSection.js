import Image from "next/image";


export default function AboutSection() {
  return (
    <section id="about" class="p-5 lg:p-10 bg-orange-50 scroll-mt-20">
      <div class="flex flex-col lg:flex-row justify-center">

        <div class="flex flex-col w-full lg:w-1/3 px-3 mb-5 lg:mb-0 items-center">
          <Image
            className="rounded-full text-center mb-3"
            src="/about.jpeg"
            alt="Inhaber: Michael Frisch"
            width={400}
            height={400}
            priority
          />
          <p class="text-slate-600">
            Michael Frisch. Inhaber und Trainer.
          </p>
        </div>

        <div class="w-full lg:w-1/3 px-2 lg:px-4 self-center">
          <h1 class="max-w-2xl mb-4 font-extrabold tracking-tight leading-none text-xl md:text-3xl xl:text-4xl text-center md:text-left">
            Professionelles <span className="text-amber-600">Yoga</span>
          </h1>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            Nach meiner 3 Jährigen Ausbildung zu Kundalini Yoga Lehrer absolvierte ich eine 2 Jährige Ausbildung zum Hatha Yoga Lehrer nach Swami Shivananda.
          </p>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            Danach erlangte ich eine Zulassung der allgemeinen Krankenkassen.
          </p>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            Weiterbildungen zu YIU Coach im Business Yoga und zum Klangschalen Meditationsleiter runden mein Spektrum ab.
            – Personal Yoga Coaching – Klangmeditaton mit Planetenklangschalen
          </p>
        </div>
      </div>
    </section>
  )
}