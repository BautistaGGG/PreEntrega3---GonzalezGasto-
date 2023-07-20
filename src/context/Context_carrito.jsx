/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const initialState = {
    productos: [],
    categorias: [],
    carrito: [],
    setCarrito: () => {},
    cantidadDeUnProducto: () => {},
    onAgregarAlCarrito: () => {},
    onRemoverUnoDelCarrito: () => {},
    onEliminarDelCarrito: () => {},
    elementosEnCarrito: () => {},
    total: 0
}

export const ContextoCarrito = createContext(initialState)

export const CarritoProvider = ({children}) => {
    const [categoria,setCategoria] = useState("")
    const [busquedaPorCategoria,setBusquedaPorCategoria] = useState(false)
    const [carrito, setcarrito] = useState([])
    const [productosData,setProductosData] = useState("")
    
    function onAgregarAlCarrito(id) {
        const productoSeleccionado = productosData.find(product => product.id === id)
        if(carrito?.find(product => product.id === id)?.cantidad === Number(productoSeleccionado.stock)) return;
        
        if(carrito?.length === 0){
          setcarrito([
            {
              ...productoSeleccionado,
               cantidad: 1
            }])
        }
    
        if(carrito?.length > 0 && !carrito.find(product => product.id === id)){
          setcarrito([
            ...carrito, {
              ...productoSeleccionado,
              cantidad: 1
            }])
        }
    
        if(carrito?.length > 0 && carrito?.find(product => product.id === id)){
          setcarrito(prevValue => {
            return prevValue.map(product => {
              if(product.id == id){
                return {
                  ...product,
                  cantidad: product.cantidad + 1}
              } else{
                return product
              }
            })
          })
        }
    }
    
    function onRemoverUnoDelCarrito(id) {
        if(carrito?.find(product => product.id === id)?.cantidad === 1) return;
        
        if(carrito?.length > 0 && carrito?.find(product => product.id === id)){
          setcarrito(prevValue => {
            return prevValue.map(product => {
              if(product.id == id){
                return {
                  ...product,
                  cantidad: product.cantidad - 1}
              } else{
                return product
              }
            })
          })
        }
    }
    
    function onEliminarDelCarrito(id) {
        setcarrito(prevValue => {
          return prevValue.filter(product => product.id !== id)
        })
    }
    
    function elementosEnCarrito(id) {
       return carrito.find(product => product.id === id)?.cantidad || 0
    }

    function cantidadTotalDeElementosEnCarrito() {
      return carrito.reduce((acc, product) => acc + product.cantidad, 0)
    }

    const precioTotal = carrito.reduce((acc,product) => acc + (product.price * product.cantidad), 0)

    return(
        <ContextoCarrito.Provider 
            value={{
                carrito, 
                setcarrito, 
                categoria, 
                setCategoria,
                busquedaPorCategoria,
                setBusquedaPorCategoria,
                onAgregarAlCarrito,
                onRemoverUnoDelCarrito,
                onEliminarDelCarrito,
                precioTotal,
                productosData,
                setProductosData,
                elementosEnCarrito,
                cantidadTotalDeElementosEnCarrito
        }}>
            {children}
        </ContextoCarrito.Provider>
    )
}