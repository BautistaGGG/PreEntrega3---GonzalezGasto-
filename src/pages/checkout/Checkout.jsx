import { useEffect, useContext, useMemo, useState } from "react"
import useForm from "../../hooks/useForm"
import { useLocation, useNavigate } from "react-router-dom"
import { ContextoCarrito } from "../../context/Context_carrito"
import { firebaseServices } from "../../services/firebase/firebase"

const initialState = {
  name: {value: "", error: "", hasError: true, active: false, name: "name"},
  surname: {value: "", error: "", hasError: true, active: false, name: "surname"},
  email: {value: "", error: "", hasError: true, active: false, name: "email"},
  document: {value: "", error: "", hasError: true, active: false, name: "document"},
  address: {value: "", error: "", hasError: true, active: false, name: "address"},
  isFormValid: false
}

function Checkout() {
  const [formState, inputHandler,inputFocus, inputBlur] = useForm(initialState)
  const {carrito, precioTotal, setcarrito} = useContext(ContextoCarrito)
  const [ordenCreada, setOrdenCreada] = useState(null)
  
  let query = useQuery()
  
  const {state} = useLocation()

  const navigate = useNavigate()

  function useQuery() {
    const {search} = useLocation()
    return useMemo(() => new URLSearchParams(search), [search])
  }

  function handleChange(e) {    
    const {name, value} = e.target
    inputHandler({ name, value })
  }

  function onFocus({name}) {
    inputFocus({name})
  }

  function onBlur({name}) {
    inputBlur({name})
  }

  async function onHandleOrdenDeCompra() {
    const nuevaOrdenDeCompra = {
      Comprador: {
        Nombre: formState.name.value,
        Apellido: formState.surname.value,
        Email: formState.email.value,
        DNI: formState.document.value,
        Dirección: formState.address.value
      },
      fechaDeCreación: new Date(),
      items: carrito,
      metodoDePago: {
        moneda: "USD",
        metodo: "CASH",
        tipo: "CASH"
      },
      vendedor:{
        id: 1,
        Nombre: "Pedro",
        telefono: "428567",
        email: "pedrinho@ema.com"
      },
      DatosDelEnvío:{
        FechaEntrega: new Date() + 7,
        NumeroDeTrackeo: "123opasdkpojasdpoj456",
        Tipo: "Delivery"
      },
      total: precioTotal,
    }

   const ordenFinalID = await firebaseServices.crearOrden(nuevaOrdenDeCompra)
   await firebaseServices.actualizarCarrito(state?.carritoID)

   return { ordenFinalID }
  }

  /* AL dirigirse hacia CHECKOUT, se GENERA la OREDEN DE COMPRA con
    estado de "PENDIENTE", una vez COMPLETADO EL FORMULARIO y 
    ENIVADO, el ESTADO se actualiza a "COMPLETO" */

  async function onSubmitForm(e) {
    e.preventDefault()
    const { ordenFinalID } = await onHandleOrdenDeCompra()
    setOrdenCreada(ordenFinalID)
    setTimeout(() => {
      navigate('/ordenCreadaConExito', {state: {ordenFinalID: ordenFinalID.id}})
    },1500)
  }

  useEffect(() => {
    const IDdelCarrito = query.get("carritoID") 
    async function obtenerCarrito() {
      const carrito = await firebaseServices.obtenerCarritoPorID(IDdelCarrito)
      return carrito
    }  

    if(IDdelCarrito){
      obtenerCarrito()
        .then(carrito => {
          setcarrito(carrito.productos)
        })
        .catch(err => {
          console.log({err})
        })
  
    }  
  },[query, setcarrito])

  return (
    <main className="px-8">
        <h1 className="text-white text-3xl my-4"> Checkout </h1>
        <p className="text-white my-4 pl-4"> Completa el formulario para finalizar la compra </p>
        <form onSubmit={onSubmitForm} className="p-4 flex flex-col">
            <label className="text-white text-xs mb-2" htmlFor="name">
              Nombre
            </label>
            <input 
                type="text" 
                placeholder="Oscar" 
                id="name" 
                name="name" 
                required={true}
                maxLength={40}
                className="bg-zinc-950 text-white border border-[#b05b30] px-4 py-2 mb-4 rounded-sm hover:bg-zinc-800 focus:outline-none focus:bg-zinc-800" 
                onChange={handleChange}
                onFocus={() => onFocus({name: "name"})}
                onBlur={() => onBlur({name: "name"})}
            />
            {formState.name.error !== "" ? 
              <pre className="text-red-900 text-sm mb-4 mr-auto"> {formState.name.error} </pre> : 
            null}

            <label className="text-white text-xs mb-2" htmlFor="surname">
              Apellido
            </label>
            <input 
                type="text" 
                placeholder="Ortíz" 
                id="surname" 
                name="surname"
                required={true} 
                maxLength={40}
                className="bg-zinc-950 text-white border border-[#b05b30] px-4 py-2 mb-4 rounded-sm hover:bg-zinc-800 focus:outline-none focus:bg-zinc-800" 
                onChange={handleChange}
                onFocus={() => onFocus({name: 'surname'})}
                onBlur={() => onBlur({name: 'surname'})}
            />
            {formState.surname.error !== "" ? 
              <pre className="text-red-900 text-sm mb-4 mr-auto"> {formState.surname.error} </pre> :
            null}

            <label className="text-white text-xs mb-2" htmlFor="email">
              Email
            </label>
            <input 
                type="text" 
                placeholder="ejemplo@gmail.com" 
                id="email" 
                name="email"
                required={true} 
                maxLength={80}
                className="bg-zinc-950 text-white border border-[#b05b30] px-4 py-2 mb-4 rounded-sm hover:bg-zinc-800 focus:outline-none focus:bg-zinc-800 selection:bg-zinc-950" 
                onChange={handleChange}
                onFocus={() => onFocus({name: 'email'})}
                onBlur={() => onBlur({name: 'email'})}
            />
            {formState.email.error !== "" ? 
              <pre className="text-red-900 text-sm mb-4 mr-auto"> {formState.email.error} </pre> 
            : null}

            <label className="text-white text-xs mb-2" htmlFor="document">
              Documento Nacional de Identidad
            </label>
            <input 
                type="text" 
                placeholder="23.654.789" 
                id="document" 
                name="document"
                required={true} 
                maxLength={15}
                className="bg-zinc-950 text-white border border-[#b05b30] px-4 py-2 mb-4 rounded-sm hover:bg-zinc-800 focus:outline-none focus:bg-zinc-800" 
                onChange={handleChange}
                onFocus={() => onFocus({name: 'document'})}
                onBlur={() => onBlur({name: 'document'})}
            />
            {formState.document.error !== "" ? 
              <pre className="text-red-900 text-sm mb-4 mr-auto"> {formState.document.error} </pre> :
            null}

            <label className="text-white text-xs mb-2" htmlFor="address">
              Dirección
            </label>
            <input 
                type="text" 
                placeholder="Avenida Siempre Viva 678" 
                id="address" 
                name="address"
                required={true} 
                maxLength={80}
                className="bg-zinc-950 text-white border border-[#b05b30] px-4 py-2 mb-4 rounded-sm hover:bg-zinc-800 focus:outline-none focus:bg-zinc-800" 
                onChange={handleChange}
                onFocus={() => onFocus({name: 'address'})}
                onBlur={() => onBlur({name: 'address'})}
            />
            {formState.address.error !== "" ? <pre className="text-red-900 text-sm mb-4 mr-auto"> {formState.address.error} </pre> : null}
            
            <button className="bg-[#b05b30] text-white p-2 rounded-r-sm cursor-pointer hover:opacity-80 focus:outline-none focus:opacity-80 disabled:cursor-not-allowed disabled:opacity-40" type="submit" disabled={!formState.isFormValid}> 
              Enviar 
            </button>
        </form>
        {ordenCreada !== null ? 
        <h1 className="text-white text-center text-2xl">
          La orden de compra fue creada correctamente! Sólo un paso más...
        </h1> :null} 
    </main>
  )
}

export default Checkout