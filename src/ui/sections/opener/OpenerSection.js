import Image from "next/image";


export default function OpenerSection() {
  return (
    <section id="about" className="p-5 lg:p-20 bg-orange-50 scroll-mt-20">
      <div className="flex flex-col lg:flex-row justify-center">


      <div className="flex flex-col w-full lg:w-1/2 p-3 lg:mb-0 items-center self-center">
          <Image
            className="rounded-lg text-center mb-3"
            src="/opener2.webp"
            alt="Menschen beim Yoga"
            width={700}
            height={500}
            priority
          /> 
          {/*         
          <Image
            className="rounded-lg text-center mb-3"
            src="/opener.webp"
            alt="Frau beim Yoga"
            width={600}
            height={400}
            priority
          /> 
  */}                
        </div> 

        <div className="w-full lg:w-1/2 p-3 lg:px-4">
          <h1 className="max-w-2xl mb-4 font-extrabold tracking-tight leading-none text-xl md:text-3xl xl:text-4xl text-center md:text-left">
            Ihr Zentrum für <span className="text-amber-600">innere Ruhe</span> und <span className="text-amber-600">persönliches Wachstum</span>. 
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            Mitten im Herzen von Obersulm biete ich Ihnen einen Ort, wo Wellness auf Fitness trifft und Yoga 
            mehr als nur eine Praxis ist – es ist eine Lebenseinstellung. 
          </p>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            In meinem Studio erwarten Sie vielfältige Yoga-Kurse, die auf die Bedürfnisse von Einsteigern bis Fortgeschrittenen zugeschnitten sind. 
          </p>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            Ich lege großen Wert darauf, dass sich jeder Teilnehmer wohl fühlt und persönliche Ziele erreicht, seien es mehr Flexibilität, 
            verbesserte Körperhaltung oder tieferes spirituelles Verständnis.
          </p>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            Bei mir steht Ihr persönliches Wachstum im Mittelpunkt. Treten Sie ein in eine Welt, in der Sie Stress hinter sich lassen, 
            Ihre Fitness verbessern und ein neues Level an Wellness für sich entdecken können. 
            Lassen Sie sich von mir auf dem Pfad zu einem ausgeglichenen und gesunden Lebensstil begleiten.
          </p>          
        </div>
       
      </div>
    </section>
  )
}