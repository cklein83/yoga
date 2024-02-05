import Image from "next/image";
import PrimaryCTA from "../../lib/PrimaryCTA";
import SecondaryCTA from "@/ui/lib/SecondaryCTA";
import { bookUrl } from "@/lib/constants";
import Script from "next/script";

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
    <section id="book" class="p-10 lg:p-20 bg-green-50 scroll-mt-20">

      <div class="flex flex-col lg:flex-row justify-center">
        <div class="w-full xl:w-1/3 lg:w-1/2 px-2 lg:px-4 place-items-center">
          <Image
            className="rounded-lg text-center mb-3"
            src="/book.jpeg"
            alt="Yoga-Saal"
            width={700}
            height={400}
            priority
          />
        </div>

        <div class="w-full xl:w-1/3 lg:w-1/2 px-2 lg:px-4 flex">

          <div class="self-center">
            <p class="text-3xl md:text-3xl xl:text-5xl font-bold mb-5">
              Lust auf eine unverbindliche <span className="text-amber-600">Probestunde</span>?
            </p>
            <div class="space-y-3">
              <PrimaryCTA name="Jetzt buchen" href="#" timifyAccountId="61eac175bbd15a1164e697ee" />  
              <SecondaryCTA name="Kontakt aufnehmen" href="mailto:info@yoga-obsersulm.de" />
            </div>
          </div>
        </div>

      </div>

      <Script async
          src="//book.timify.com/widget/widget.min.js"
          id="timify-widget"
          data-position="flexible"
          data-locale="de-de" />
    </section> 
  )
}