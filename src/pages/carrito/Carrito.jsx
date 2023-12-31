import { useContext } from "react"
import { ContextoCarrito } from "../../context/Context_carrito"
import { useNavigate } from "react-router-dom"
import { firebaseServices } from "../../services/firebase/firebase"

function Carrito() {
  const {
    onRemoverUnoDelCarrito,
    onEliminarDelCarrito,
    onAgregarAlCarrito,
    carrito: CarritoContext,
    precioTotal,
    cantidadTotalDeElementosEnCarrito
  } = useContext(ContextoCarrito)

  async function handleCrearCarrito() {
    const nuevoCarrito = {
      Comprador: {
        id: 1
      },
      productos: CarritoContext,
      fechaDeCreación: new Date(),
      total: precioTotal,
      status: "pendiente"
    }

    const carritoID = await firebaseServices.crearCarrito(nuevoCarrito)
    return carritoID
  }

  const navigate = useNavigate()

  async function handleCheckout() {
    const carritoID = await handleCrearCarrito()
    navigate('/checkout', { state: {carritoID: carritoID.id} })
  }

  return (
    <main className="bg-[#030203] px-8">
     {CarritoContext.length > 0 ? <h1 className="text-white text-3xl text-center mb-4"> Productos agregados al carrito: </h1> : null}
      <ul className="grid grid-cols-responsive justify-items-center gap-4 mt-6">
        {CarritoContext.length === 0 ? 
          <h3 className="text-white"> El carrito está vacio </h3> : 
          CarritoContext.map(product => (
            <li key={product.id} className="bg-zinc-950 rounded-md">
              <img src={product.image} alt={product.name} className="rounded-t-md select-none cursor-default h-52" loading="lazy"/>
              <section className="px-2 my-4">
                <h4 className="text-white"> Nombre: {product.name} </h4>
                <h4 className="text-white my-2"> Cantidad: {product.cantidad} </h4>
                <p className="text-white"> Precio: {product.price} USD </p>
                <div className="flex justify-center items-center gap-4 mt-4">
                  <button className="bg-transparent text-white px-2 place-self-center border border-[#b05b30] rounded-md  hover:bg-[#b05b30]" onClick={() => onAgregarAlCarrito(product.id)}>+</button>
                  <button className="bg-transparent text-white p-2  place-self-center border border-[#b05b30] rounded-md hover:bg-[#b05b30]" onClick={() => onEliminarDelCarrito(product.id)}>Eliminar del carrito</button>
                  <button className="bg-transparent text-white px-2 place-self-center border border-[#b05b30] rounded-md  hover:bg-[#b05b30]" onClick={() => onRemoverUnoDelCarrito(product.id)}>-</button>
                </div>
              </section>
            </li>
          ))}
      </ul>
      {CarritoContext?.length > 0 && 
      <div>
        <p className="text-white text-center">
         Productos en el carrito: {cantidadTotalDeElementosEnCarrito()}
        </p>
        <p className="text-white text-center text-3xl my-4 "> 
          Precio final: {precioTotal} USD 
        </p>
        <button className="bg-[#b05b30] block my-0 mx-auto p-2 text-white rounded-md transition-transform hover:bg-zinc-950 hover:scale-125" onClick={handleCheckout}>
          Confirmar compra
        </button>
      </div>
      }
    </main>
  )
}

export default Carrito