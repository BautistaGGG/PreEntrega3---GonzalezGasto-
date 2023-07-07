/*import { useState } from "react"

function Categorias({APIcategorias}) {

    const [categoriaFiltrada,setCategoriaFiltrada] = useState("")

    function filtrandoCategorias() {
        setCategoriaFiltrada(
            APIcategorias.filter(category => {
                category.name.includes(categoriaFiltrada)
            })
        )
    }

  return (
      APIcategorias.map(categoria => (
            <section key={categoria.id}>
                <h3 onClick={filtrandoCategorias} className="cursor-pointer">{categoria.name}</h3>
            </section>
        ))
  )
}

export default Categorias*/