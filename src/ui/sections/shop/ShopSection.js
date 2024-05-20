import Image from "next/image";


export default function ShopSection() {
  return (
    <section id="shop" className="p-10 lg:p-20 bg-orange-50 scroll-mt-20">

      <div className="flex flex-col lg:flex-row justify-center">
        <div className="w-full lg:w-1/2 px-3 place-items-center">
          <Image
            className="rounded-lg text-center mb-3"
            src="/shop.webp"
            alt="Shop"
            width={800}
            height={600}
            priority
          />
        </div>

        <div className="w-full lg:w-1/3 px-3 flex">

          <div className="self-center">
            <p className="text-xl md:text-2xl xl:text-3xl mb-5">
              Exklusiv für unsere Kursteilnehmer.
            </p>
            <p className="text-3xl md:text-4xl xl:text-5xl font-bold mb-5">
              Der <span className="text-amber-600">Yoga-Shop</span>.
            </p>
            <p className="text-xl md:text-2xl xl:text-3xl mb-5 text-slate-600">
              Ausgewähltes Yoga-Equipment.
            </p>
          </div>
        </div>

      </div>
    </section> 
  )
}