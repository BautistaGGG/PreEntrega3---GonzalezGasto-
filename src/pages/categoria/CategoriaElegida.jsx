import { useParams, NavLink } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import SpinnerLoader from "../../components/spinnerLoader/SpinnerLoader"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faCartShopping } from "@fortawesome/free-solid-svg-icons"

function CategoriaElegida() {

  const {idCategoria} = useParams()

  const {APIdata, isLoading} = useFetch(`https://6499b22c79fbe9bcf83fccc5.mockapi.io/productos/${idCategoria}`)
  
  console.log(APIdata)

  const historial = window.history

  return (
    <main className="bg-[#030203] flex flex-col justify-center items-center">
      {isLoading ? <SpinnerLoader/> : 
        <>
          {historial.length > 2 && 
            <NavLink to="/" className="flex items-center gap-2"> 
              <FontAwesomeIcon icon={faArrowLeft} style={{color: "#b05b30"}}/>
              <p className="text-white">Ir al inicio </p>
            </NavLink>
          }
          <li className="rounded-xl max-w-[275px] list-none cursor-pointer">
            <img src={APIdata.image} alt={APIdata.name} className="block" loading="lazy"/>
            <div className="px-2 bg-zinc-950 text-white">
              <h3 className="inline text-2xl font-bold mb-2 hover:underline">{APIdata.name}</h3>
              <p className="my-2">{APIdata.description}</p>
              <p className="my-2">Stock disponible: {APIdata.stock}</p>
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

export default CategoriaElegida