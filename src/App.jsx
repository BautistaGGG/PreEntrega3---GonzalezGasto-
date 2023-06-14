import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <main>
      <NavBar/>
      <ItemListContainer greeting="No tienes items en el carrito - Mensaje transmitido via props."/>
    </main>
  )
}

export default App
