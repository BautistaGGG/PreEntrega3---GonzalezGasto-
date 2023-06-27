/* eslint-disable react/prop-types */
function ItemList({name, description, pictureUrl, price, stock}) {
  return (
          <>
            <img src={pictureUrl} alt={name} className="rounded-t-xl" />
            <h3 className="text-2xl font-bold my-2 hover:underline">{name}</h3>
            <p className="my-2">{description}</p>
            <p className="my-2">Stock disponible: {stock}</p>
            <p className="my-2">$ {price} USD</p>
          </>      
  )
}

export default ItemList