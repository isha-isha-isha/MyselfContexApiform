import { createContext, useContext, useReducer } from "react";
import { Reducer } from "./Component/Reducer";
let initialstate={
    inputitem:'defaultName',
    inputlist2:[1,2,3],
    inputvalue:{
        fullname:"ada",
        password:"defaultPassword",
        email:"charls@gmail.com",
        image:[]
    }
}

let Mycontex=createContext(initialstate);

export const  MyProvider=({children})=>{

    let  [state, dispatch]=useReducer(Reducer,initialstate)

    const changeBox=(e)=>{
        let inputvalue=e.target.value
        dispatch(
            {
                type:'CHANG_NAME',
                payload:{
                    value:inputvalue
                }
            }
        )
    }
 const ResetInputfield=()=>{
    dispatch(
        {
            type:'RESET_INPUT_FIELD'
        }
    )
 }


    const Addname=()=>{
        let updatedinputlist2=state.inputlist2.concat(state.inputitem);
        console.log(updatedinputlist2);
        dispatch(
            {
                type:'SET_INPUT_LIST2',
                payload:{
                    set:updatedinputlist2
                }
            }
        )
        ResetInputfield()
    }


    const getvalue=(e)=>{
        console.log(e);
        // let updatedinputvalue=state.inputvalue
        let updatedinputvalue={...state.inputvalue}
        console.log(updatedinputvalue)

        let inputname=e.target.name;
        console.log(inputname)

        if(e.target.files)
        {
            let files=Array.from(e.target.files)
            updatedinputvalue[inputname]=files
        }
        else{
        let inputvalue=e.target.value;
        updatedinputvalue[inputname]=inputvalue;
        }
        console.log("updatedValueeeeeeeeeeee")
        console.log(updatedinputvalue)

        dispatch(
            {
                type:"UPDATE_INPUTVALUE",
                payload:{
                    set:updatedinputvalue
                }
            }
        )
    }

    const resetinputvalue=()=>{
        console.log('resetttt')
        
        dispatch(
            {
                type:"RESET_INPUT_VALUE",
                payload:{
                    set:{
                        fullname:'',
                        password:'',
                        email:''
                    }
                }
            }
        )
    }
    let objvalue={
        inputitem:state.inputitem,
        inputlist2:state.inputlist2,
        inputvalue:state.inputvalue,
        changeBox,
        Addname,
        getvalue,
        resetinputvalue
    }

    return(
        <Mycontex.Provider value={objvalue}>
            {children}
        </Mycontex.Provider>
        
    )
}

 export const useName=()=>{
    let contex=useContext(Mycontex)
    return contex;
}