import { NavLink, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function ItemDetailContainer() {
  const { id } = useParams()

  const {APIdata, isLoading} = useFetch(`https://6499b22c79fbe9bcf83fccc5.mockapi.io/productos/${id}`)

  return (
    <main className="flex justify-center items-center flex-col">
      <NavLink to="/" className="self-start"> 
      <FontAwesomeIcon icon={faArrowLeft} style={{color: "rgb(255 255 255 / var(--tw-text-opacity))"}}/>
      Ir al inicio 
      </NavLink>
      {isLoading ? 
      <p>Cargando detalles...</p> : 
        <li className=" rounded-xl max-w-[275px] list-none cursor-pointer flex">
          <img src={APIdata.image} alt={APIdata.name} className="block" loading="lazy"/>
          <div className="px-2 bg-slate-800 text-yellow-50">
            <h3 className="inline text-2xl font-bold mb-2 hover:underline">{APIdata.name}</h3>
            <p className="my-2">{APIdata.description}</p>
            <p className="my-2">Stock disponible: {APIdata.stock}</p>
            <p className="my-2 font-bold text-xl">$ {APIdata.price} USD</p>

          </div>
        </li>
      }
    </main>
  )
}

export default ItemDetailContainer