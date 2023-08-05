import { useLocation } from "react-router-dom"


function OrdenCreadaConExito() {
    
    const location =  useLocation()
    const {ordenFinalID} = location.state

    return (
        <main>
            <h1>OrdenCreadaConExito</h1>
            <p>ID de la orden: {ordenFinalID}</p>
        </main>
  )
}

export default OrdenCreadaConExito