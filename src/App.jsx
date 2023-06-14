import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PrimerComponente from './componentes/PrimerComponente'

function App() {
  return (
    <main className='bg-red-300 border border-double border-blue-600'>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel='noreferrer'>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel='noreferrer'>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <PrimerComponente texto="Este es el Primer Componente"/>
    </main>
  )
}

export default App
