/* eslint-disable react/prop-types */
/*import SpinnerLoader from "../spinnerLoader/SpinnerLoader"

function Categorias({isLoadingCategorias,APIcategorias}) {

    /*const [categoriaFiltrada,setCategoriaFiltrada] = useState("")

    function filtrandoCategorias() {
        setCategoriaFiltrada(
            APIcategorias.filter(category => {
                category.name.includes(categoriaFiltrada)
            })
        )
    }*/

  return (
    isLoadingCategorias ? 
    <SpinnerLoader/> : APIcategorias.map(categoria => (
          <button key={categoria.id} className="bg-slate-800 text-white p-2 border border-white hover:bg-slate-700">
            {categoria.name}
          </button>      
    ))
  )
}

export default Categorias*/