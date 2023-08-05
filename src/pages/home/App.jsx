import NavBar from '../../components/navBar/NavBar'
import { CarritoProvider } from '../../context/Context_carrito'
import Router from '../../navegacion/index'

function App() {
  return (
    <main className='h-screen bg-[#030203]'>
      <CarritoProvider>
        <NavBar/>
        <Router/>
      </CarritoProvider>
    </main>
  )
}

export default App
