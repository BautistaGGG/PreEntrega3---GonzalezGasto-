/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import CartWidget from "./CartWidget"
import ItemListContainer from "./ItemListContainer"

function NavBar() {
  return (
    <nav className="bg-slate-800 text-white flex items-center justify-between p-4">
        <a href="/" className="hover:cursor-pointer">BG's</a>
        
        <ul className="flex items-center justify-between gap-4">
          <li className="hover:cursor-pointer">
            <a href="/">Home</a>
          </li>
          <li className="hover:cursor-pointer">
            <a href="#">Productos</a>
          </li>
          <li className="hover:cursor-pointer">
            <a href="#">About</a>
          </li>
          <li className="hover:cursor-pointer">
            <a href="#">Contact</a>
          </li>
          <li className="border-2 border-slate-600 px-2 flex items-center gap-3 hover:cursor-pointer">
            <CartWidget/>
          </li>
        </ul>
    </nav>
  )
}

export default NavBar