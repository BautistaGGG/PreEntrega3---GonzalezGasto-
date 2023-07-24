import { NavLink, useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import SpinnerLoader from "../spinnerLoader/SpinnerLoader";
import { useContext } from "react";
import { ContextoCarrito } from "../../context/Context_carrito";

function ItemDetailContainer() {
  const { idProducto } = useParams()

  const {APIdata, isLoading} = useFetch(`https://6499b22c79fbe9bcf83fccc5.mockapi.io/productos/${idProducto}`)

  const historial = window.history

  const { elementosEnCarrito } = useContext(ContextoCarrito)

  return (
    <main className="bg-[#030203] p-4">
      {isLoading ? <SpinnerLoader/> : 
        <>
          {
            historial.length > 2 ? 
            <NavLink to="/" className="flex items-center self-baseline gap-2"> 
              <FontAwesomeIcon icon={faArrowLeft} style={{color: "#b05b30"}}/>
              <p className="text-white">Ir al inicio </p>
            </NavLink> : null
          }
          <li className="block m-auto max-w-[275px] list-none text-center">
            <img src={APIdata.image} alt={APIdata.name} className="block" loading="lazy"/>
            <div className="px-2 bg-zinc-950 text-white">
              <h3 className="inline text-2xl font-bold mb-2 hover:underline">{APIdata.name}</h3>
              <p className="my-2">{APIdata.description}</p> 
              <p className="my-2">Stock disponible: {APIdata.stock}</p>
              {elementosEnCarrito(APIdata.id) > 1 ? <p>En carrito: {elementosEnCarrito(APIdata.id)}</p> : null}
              <p className="my-2 font-bold text-xl">$ {APIdata.price} USD</p>
              <button className="bg-zinc-950 border border-[#b05b30] rounded-md p-2 mb-4 hover:bg-[#b05b30]">
                <FontAwesomeIcon icon={faCartShopping} style={{color: "white"}} />
                Añadir al carrito
              </button>
            </div>
          </li>
        </>
      }
    </main>
  )
}

export default ItemDetailContainer