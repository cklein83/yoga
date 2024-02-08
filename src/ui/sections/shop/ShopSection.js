import Image from "next/image";


export default function ShopSection() {
  return (
    <section id="shop" class="p-10 lg:p-20 bg-orange-50 scroll-mt-20">

      <div class="flex flex-col lg:flex-row justify-center">
        <div class="w-full lg:w-1/2 px-3 place-items-center">
          <Image
            className="rounded-lg text-center mb-3"
            src="/shop.webp"
            alt="Shop"
            width={800}
            height={600}
            priority
          />
        </div>

        <div class="w-full lg:w-1/3 px-3 flex">

          <div class="self-center">
            <p class="text-xl md:text-2xl xl:text-3xl mb-5">
              Exklusiv für unsere Kursteilnehmer.
            </p>
            <p class="text-3xl md:text-4xl xl:text-5xl font-bold mb-5">
              Der <span className="text-amber-600">Yoga-Shop</span>.
            </p>
            <p class="text-xl md:text-2xl xl:text-3xl mb-5 text-slate-600">
              Ausgewähltes Yoga-Equipment.
            </p>
          </div>
        </div>

      </div>
    </section> 
  )
}