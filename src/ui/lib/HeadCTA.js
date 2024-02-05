
export default function HeadCTA({ name, href }) {

  return (
    <a href={href} class="
            inline-flex items-center justify-center md:ml-10
            px-5 py-3 mr-3 text-base font-medium text-center text-white 
            rounded-lg bg-neutral-800 hover:bg-neutral-700 focus:ring-0">
      {name}
      <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
      </svg>
    </a>
  )
}