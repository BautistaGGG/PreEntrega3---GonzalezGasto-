const condicionesParaName = /^[a-zA-ZÀ-ÿ\s]{3,40}$/;
const condicionesParaSurname = /^[a-zA-ZÀ-ÿ\s]{3,40}$/;
const condicionesParaDocument = /^[0-9]{8,15}$/;
const condicionesParaEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const condicionesParaAddress = /^[a-zA-ZÀ-ÿ0-9\s]{6,80}$/;

export function inputValidate({type, value}) {
    let hasError = false
    let error = ""
    const formatValue = value.trim()

    switch(type){
        case 'name':
            if(formatValue === ""){
                hasError = true
                error = "Este campo es requerido"
            } else if(!condicionesParaName.test(formatValue)){
                hasError = true
                error = "Nombre inválido"
            } else {
                hasError = false,
                error = ""
            }
            break;
        case 'surname':
            if(formatValue === ""){
                hasError = true
                error = "Este campo es requerido"
            } else if(!condicionesParaSurname.test(formatValue)){
                hasError = true
                error = "Apellido inválido"
            } else {
                hasError = false,
                error = ""
            }
            break;
        case 'email':
            if(formatValue === ""){
                hasError = true
                error = "Este campo es requerido"
            } else if(!condicionesParaEmail.test(formatValue)){
                hasError = true
                error = "Email inválido"
            } else {
                hasError = false,
                error = ""
            }
            break;
        case 'document':
            if(formatValue === ""){
                hasError = true
                error = "Este campo es requerido"
            } else if(!condicionesParaDocument.test(formatValue)){
                hasError = true
                error = "Documento inválido"
            } else {
                hasError = false,
                error = ""
            }
            break;
        case 'address':
            if(formatValue === ""){
                hasError = true
                error = "Este campo es requerido"
            } else if(!condicionesParaAddress.test(formatValue)){
                hasError = true
                error = "Dirección inválida"
            } else {
                hasError = false,
                error = ""
            }
            break;
        default:
            hasError = false
            error = ""
            break; 
        
    }

    return {hasError, error}
}