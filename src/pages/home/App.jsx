import NavBar from '../../components/navBar/NavBar'
import ItemListContainer from '../../components/items/ItemListContainer'
import ItemDetailContainer from '../../components/items/ItemDetailContainer'
import Carrito from "../carrito/Carrito"
import { Routes,Route } from 'react-router-dom'
import { CarritoProvider } from '../../context/Context_carrito'

function App() {
  return (
    <main className='h-screen bg-[#030203]'>
      <CarritoProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/producto/:idProducto' element={<ItemDetailContainer/>}/>
          <Route path='/carrito' element={<Carrito/>}/>
        </Routes>
      </CarritoProvider>
    </main>
  )
}

export default App
