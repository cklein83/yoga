import Link from "next/link";
import { ScrollableLink } from "./ScrollableLink";
//import { Link as ScrollableLink } from "react-scroll";

export default function NavLink({ id, name, active, href, onClick, external, onHome }) {

  let theHref = href
  if (external) {
    theHref = "/" + id
  } else {
    if (onHome && href != "/") {
      theHref = "#" + id
    } else {
      theHref = "/#" + id
    }
  }

  return (
    <li>
      
      {(!onHome || external) && (
      <Link href={theHref} 
            className={`block py-2 px-3 
                   ${active ? "text-amber-700" : "text-gray-700"} hover:text-amber-700`}>{name}</Link>
      )}

      {(onHome && !external) && (
        <ScrollableLink
            to={id} spy={true} offset={-100}
            href={theHref}
            onClick={onClick}   
            activeClass="!text-amber-700"
            className={`block py-2 px-3 text-gray-700 hover:text-amber-700`}>{name}</ScrollableLink>
      )}
    </li>
  )
}