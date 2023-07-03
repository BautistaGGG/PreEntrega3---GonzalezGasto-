/* eslint-disable react/prop-types */
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import useFetch from "../hooks/useFetch"

function ItemListContainer({greeting}) {

  const {APIdata, isLoading} = useFetch("https://6499b22c79fbe9bcf83fccc5.mockapi.io/productos")
  
  if (isLoading) {
    console.log(isLoading)
    console.log("Cargando...")
    return(
      <p className="text-3xl text-center font-extrabold">Cargando data...</p>
    )
  }else if(!isLoading){
    console.log("Data cargada!");
  }

  return (
    <section className="bg-slate-500 text-center py-4 px-8">
        <h1 className="p-4"> {greeting} </h1>
          <ItemCount/>
          <ul className="grid grid-cols-4 gap-4 justify-items-center">
            {!isLoading && APIdata.map(product => (
              <li className="bg-slate-800 text-yellow-50 rounded-xl max-w-[275px] cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-slate-700" key={product.id}>
                <ItemList {...product}/>
              </li>
            ))}
          </ul>        
    </section>
  )
}

export default ItemListContainer