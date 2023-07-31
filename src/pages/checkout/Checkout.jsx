import useForm from "../../hooks/useForm"

const initialState = {
  name: {value: "", error: "", hasError: true, active: false, name: "name"},
  surname: {value: "", error: "", hasError: true, active: false, name: "surname"},
  email: {value: "", error: "", hasError: true, active: false, name: "email"},
  document: {value: "", error: "", hasError: true, active: false, name: "document"},
  address: {value: "", error: "", hasError: true, active: false, name: "address"},
  isFormValid: false
}

function Checkout() {
  const [formState, inputHandler, cleaningInputs ,inputFocus, inputBlur] = useForm(initialState)

  function handleChange(e) {    
    const {name, value} = e.target
    inputHandler({ name, value })
  }

  function onFocus({name}) {
    inputFocus({name})
  }

  function onBlur({name}) {
    inputBlur({name})
  }

  function onSubmitForm(e) {
    e.preventDefault()
    console.log('formState', formState)   
  }

  return (
    <main className="px-8">
        <h1 className="text-white text-3xl my-4"> Checkout </h1>
        <p className="text-white my-4 pl-4"> Completa el formulario para finalizar la compra </p>
        <form onSubmit={onSubmitForm} className="p-4 flex flex-col">
            <label className="text-white text-xs mb-2" htmlFor="name">
              Nombre
            </label>
            <input 
                type="text" 
                placeholder="Oscar" 
                id="name" 
                name="name" 
                required={true}
                maxLength={40}
                className="bg-zinc-950 text-white border border-[#b05b30] px-4 py-2 mb-4 rounded-sm hover:bg-zinc-800 focus:outline-none focus:bg-zinc-800" 
                onChange={handleChange}
                onFocus={() => onFocus({name: "name"})}
                onBlur={() => onBlur({name: "name"})}
            />
            {formState.name.error !== "" ? <pre className="text-red-900 text-sm mb-4 mr-auto"> {formState.name.error} </pre> : null}

            <label className="text-white text-xs mb-2" htmlFor="surname">
              Apellido
            </label>
            <input 
                type="text" 
                placeholder="Ortíz" 
                id="surname" 
                name="surname"
                required={true} 
                maxLength={40}
                className="bg-zinc-950 text-white border border-[#b05b30] px-4 py-2 mb-4 rounded-sm hover:bg-zinc-800 focus:outline-none focus:bg-zinc-800" 
                onChange={handleChange}
                onFocus={() => onFocus({name: 'surname'})}
                onBlur={() => onBlur({name: 'surname'})}
            />
            {formState.surname.error !== "" ? <pre className="text-red-900 text-sm mb-4 mr-auto"> {formState.surname.error} </pre> : null}

            <label className="text-white text-xs mb-2" htmlFor="email">
              Email
            </label>
            <input 
                type="text" 
                placeholder="ejemplo@gmail.com" 
                id="email" 
                name="email"
                required={true} 
                maxLength={80}
                className="bg-zinc-950 text-white border border-[#b05b30] px-4 py-2 mb-4 rounded-sm hover:bg-zinc-800 focus:outline-none focus:bg-zinc-800 selection:bg-zinc-950" 
                onChange={handleChange}
                onFocus={() => onFocus({name: 'email'})}
                onBlur={() => onBlur({name: 'email'})}
            />
            {formState.email.error !== "" ? <pre className="text-red-900 text-sm mb-4 mr-auto"> {formState.email.error} </pre> : null}

            <label className="text-white text-xs mb-2" htmlFor="document">
              Documento Nacional de Identidad
            </label>
            <input 
                type="text" 
                placeholder="23.654.789" 
                id="document" 
                name="document"
                required={true} 
                maxLength={15}
                className="bg-zinc-950 text-white border border-[#b05b30] px-4 py-2 mb-4 rounded-sm hover:bg-zinc-800 focus:outline-none focus:bg-zinc-800" 
                onChange={handleChange}
                onFocus={() => onFocus({name: 'document'})}
                onBlur={() => onBlur({name: 'document'})}
            />
            {formState.document.error !== "" ? <pre className="text-red-900 text-sm mb-4 mr-auto"> {formState.document.error} </pre> : null}

            <label className="text-white text-xs mb-2" htmlFor="address">
              Dirección
            </label>
            <input 
                type="text" 
                placeholder="Avenida Siempre Viva 678" 
                id="address" 
                name="address"
                required={true} 
                maxLength={80}
                className="bg-zinc-950 text-white border border-[#b05b30] px-4 py-2 mb-4 rounded-sm hover:bg-zinc-800 focus:outline-none focus:bg-zinc-800" 
                onChange={handleChange}
                onFocus={() => onFocus({name: 'address'})}
                onBlur={() => onBlur({name: 'address'})}
            />
            {formState.address.error !== "" ? <pre className="text-red-900 text-sm mb-4 mr-auto"> {formState.address.error} </pre> : null}
            
            <button className="bg-[#b05b30] text-white p-2 rounded-r-sm cursor-pointer hover:opacity-80 focus:outline-none focus:opacity-80 disabled:cursor-not-allowed disabled:opacity-40" type="submit" disabled={!formState.isFormValid}> 
              Enviar 
            </button>
        </form>
    </main>
  )
}

export default Checkout