import React, { useState } from 'react'
import Mainsection from '../Mainsection'

function PracticeSession() {
    let [state,setstate]=useState(
        {
            uname:'a'
        }
    )
    const getvalue=(e)=>{
       let  updateState={...state};
       updateState.uname=e.target.value;
       setstate(updateState);
       console.log(state);
    }

    

    let [state2,setstate2]=useState();
    const getvalue2=(e)=>{
        setstate2(e.target.value)
        console.log(typeof(state2));
    }





    
    // let [userdata,setuserdata]=useState([]);
    // const handlesubmit=(e)=>{
    //     e.preventDefault();
    //     console.log("submited");
    //     let updateduserdata={...state2}
    //     setuserdata(updateduserdata);
    //     console.log(updateduserdata)
    // }


    let [userdata1,setuserdata1]=useState([]);
    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log("submited"); 
        console.log(typeof(e.target.value))
        let updateduserdata={...state}
        setuserdata1(updateduserdata);
        console.log(updateduserdata)
    }



  return (
    <>
    <Mainsection/>
    <h1>{state2}</h1>
    <form onClick={handlesubmit}>
        <input type='text'name='uname' onChange={getvalue} value={state.uname}></input>
        <input type='text' name='umsg' onChange={getvalue2} value={state2}></input>
        <button>clcikc</button>
    </form>
    </>
  )
}

export default PracticeSession