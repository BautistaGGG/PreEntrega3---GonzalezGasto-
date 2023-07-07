import { NavLink, useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../hooks/useFetch";
import SpinnerLoader from "../spinnerLoader/SpinnerLoader";

function ItemDetailContainer() {
  const { idProducto } = useParams()

  const {APIdata, isLoading} = useFetch(`https://6499b22c79fbe9bcf83fccc5.mockapi.io/productos/${idProducto}`)

  const historial = window.history

  return (
    <main className="bg-slate-500 flex flex-col justify-center items-center">
      {isLoading ? <SpinnerLoader/> : 
        <>
          {historial.length > 2 &&
            <NavLink to="/" className="flex items-center gap-2"> 
              <FontAwesomeIcon icon={faArrowLeft} style={{color: "rgb(255 255 255 / var(--tw-text-opacity))"}}/>
              <p>Ir al inicio </p>
            </NavLink>}
          <li className="rounded-xl max-w-[275px] list-none cursor-pointer">
            <img src={APIdata.image} alt={APIdata.name} className="block" loading="lazy"/>
            <div className="px-2 bg-slate-800 text-yellow-50">
              <h3 className="inline text-2xl font-bold mb-2 hover:underline">{APIdata.name}</h3>
              <p className="my-2">{APIdata.description}</p>
              <p className="my-2">Stock disponible: {APIdata.stock}</p>
              <p className="my-2 font-bold text-xl">$ {APIdata.price} USD</p>
              <button className="bg-slate-500 rounded-md p-2">
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