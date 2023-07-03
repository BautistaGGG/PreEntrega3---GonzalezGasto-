import NavBar from './components/NavBar'
import ItemListContainer from './components/items/ItemListContainer'

function App() {
  return (
    <main>
      <NavBar/>
      <ItemListContainer 
        greeting="Mensaje transmitido via props."
      />   
    </main>
  )
}

export default App
