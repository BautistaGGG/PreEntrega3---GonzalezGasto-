/* eslint-disable react/prop-types */
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

import { useEffect, useState} from "react"

function ItemListContainer({greeting}) {

  const [llamadaAPI,setLLamadaAPI] = useState([])

  useEffect(() => {
    async function gettingProductosFromAPI(){
      try{
        const response = await fetch("https://6499b22c79fbe9bcf83fccc5.mockapi.io/productos") 
        const data = await response.json()
        setLLamadaAPI(data)
      } catch(error){
        console.log("Error: " + error)
      }
    }
    setTimeout(() => gettingProductosFromAPI(),2000)
  },[])

  return (
    <section className="bg-slate-500 text-center py-4 px-8">
        <h1 className="p-4"> {greeting} </h1>
          <ItemCount/>
          <ul className="grid grid-cols-4 gap-4 justify-items-center">
            {llamadaAPI.map((product) => (
              <li className="bg-slate-800 text-yellow-50 rounded-xl max-w-[275px] cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-slate-700" key={product.id}>
                <ItemList {...product}/>
              </li>
            ))}
          </ul>
          
    </section>
  )
}

export default ItemListContainer