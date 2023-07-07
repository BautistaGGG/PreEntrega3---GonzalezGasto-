/* eslint-disable react/prop-types */
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
//import Faq from "../../components/faq/Faq"
import SpinnerLoader from "../spinnerLoader/SpinnerLoader"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"

function ItemListContainer({greeting}) {

  
  const [productoBuscado,setProductoBuscado] = useState("")
  const [filteredData,setFilteredData] = useState("")
  //const [categorias,setCategorias] = useState("")
  
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

 /*function filtrandoCategorias() {
   APIcategorias.filter(categoria => {
    categoria.name.includes(categorias)
   }) 
  }*/

  //Componente Interno para mejor organización: Mostrando Productos
  function MostrandoProductos() {
    return(
      <>
        {isLoading ? <SpinnerLoader/> : 
        <ul className="grid grid-cols-responsive justify-items-center gap-4"> 
          {filteredData == "" ? APIdata.map(product => (
            <li key={product.id} className="bg-slate-800 text-yellow-50 rounded-xl max-w-[275px] cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-slate-700" onClick={() => detalleDelProducto(product.id)}>
              <ItemList {...product}/>
            </li>
          )) : filteredData.map(product => (
            <li key={product.id} className="bg-slate-800 text-yellow-50 rounded-xl max-w-[275px] cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-slate-700" onClick={() => detalleDelProducto(product.id)}>
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
            <button key={categoria.id} className="bg-slate-800 text-white p-2 border border-white">
              {categoria.name}
            </button>      
      ))
    )
  }

  return (
    <section className="bg-slate-500 text-center py-4 px-8">
        <h1 className="p-4"> {greeting} </h1>
        <ItemCount/>
        <input  type="text" placeholder="Busca un producto" id="searchInput" name="search" className="px-4 py-2 mb-4 cursor-pointer hover:bg-gray-200 focus:outline-none focus:bg-gray-200" onChange={handleChange}/>
        <button onClick={filtrandoProductos} className="bg-black text-white p-2 hover:opacity-70"> Buscar </button>
        <section className="flex gap-4 py-4 overflow-hidden scroll-smooth">
          <FontAwesomeIcon icon={faArrowLeft} className="self-center text-slate-800"/>
            <Categorias/>
          <FontAwesomeIcon icon={faArrowRight} className="self-center text-slate-800"/>
        </section>
        <MostrandoProductos/>   
    </section>
  )
}

export default ItemListContainer