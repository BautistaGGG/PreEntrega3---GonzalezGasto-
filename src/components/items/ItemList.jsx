/* eslint-disable react/prop-types */
function ItemList({name, description, image, price, stock}) {
  return (
          <>
            <img src={image} alt={name} className="rounded-t-xl" />
            <div className="px-2">
              <h3 className="text-2xl font-bold mb-2 hover:underline">{name}</h3>
              <p className="my-2">{description}</p>
              <p className="my-2">Stock disponible: {stock}</p>
              <p className="my-2">$ {price} USD</p>
            </div>
          </>      
  )
}

export default ItemList