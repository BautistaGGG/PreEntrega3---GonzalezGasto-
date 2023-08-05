/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { memo } from "react";

function ItemList({name, description, image, price, stock, category, id, agregarAlCarrito,detalleDelProducto}) {

  return (
          <>
            <img src={image} alt={name} className="rounded-t-xl select-none cursor-default" loading="lazy"/>
            <div className="px-2" onClick={() => detalleDelProducto(id)}>
              <h3 className="inline text-2xl font-bold mb-2 hover:decoration-orange-600 select-none">{name}</h3>
              <p className="my-2">Categoria: {category}</p>
              <p className="my-2">{description}</p>
              <p className="my-2">Stock disponible: {stock}</p>
              <p className="my-2 font-bold text-xl">$ {price} USD</p>
            </div>
            <button className="bg-zinc-950 border border-[#b05b30] rounded-md p-2 mb-4 mx-4 hover:bg-[#b05b30] focus:bg-[#b05b30] focus:outline-none" onClick={() => agregarAlCarrito(id)}>
              <FontAwesomeIcon icon={faCartShopping} style={{color: "white"}}/>
              Añadir al carrito
            </button>
          </>      
  )
}

export default memo(ItemList)