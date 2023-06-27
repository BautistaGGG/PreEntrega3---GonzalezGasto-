import { useState } from "react"

function ItemCount() {

 const [remeras,setRemeras] = useState(0)
 const [stockDisponible,setStockDisponible] = useState(10)

 function añadirItems() {
    setRemeras(prevValue => prevValue + 1)
    setStockDisponible(prevStock => prevStock -1)
}

 function eliminarItems() {
    setRemeras(prevValue => prevValue - 1)
    setStockDisponible(prevStock => prevStock + 1)
 }


  return (
    <div className="border border-zinc-50 my-4 p-4"> 
        <h2 className="text-2xl">Remeras oversize</h2>
        <p> Stock disponible: {stockDisponible} </p>
        <button className="bg-black text-white p-2 disabled:opacity-70" onClick={añadirItems} disabled={stockDisponible === 0}>
            Sumar remera
        </button>
        <p> Remeras compradas: {remeras} </p>
        <button className="bg-black text-white p-2 disabled:opacity-70" onClick={eliminarItems} disabled={remeras === 0}>
            Restar remera
        </button>
    </div>
  )
}

export default ItemCount