import React, { useState } from 'react'
import Mainsection from '../Mainsection';
import { addtask } from '../Store/taskSlice';
import {useDispatch,useSelector} from "react-redux";

function HomePage() {
    const [inputState,setInputState]=useState('');
    const dispatch=useDispatch()
    const tasklist=useSelector(state=>state.taskState)
    console.log(tasklist) 
     
    const handleSubmit=(e)=>{
        e.preventDefault();
        const id = Math.floor(Math.random()*1000);
        // console.log(id);
        const data={
          id:id,    // key=id and value is also id 
          inputState:inputState
        }
        // console.log(data);
        dispatch(addtask(data))
        setInputState("")
    }
  return (
    <>
    <Mainsection/>
    <form onSubmit={handleSubmit}>
    <div>
        <label>Text</label>
        <input type='text' name='textbox' onChange={(e)=>setInputState(e.target.value)} value={inputState} className='form-control'></input>
    </div>

    <button className='btn btn-info' >submit</button>
    </form>


{tasklist.tasks?.map((task, index) => (
        <div key={index}>
          <h1>{task.inputState}</h1>
        </div>
      ))}

    </>
  )
}

export default HomePage


















// import React, { useState } from 'react'
// import Mainsection from '../Mainsection';
// import { addtask } from '../Store/taskSlice';
// import {useDispatch,useSelector} from "react-redux";

// function HomePage() {
//     const [inputState,setInputState]=useState('');
//     const dispatch=useDispatch()
//     const tasklist=useSelector(state=>state.taskState)
//     console.log("all task ",tasklist)

//     // const [userData,setUserData]=useState([]);   // this is for this page only 

//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         // setUserData([...userData,inputState]); // this is for this page only 
//         // console.log(userData);               // this is for this page only 
//         // setInputState("");                   // this is for this page only 

//         // so from here we are storing the value into redux store 
//         const id = Math.floor(Math.random()*1000);
//         // console.log(id);
//         const data={
//           id:id,    // key=id and value is also id 
//           inputState:inputState
//         }
//         // console.log(data);
//         dispatch(addtask(data))
//     }

//     // let value=tasklist.map((e)=>{
//     //   return(
//     //     <>
//     //      <h1>something is here </h1>
//     //     </>
//     //   )
//     // });


//   return (
//     <>
//     <Mainsection/>
//     <form onSubmit={handleSubmit}>
//     <div>
//         <label>Text</label>
//         <input type='text' name='textbox' onChange={(e)=>setInputState(e.target.value)} value={inputState} className='form-control'></input>
//     </div>

//     <button className='btn btn-info' >submit</button>
//     </form>

//     {tasklist.map((task, index) => (
//         <div key={index}>
//           <h1>{task.inputState}</h1>
//         </div>
//       ))}



//     </>
//   )
// }

// export default HomePage