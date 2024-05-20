
export default function SecondaryCTA({ name, href }) {

  return (
    <a href={href} className="
      inline-flex items-center justify-center w-full lg:w-1/2
      px-5 py-3 text-base font-medium text-center rounded-lg
      text-gray-900 bg-white hover:bg-yellow-500 border border-yellow-500 focus:ring-0">
      {name}
    </a>
  )
}