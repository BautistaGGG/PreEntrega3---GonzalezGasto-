import { useReducer } from "react";

const inputActions = {
    input_change: "input_change",
    cleaning_input: "cleaning_input",
    set_data: "set_data",
    input_focus: "input_focus"
}

function formReducer(state, action){
    switch(action.type){
        case inputActions.input_change:
            const {name, value, error, hasError, active, isValidForm} = action.data
            return{
                ...state,
                [name]: {
                    value,
                    error,
                    hasError,
                    active
                }, 
                isValidForm
            }
            case inputActions.input_focus:
                const {name: inputName, active: inputActive} = action.data
                return{
                    ...state,
                    [inputName]: {
                        ...state[inputName],
                        active: inputActive
                    }
                }
            case inputActions.cleaning_input:
                return action.data
            default: 
                return state
    }
}

export default function useForm(initialState) {
    const [formState, dispatchcFormState] = useReducer(formReducer, initialState)

    function inputHandler({name,value}) {
        dispatchcFormState({
            type: inputActions.input_change,
            data: {
                name,
                value
            }
        })
    }
    
    function cleaningInputs({formState}) {
        dispatchcFormState({
            type: inputActions.cleaning_input,
            data: formState
        })
    }

    function inputFocus({name, active}) {
        dispatchcFormState({
            type: inputActions.input_focus,
            data:{
                name,
                active
            }
        })
    }

    return [formState, inputHandler, cleaningInputs, inputFocus]
}