/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"

import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import useFetch from "../hooks/useFetch"
//import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
//import Faq from "../../components/faq/Faq"
import SpinnerLoader from "../spinnerLoader/SpinnerLoader"
//import Categorias from "../categorias/Categorias"

function ItemListContainer() {
  //Logica interna del sitio
  const [productoBuscado,setProductoBuscado] = useState("")
  const [filteredData,setFilteredData] = useState("")
  const [categoria,setCategoria] = useState("")
  
  const {APIdata, isLoading} = useFetch("https://6499b22c79fbe9bcf83fccc5.mockapi.io/productos")

  const {APIdata: APIcategorias, isLoading: isLoadingCategorias} = useFetch("https://6499b22c79fbe9bcf83fccc5.mockapi.io/categorias")

  const navigate = useNavigate()

  function handleChange(e) {    
    setProductoBuscado(e.target.value)   
  }

  function filtrandoProductos() {
    setFilteredData(
      APIdata.filter(product => (
       product.name.includes(productoBuscado)
      ))
    )
    document.getElementById("searchInput").value = ""
  }

  function detalleDelProducto(id) {
    navigate(`/producto/${id}`)    
  }

 function filtrandoCategorias(nombreCategoria) {
  //se repiten: Electronics, Sports, Games, Health, Baby, Shoes, Grocery, Tools
    setCategoria(
      APIcategorias.filter(category => (
        category.name.includes(nombreCategoria)
      ))
    )
    
    categoria != "" && categoria.filter(cat => (
      navigate(`/categoria/${cat.id}`)
    ))
  }

  /*isLoadingCategorias && categoria == "" ?
  console.log("Categoria vacía") : 
  console.log(categoria)*/

  //Componente Interno para mejor organización: Mostrando Productos(Totales como filtrados por busqueda)
  function MostrandoProductos() {
    return(
      <>
        {isLoading ? <SpinnerLoader/> : 
        <ul className="grid grid-cols-responsive justify-items-center gap-4 mt-4"> 
          {filteredData == "" ? APIdata.map(product => (
            <li key={product.id} className="bg-zinc-950 text-white rounded-xl max-w-[275px] cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-[#030203]" onClick={() => detalleDelProducto(product.id)}>
              <ItemList {...product}/>
            </li>
          )) : filteredData.map(product => (
            <li key={product.id} className="bg-zinc-950 text-white rounded-xl max-w-[275px] cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-[#030203]" onClick={() => detalleDelProducto(product.id)}>
              <ItemList {...product}/>
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
      isLoadingCategorias ? 
      <SpinnerLoader/> : APIcategorias.map(categoria => (
            <button 
              key={categoria.id} 
              className="text-[#b05b30] bg-zinc-950 p-2 rounded-sm border border-[#b05b30] select-none hover:bg-[#b05b30] hover:text-zinc-950 focus:outline-none focus:shadow-md focus:shadow-[#b05b30]"
              onClick={() => filtrandoCategorias(categoria.name)}
            >
              {categoria.name}
            </button>      
      ))
    )
  }

  const sliderContainerRef = useRef(null)

  function handleClickDerecha() {
    sliderContainerRef.current.scrollLeft += sliderContainerRef.current.children[0].offsetWidth
  }

  function handleClickIzquierda() {
    sliderContainerRef.current.scrollLeft -= sliderContainerRef.current.children[0].offsetWidth
  }

  return (
    <section className="bg-[#030203] text-center py-4 px-8">
        <article className="relative pb-4">
          <input  type="text" placeholder="Busca un producto" id="searchInput" name="search" className="px-4 py-2 mb-4 rounded-l-sm hover:bg-gray-200 focus:outline-none focus:bg-gray-200" onChange={handleChange}/>
          <button onClick={filtrandoProductos} className="bg-[#b05b30] text-zinc-950 p-2 rounded-r-sm hover:opacity-80 focus:outline-none focus:opacity-80 "> Buscar </button>
          <FontAwesomeIcon icon={faArrowLeft} onClick={handleClickIzquierda} type='button' className="absolute bottom-0 left-0 h-6 text-[#b05b30] cursor-pointer"/>
            <h3 className="text-white">Categorías de productos</h3>
            <section className="flex gap-4 py-4 relative overflow-hidden scroll-smooth" ref={sliderContainerRef}>
              <Categorias/>
            </section>
          <FontAwesomeIcon icon={faArrowRight} onClick={handleClickDerecha} type='button' className="absolute bottom-0 right-0 h-6 text-[#b05b30] cursor-pointer"/>
        </article>
        <MostrandoProductos/>   
    </section>
  )
}

export default ItemListContainer