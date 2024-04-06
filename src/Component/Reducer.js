import React from "react";
export let Reducer=(state,action)=>{
    let {type,payload}=action;
    
    switch(type)
    {
        case "CHANG_NAME":
        return {...state,inputitem:payload.value}

        
            case "SET_INPUT_LIST2":
                return{...state,inputlist2:payload.set}

                case "RESET_INPUT_FIELD":
                    return{...state,inputitem:''}

                    case "UPDATE_INPUTVALUE":
                    return{...state,inputvalue:payload.set}

                    case "RESET_INPUT_VALUE":
                      return{...state,inputvalue:payload.set}

        default:
            return state
    }
    
}