import { usePathname } from "next/navigation";
import HeadCTA from "../../lib/HeadCTA";
import NavLink from "./NavLink";
import { useState } from "react";
import Image from "next/image";

export const nav = [
  {
    "id": "home",
    "name": "Home",
    "href": "/"
  },
  {
    "id": "services",
    "name": "Angebot"
  },
  {
    "id": "about",
    "name": "Trainer"
  },  
  {
    "id": "yoga",
    "name": "Yoga"
  }, 
  {
    "id": "gallery",
    "name": "Impressionen"
  }, 
  {
    "id": "shop",
    "name": "Shop"
  },     
  {
    "id": "blog",
    "name": "Blog",
    "href": "/blog"
  }
]

export default function Navigation() {

  const [ open, setOpen ] = useState(false)

  const [ activePage, setActivePage ] = useState("home")

  const pathname = usePathname()

  return (
    <nav class="bg-white fixed top-0 w-full py-4 shadow-lg z-50">

      <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <a href="/" class="flex items-center">
          {/*
          <img src="https://www.svgrepo.com/show/499962/music.svg" class="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
  */}

          <span class="self-center text-xl font-semibold whitespace-nowrap">Yogacenter Obersulm</span>
        </a>
        <div class="flex items-center lg:order-2">
          <div class="hidden mt-2 mr-4 sm:inline-block">
            <span></span>
          </div>



          <button type="button"
            class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg 
                   lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-expanded="true" onClick={() => setOpen(!open)}>
            <span class="sr-only">Hauptmenü öffnen</span>

            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
 
        </div>


        <div class={(open ? "" : "hidden") + " w-full md:flex md:w-auto flex-row items-center"}>
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">

            {nav.map(entry => {
              //const active = entry?.href == pathname || fragment === entry.id
              const active = entry.id === activePage

              let href = entry?.href
              if (!href) {
                if (pathname == "/") {
                  href = "#" + entry.id
                } else {
                  href = "/"
                }
              }

              return (<NavLink key={entry.id} name={entry.name} href={href} onClick={() => { setActivePage(entry.id); setOpen(false)} } active={active} />)
            })}

          </ul>

                    
          <HeadCTA name="Termin" href="#book" />
        </div>
      </div>
    </nav>
  )
}