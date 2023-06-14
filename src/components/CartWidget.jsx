import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
function CartWidget() {

  const [numero,setNumero] = useState(0)

  function sumarAlCarrito() {
    setNumero(prevState => prevState +1)
  }
  return (
    <>
      <FontAwesomeIcon 
        icon={faCartShopping} 
        style={{color: "white"}} 
        onClick={sumarAlCarrito}
      />
  
      <p>
        {numero}
      </p>
    </>
  )
}

export default CartWidget