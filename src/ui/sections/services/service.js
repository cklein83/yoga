import Image from "next/image"

export default function Service(props) {
  const { title, description, imgSrc, imgAlt } = props

  return (
    <div className=" rounded overflow-hidden ">

      <div className="px-3 lg:px-6 py-2 lg:py-4 text-center">
        <Image
          className="w-full"
          src={imgSrc}
          alt={imgAlt}
          width={200}
          height={200}
          priority
        />
      </div>

      <div className="px-3 lg:px-6 py-2 lg:py-4">
        <h2 className="font-bold text-xl mb-2 text-center">{title}</h2>
        <p className="text-gray-700 text-left">
          {description}
        </p>
      </div>
{/*
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
  */}
    </div>
  )
}