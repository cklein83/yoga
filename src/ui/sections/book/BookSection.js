import Image from "next/image";
import PrimaryCTA from "../../lib/PrimaryCTA";
import PhoneIcon from "@/ui/lib/icons/PhoneIcon";
import WhatsappIcon from "@/ui/lib/icons/WhatsappIcon";
import EnvelopeIcon from "@/ui/lib/icons/EnvelopeIcon";
import Link from "next/link";
import GoogleMaps from "@/ui/lib/GoogleMaps";

/**
 *  <script async
 *	  src="//book.timify.com/widget/widget.min.js"
 *    id="timify-widget"
 *	  data-position="left"
 *	  data-locale="de-de"
 *	  data-account-id="61eac175bbd15a1164e697ee"
 *	  data-locale="de-de"
 *  ></script>
 */
export default function BookSection() {
  return (
    <section id="book" className="p-10 lg:p-20 bg-green-50 scroll-mt-20">

      <div className="flex flex-col lg:flex-row justify-center mb-10 md:mb-20">
        <div className="w-full xl:w-1/3 lg:w-1/2 px-2 lg:px-4 place-items-center">
          <Image
            className="rounded-lg text-center mb-3"
            src="/book.webp"
            alt="Yoga-Saal"
            width={700}
            height={400}
            priority
          />
        </div>

        <div className="w-full xl:w-1/3 lg:w-1/2 px-2 lg:px-4 flex">

          <div className="self-center">
            <p className="text-3xl md:text-3xl xl:text-5xl font-bold mb-5">
              Lust auf eine unverbindliche <span className="text-amber-600">Probestunde</span>?
            </p>
            <div className="space-y-3">
              {/*
              <PrimaryCTA name="Jetzt buchen" href="#" timifyAccountId="61eac175bbd15a1164e697ee" />  
              */
              }
              <PrimaryCTA name="Jetzt buchen" href={`https://book.timify.com/?accountId=61eac175bbd15a1164e697ee&hideCloseButton=true`} />

            </div>
          </div>
        </div>

      </div>

      {/*
      <Script async
          src="//book.timify.com/widget/widget.min.js"
          id="timify-widget"
          data-position="flexible"
          data-locale="de-de" />
            */}




      <div className="flex flex-col justify-center items-center mb-10">

        <div className="flex flex-col xl:w-2/3 md:flex-row bg-yellow-50 p-5 rounded-lg shadow-xl mb-7">

          <div className="w-full xl:w-1/2 lg:w-1/2 px-2 lg:px-4 self-center">
            <p className="text-2xl md:text-2xl xl:text-4xl">
              Hast du Fragen?
            </p>
            <p className="text-3xl md:text-5xl xl:text-7xl font-bold mb-5">
              Wir sind <span className="text-amber-600">für dich</span> da.
            </p>
          </div>
          <div className="w-full xl:w-1/2 lg:w-1/2 px-2 lg:px-4 self-center">
            
            <div className="flex flex-col space-3 justify-center">

              <div className="flex flex-row mb-5 md:mb-0">
                <div className="p-3 m-3 shadow-lg rounded-lg mr-3 hover:shadow-xl relative bg-white hover:bg-yellow-500 border border-yellow-500 max-h-20">
                  <a href="tel:+4915208807315" className="after:absolute after:inset-0" target="_blank">
                    <PhoneIcon clz="w-12 max-w-12 h-12 max-h-12" />
                  </a>
                </div>
                <div className="self-center">                
                  <b>Telefon</b>
                  <div>
                    <a href="tel:+4915208807315" className="hover:underline" target="_blank">+49 (0)1520 8807315</a>
                  </div>
                </div>
              </div>

              <div className="flex flex-row mb-5 md:mb-0">
                <div className="p-3 m-3 shadow-lg rounded-lg mr-3 hover:shadow-xl relative bg-white hover:bg-yellow-500 border border-yellow-500 max-h-20">
                  <a href="https://wa.me/4915208807315" className=" after:absolute after:inset-0" target="_blank">
                    <WhatsappIcon clz="w-12 max-w-12 h-12 max-h-12" />
                  </a>
                </div>
                <div className="self-center">
                  <b>Whatsapp</b>
                  <div>
                    Wir sind per Chat für dich da. <a href="https://wa.me/4915208807315" className="underline hover:underline" target="_blank">Klicke hier.</a>
                  </div>
                </div>
              </div>


              <div className="flex flex-row mb-5 md:mb-0">
                <div className="p-3 m-3 shadow-lg rounded-lg mr-3 hover:shadow-xl relative bg-white hover:bg-yellow-500 border border-yellow-500 max-h-20">
                  <a href="mailto:info@yoga-obsersulm.de" className="after:absolute after:inset-0" target="_blank">
                    <EnvelopeIcon clz="w-12 max-w-12 h-12 max-h-12" />
                  </a>
                </div>
                <div className="self-center">
                  <b>Email</b>
                  <div>
                    Sende uns deine Nachricht an: <a href="mailto:info@yoga-obersulm.de" className="hover:underline" target="_blank">info@yoga-obersulm.de</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="text-center">
          Bitte beachten Sie den <Link href="/haftungsausschluss" className="underline hover:underline">Haftungsausschluss</Link>.
        </div>

      </div>


      <div className="
        flex flex-col lg:flex-row 
        justify-center items-center 
        xl:p-10 md:p-8 p-0
        mb-5 md:mb-10">
        <div className="w-full xl:w-1/4 lg:w-1/4 px-2 lg:px-4 self-center">
          <p className="text-3xl md:text-3xl xl:text-5xl font-bold mb-5">
            So <span className="text-amber-600">findest</span> du uns.
          </p>
          <p className="text text-gray-500 mb-5 leading-8">
            Edith-Stein-Straße 2
            <br/>
            74182 Obersulm-Affaltrach
            <br/>
            <b>Eingang über die Kolpingstraße</b>
          </p>  
        </div>

        <div className="w-full xl:w-1/2 lg:w-3/4 px-2 lg:px-4 flex">
          <div className="w-full self-center">
            <GoogleMaps />
          </div>
        </div>

      </div>      

    </section>
  )
}