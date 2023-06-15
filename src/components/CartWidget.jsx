//Icono importado de https://fontawesome.com/icons/cart-shopping?f=classic&s=solid&pc=%23f5f5f5

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"


function CartWidget() {
  return (
    <>
      <FontAwesomeIcon icon={faCartShopping} style={{color: "white"}} />
      <p>0</p>
    </>
  )
}

export default CartWidget