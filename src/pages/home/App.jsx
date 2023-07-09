import NavBar from '../../components/navBar/NavBar'
import ItemListContainer from '../../components/items/ItemListContainer'
import ItemDetailContainer from '../../components/items/ItemDetailContainer'
import CategoriaElegida from "../../pages/categoria/CategoriaElegida"
import { Routes,Route } from 'react-router-dom'

function App() {
  return (
    <main>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Mensaje transmitido via props."/>}/>
        <Route path='/producto/:idProducto' element={<ItemDetailContainer/>}/>
        <Route path='/categoria/:idCategoria' element={<CategoriaElegida/>} />
      </Routes>
    </main>
  )
}

export default App
