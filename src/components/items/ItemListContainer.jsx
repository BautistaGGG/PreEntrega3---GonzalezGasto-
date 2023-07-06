/* eslint-disable react/prop-types */
import { useState } from "react"
import useFetch from "../hooks/useFetch"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import Faq from "../../components/faq/Faq"

function ItemListContainer({greeting}) {

  const {APIdata, isLoading} = useFetch("https://6499b22c79fbe9bcf83fccc5.mockapi.io/productos")

  const [productoBuscado,setProductoBuscado] = useState("")
  const [filteredData,setFilteredData] = useState("")

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

  function MostrandoProductos() {
    return(
      <>
        {isLoading ? <p className="text-3xl text-center font-extrabold"> Cargando data...</p> : 
        <ul className="grid grid-cols-responsive justify-items-center gap-4"> 
          {filteredData == "" ? APIdata.map(product => (
            <li className="bg-slate-800 text-yellow-50 rounded-xl max-w-[275px] cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-slate-700" key={product.id}>
            <ItemList {...product}/>
          </li>
          )) : filteredData.map(product => (
            <li className="bg-slate-800 text-yellow-50 rounded-xl max-w-[275px] cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-slate-700" key={product.id}>
              <ItemList {...product}/>
            </li>
            ))}
        </ul>
        }
      </>
    )
  }

  return (
    <section className="bg-slate-500 text-center py-4 px-8">
        <h1 className="p-4"> {greeting} </h1>
        <ItemCount/>
        <input  type="text" placeholder="Busca un producto" id="searchInput" name="search" className="px-4 py-2 mb-4 cursor-pointer focus:outline-none focus:bg-gray-200" onChange={handleChange}/>
        <button onClick={filtrandoProductos} className="bg-black text-white p-2">
          Buscar
        </button>
        <MostrandoProductos/>   
        <Faq/>
    </section>
  )
}

export default ItemListContainer