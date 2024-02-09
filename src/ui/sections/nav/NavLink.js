import Link from "next/link";

export default function NavLink({ name, href, active, onClick }) {
  return (
    <li>
      <Link href={href}     
            onClick={onClick}   
            class={`block py-2 px-3
                   ${active ? "text-amber-700" : "text-gray-700"} hover:text-amber-700`}>{name}</Link>
    </li>
  )
}