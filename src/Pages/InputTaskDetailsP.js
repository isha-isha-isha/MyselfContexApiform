import React from 'react'
import { useSelector } from 'react-redux'
import Mainsection from '../Mainsection';

export const InputTaskDetailsP=()=> {
  const inputlist=useSelector(state=>state.taskState)
  console.log(inputlist);
 let value= inputlist.tasks && inputlist.tasks.map((e,i)=>{
    return(
      <h1>{e.inputState}</h1>
    )
  })

  return (
    <>
    <Mainsection/>
    {value}
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <ul>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>

          </ul>
        </div>
      </div>
    </div>
    </>   
  )
}

