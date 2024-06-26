import { usePathname } from "next/navigation";
import HeadCTA from "../../lib/HeadCTA";
import NavLink from "./NavLink";
import { useState } from "react";

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
  /*
  {
    "id": "about",
    "name": "Trainer"
  },  
  {
    "id": "studio",
    "name": "Studio"
  },
  */
  {
    "id": "book",
    "name": "Kontakt"
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
    "id": "yoga",
    "name": "Yoga",
    "href": "/yoga",
    "external": true
  }
]

export default function Navigation() {

  const [ open, setOpen ] = useState(false)

  const [ activePage, setActivePage ] = useState("home")

  const pathname = usePathname()

  const onHome = pathname == "/"

  return (
    <nav className="bg-white fixed top-0 w-full py-4 shadow-lg z-50">

      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <a href="/" className="flex items-center">
          {/*
          <img src="https://www.svgrepo.com/show/499962/music.svg" className="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
  */}

          <span className="self-center text-xl font-semibold whitespace-nowrap">Yogacenter Obersulm</span>
        </a>
        <div className="flex items-center lg:order-2">
          <div className="hidden mt-2 mr-4 sm:inline-block">
            <span></span>
          </div>



          <button type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg 
                   lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-expanded="true" onClick={() => setOpen(!open)}>
            <span className="sr-only">Hauptmenü öffnen</span>

            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"></path>
            </svg>
            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            </svg>
          </button>
 
        </div>


        <div className={(open ? "" : "hidden") + " w-full md:flex md:w-auto flex-row items-center"}>
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">

            {nav.map(entry => {
              const active = onHome && entry.id === activePage || entry.external && pathname == entry?.href

              return (<NavLink 
                key={entry.id} 
                id={entry.id} 
                name={entry.name} 
                href={entry?.href} 
                external={entry.external}                
                active={active}
                onHome={onHome}
                onClick={() => { setActivePage(entry.id); setOpen(false)} } 
              />)
            })}

          </ul>

                    
          <HeadCTA name="Termin" href="/#book" />
        </div>
      </div>
    </nav>
  )
}