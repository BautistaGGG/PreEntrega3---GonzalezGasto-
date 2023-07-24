import useForm from "../../hooks/useForm"

function Checkout() {

 const initialState = {
    Nombre:{value: "", error: "", hasError: true, active:false, name:"name"},
    Apellido:{value: "", error: "", hasError: true, active:false, name:"surname"},
    Email:{value: "", error: "", hasError: true, active:false, name:"email"},
    DNI:{value: "", error: "", hasError: true, active:false, name:"document"},
    Dirección: {value: "", error: "", hasError: true, active:false, name:"address"},
    isValidForm: false
 }

  const [formState, inputHandler, cleaningInputs, inputFocus] = useForm(initialState)

  function handleChange(e) {    
    const {name, value} = e.target
    inputHandler({name, value})
  }

  function onFocus(name, active) {
    inputFocus({name, active})
  }

  console.log(formState);

  return (
    <main className="px-8">
        <h1 className="text-white text-3xl">Checkout</h1>
        <form action="" className="flex flex-col items-center justify-center">
            <input 
                type="text" 
                placeholder="Nombre" 
                id="name" 
                name="name" 
                required={true}
                className="px-4 py-2 mb-4 rounded-l-sm hover:bg-gray-200 focus:outline-none focus:bg-gray-200" 
                onFocus={() => onFocus({name: 'name', active: true})}
                onChange={handleChange}
            />
            <input 
                type="text" 
                placeholder="Apellido" 
                id="surname" 
                name="surname"
                required={true} 
                className="px-4 py-2 mb-4 rounded-l-sm hover:bg-gray-200 focus:outline-none focus:bg-gray-200" 
                onFocus={() => onFocus({name: 'name', active: true})}
                onChange={handleChange}
            />
            <input 
                type="text" 
                placeholder="Email" 
                id="email" 
                name="email"
                required={true} 
                className="px-4 py-2 mb-4 rounded-l-sm hover:bg-gray-200 focus:outline-none focus:bg-gray-200" 
                onFocus={() => onFocus({name: 'name', active: true})}
                onChange={handleChange}
            />
            <input 
                type="text" 
                placeholder="DNI" 
                id="document" 
                name="document"
                required={true} 
                className="px-4 py-2 mb-4 rounded-l-sm hover:bg-gray-200 focus:outline-none focus:bg-gray-200" 
                onFocus={() => onFocus({name: 'name', active: true})}
                onChange={handleChange}
            />
            <input 
                type="text" 
                placeholder="Dirección" 
                id="address" 
                name="address"
                required={true} 
                className="px-4 py-2 mb-4 rounded-l-sm hover:bg-gray-200 focus:outline-none focus:bg-gray-200" 
                onFocus={() => onFocus({name: 'name', active: true})}
                onChange={handleChange}
            />
            
            <button /*onClick={filtrandoProductos}*/ className="bg-[#b05b30] text-zinc-950 p-2 rounded-r-sm hover:opacity-80 focus:outline-none focus:opacity-80 "> Buscar </button>
        </form>
    </main>
  )
}

export default Checkout