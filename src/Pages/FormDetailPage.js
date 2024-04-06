import React from 'react'
import MainComponent from '../Component/MainComponent'
import { AllinputForm } from '../Database/Allinputform'



function FormDetailPage() {
  console.log("alllinptuform")
  console.log(AllinputForm)
  let value=AllinputForm.map((e,i)=>{
    return(
      <div key={i}>
        <h1>Name:{e.fullname}</h1>
        <h2>Password:{e.password}</h2>
        <h3>email:{e.email}</h3>
        {e.image && e.image.map((img,index)=>(
          <img key={index} src={URL.createObjectURL(img)} alt='no image'/>
        ))}
      </div>
    )
  })
  return (
    <>
    <MainComponent/>
    <h1>i am form detial </h1>
    <br/>
    {value}
    <br/>

    </>
  )
}

export default FormDetailPage