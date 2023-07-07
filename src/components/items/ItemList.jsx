/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function ItemList({name, description, image, price, stock}) {
  return (
          <>
            <img src={image} alt={name} className="rounded-t-xl" loading="lazy"/>
            <div className="px-2">
              <h3 className="inline text-2xl font-bold mb-2 hover:underline">{name}</h3>
              <p className="my-2">{description}</p>
              <p className="my-2">Stock disponible: {stock}</p>
              <p className="my-2 font-bold text-xl">$ {price} USD</p>
              <button className="bg-slate-500 rounded-md p-2 mb-4">
                <FontAwesomeIcon icon={faCartShopping} style={{color: "white"}} />
                Añadir al carrito
              </button>
            </div>
          </>      
  )
}

export default ItemList