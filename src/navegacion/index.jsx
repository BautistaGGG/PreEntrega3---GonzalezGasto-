import { Routes,Route } from 'react-router-dom'
import ItemListContainer from '../components/items/ItemListContainer'
import ItemDetailContainer from '../components/items/ItemDetailContainer'
import Carrito from "../pages/carrito/Carrito"
import Checkout from '../pages/checkout/Checkout'
import OrdenCreadaConExito from '../pages/ordenCreadaConExito/OrdenCreadaConExito'

function Router() {
  return (
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/producto/:idProducto' element={<ItemDetailContainer/>}/>
          <Route path='/carrito' element={<Carrito/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/ordenCreadaConExito' element={<OrdenCreadaConExito/>}/>
        </Routes>
  )
}

export default Router