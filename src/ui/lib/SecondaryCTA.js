
export default function SecondaryCTA({ name, href }) {

  return (
    <a href={href} class="
      inline-flex items-center justify-center w-full lg:w-1/2
      px-5 py-3 text-base font-medium text-center rounded-lg
      text-gray-900 bg-white hover:bg-yellow-400 border border-yellow-400 focus:ring-0">
      {name}
    </a>
  )
}