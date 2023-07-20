/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { NavLink, /*useNavigate*/ } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { ContextoCarrito } from "../../context/Context_carrito"
import { useContext } from "react"

function NavBar() {
  
  const { carrito: carritoContext } = useContext(ContextoCarrito)

  /*const navigate = useNavigate()

  function irAlCarrito() {
    navigate('/carrito')
  }*/
  
  return (
    <nav className=" bg-zinc-950 text-white flex items-center justify-between py-4 px-8">
        <NavLink to="/" className="hover:cursor-pointer">BG's</NavLink>
        
        <ul className="flex items-center justify-between gap-4">
          <li className="hover:cursor-pointer">
            <NavLink to="/" style={({isActive}) => {return isActive ? {textDecoration: "underline", textDecorationColor: "#b05b30"} : {}}} className="hover:text-[#b05b30]">
              Home
            </NavLink>
          </li>

          <li className="hover:cursor-pointer">
            <NavLink to="/productos" style={({isActive}) => {return isActive ? {textDecoration: "underline", textDecorationColor: "#b05b30"} : {}}} className="hover:text-[#b05b30]">
              Productos
            </NavLink>
          </li>

          <li className="hover:cursor-pointer">
            <NavLink to="/about" style={({isActive}) => {return isActive ? {textDecoration: "underline", textDecorationColor: "#b05b30"} : {}}} className="hover:text-[#b05b30]">
              About
            </NavLink>
          </li>

          <li className="hover:cursor-pointer">
            <NavLink to="/contacto" style={({isActive}) => {return isActive ? {textDecoration: "underline", textDecorationColor: "#b05b30"} : {}}} className="hover:text-[#b05b30]">
              Contact
            </NavLink>
          </li>

          <li className="relative flex items-center gap-3 hover:cursor-pointer">
            <NavLink to="/carrito" /*style={({isActive}) => {return isActive ? {transform: "scale(1.5)"} : {}}}*/>
              <FontAwesomeIcon icon={faCartShopping} style={{color: "white"}} className="transition-transform  hover:scale-150"/>
              <span className="absolute bottom-2 left-4 bg-[#b05b30] px-2 rounded-[50%] hover:opacity-75"> 
                {carritoContext.length} 
              </span>
            </NavLink>
          </li>
        </ul>
    </nav>
  )
}

export default NavBar