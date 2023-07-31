/* eslint-disable no-case-declarations */
import { useReducer } from "react";
import { inputValidate } from "../utils/functions/form_validacion/validacionForm";

const inputActions = {
    input_change: "input_change",
    cleaning_input: "cleaning_input",
    set_data: "set_data",
    input_focus: "input_focus",
    input_blur: "input_blur"
}

function formReducer(state, action){
    switch(action.type){
        case inputActions.input_change:
            const { name, value, hasError, error, active, isFormValid } = action.data;
            return{
                ...state,
                [name]: {
                    value,
                    error,
                    hasError,
                    active
                }, 
                isFormValid
            }
            case inputActions.input_focus:
                return{
                    ...state,
                    [action.data.name]: {
                        ...state[action.data.name],
                        active: true
                    }
                }
            case inputActions.input_blur:
                return{
                    ...state,
                    [action.data.name]: {
                        ...state[action.data.name],
                        active: false
                    }
                }
            case inputActions.cleaning_input:
                return action.data
            default: 
                return state
    }
}

export default function useForm(initialState) {
    const [formState, dispatchFormState] = useReducer(formReducer, initialState)
    function inputHandler({name,value}) {
        const {error, hasError} = inputValidate({ type: name, value })
        let isFormValid = true

        for(let valor in formState){
            const itemIndividual = formState[valor]
            console.log(itemIndividual); 
            if(valor !== name && hasError){
                isFormValid = false
                break;
            }else if(valor !== name && itemIndividual.hasError){
                isFormValid = false
                break;
            }
        }

        dispatchFormState({
            type: inputActions.input_change,
            data: {
                name,
                value,
                error,
                hasError,
                isFormValid,
                active: true
            }
        })
    }
    
    function cleaningInputs({formState}) {
        dispatchFormState({
            type: inputActions.cleaning_input,
            data: formState
        })
    }

    function inputFocus({name}) {
        dispatchFormState({
            type: inputActions.input_focus,
            data:{
                name
            }
        })
    }

    function inputBlur({name}) {
        dispatchFormState({
            type: inputActions.input_blur,
            data:{
                name
            }
        })
    }

    return [formState, inputHandler, cleaningInputs, inputFocus, inputBlur]
}