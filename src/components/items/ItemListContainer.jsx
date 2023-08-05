/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"

import { useRef, useState, useContext, useEffect, memo } from "react"
import { useNavigate } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import ItemList from "./ItemList"
import SpinnerLoader from "../spinnerLoader/SpinnerLoader"
import { ContextoCarrito } from "../../context/Context_carrito"

function ItemListContainer() {
  //Logica interna del sitio
  const [categoria,setCategoria] = useState("")
  const [busquedaPorCategoria,setBusquedaPorCategoria] = useState(false)

  const {APIdata, isLoading} = useFetch("https://6499b22c79fbe9bcf83fccc5.mockapi.io/productos")

  const {
    APIdata: APIcategorias,
    isLoading: isLoadingCategorias
  } = useFetch("https://6499b22c79fbe9bcf83fccc5.mockapi.io/categorias")

  const { setProductosData, onAgregarAlCarrito } = useContext(ContextoCarrito)

  useEffect(() => {
    if (APIdata !== null) {
      setProductosData(APIdata)
    }
  },[APIdata,setProductosData])

  const navigate = useNavigate()

  function detalleDelProducto(id) {
    navigate(`/producto/${id}`)    
  }

 function filtrandoPorCategorias(nombreCategoria) {
  //se repiten: Electronics, Sports, Games, Health, Baby, Shoes, Grocery, Tools
    setBusquedaPorCategoria(true)
    let buscadoPorCategoria = APIdata.filter(producto => (
      producto.category.includes(nombreCategoria)
    ))
    setCategoria(buscadoPorCategoria)
  }

  const arrayDeCategorias = APIcategorias !== null && APIcategorias.map(product => (
    product.name
  ))

  const arrayDeCateogriasSinRepetir = typeof arrayDeCategorias === "object" && [...new Set(arrayDeCategorias)]

  const sliderContainerRef = useRef(null)

  function handleClickDerecha() {
    sliderContainerRef.current.scrollLeft += sliderContainerRef.current.children[0].offsetWidth
  }

  function handleClickIzquierda() {
    sliderContainerRef.current.scrollLeft -= sliderContainerRef.current.children[0].offsetWidth
  }

  //COMPONENTES

  //Componente Interno para mejor organización: Mostrando Productos(Totales como filtrados por busqueda)
  function MostrandoProductos() {
    return(
      <>
        {isLoading ? <SpinnerLoader/> : 
        <ul className="grid grid-cols-responsive justify-items-center gap-4 mt-6"> 
          {categoria == "" ? APIdata.map(product => (
            <li key={product.id} className="flex flex-col justify-between bg-zinc-950 text-white rounded-xl max-w-[275px] cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-[#030203]">
              <ItemList {...product} detalleDelProducto={detalleDelProducto} agregarAlCarrito={onAgregarAlCarrito}/>
            </li>
          )) : categoria.map(product => (
            <li key={product.id} className="flex flex-col justify-between bg-zinc-950 text-white rounded-xl max-w-[275px] cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-[#030203]">
              <ItemList {...product} detalleDelProducto={detalleDelProducto} agregarAlCarrito={onAgregarAlCarrito}/>
            </li>
            ))}
        </ul>
        }
      </>
    )
  }

  //Componente Interno para mejor organización: Categorias
  function Categorias() {
    return(
      isLoadingCategorias ? <SpinnerLoader/> : 
      arrayDeCateogriasSinRepetir.map(categoria => (
          <button 
            className="bg-zinc-950 text-[#b05b30] text-xl p-2 rounded-sm border border-[#b05b30] select-none hover:bg-[#b05b30] hover:text-zinc-950 focus:outline-none focus:shadow-md focus:shadow-[#b05b30]"
            key={categoria} 
            onClick={() => filtrandoPorCategorias(categoria)}
          >
            {categoria}
          </button>      
      ))
    )
  }

  //Componente Interno para mejor organización: BotónReinicio de categorias
  function BotonReinicioDeCategoria() {
    return(
      <button 
        className="text-[#b05b30] bg-zinc-950 p-2 rounded-sm border border-[#b05b30] whitespace-nowrap select-none hover:bg-[#b05b30] hover:text-zinc-950 focus:outline-none focus:shadow-md focus:shadow-[#b05b30]" 
        onClick={() => {
          setCategoria("")
          setBusquedaPorCategoria(false)
        }}
      >
        Ver todas 
      </button>
    )
  }

  //Componente Interno para mejor organización: No hay productos en esa categoria
  function NoHayProductosTexto() {
    return(
          <h2 className="text-[#b05b30] text-3xl"> 
            La categoria seleccionada no tiene productos 
          </h2>
    )
  }

  return(
    <section className="bg-[#030203] text-center py-4 px-8">
        <article className="relative pb-4">
          <FontAwesomeIcon icon={faArrowLeft} onClick={handleClickIzquierda} type='button' className="absolute bottom-0 left-0 h-6 text-[#b05b30] cursor-pointer hover:scale-90 active:scale-75 block xl:hidden"/>
            <h3 className="text-white select-none">Categorías de productos</h3>
            <section className="flex justify-start gap-4 py-4 relative overflow-hidden scroll-smooth xl:justify-center" ref={sliderContainerRef}>
              {busquedaPorCategoria ? <BotonReinicioDeCategoria/> : null}
              <Categorias/>
            </section>
          <FontAwesomeIcon icon={faArrowRight} onClick={handleClickDerecha} type='button' className="absolute bottom-0 right-0 h-6 text-[#b05b30] cursor-pointer hover:scale-90 active:scale-75 block xl:hidden"/>
        </article>
        {busquedaPorCategoria && categoria.length === 0 ? <NoHayProductosTexto/> : <MostrandoProductos/>}
    </section>
  )
}

export default memo(ItemListContainer)