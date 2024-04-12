import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from './Pages/HomePage'
import PracticeSession from './Pages/PracticeSession'
import { InputTaskDetailsP } from './Pages/InputTaskDetailsP'

export const Myrouter=()=> {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/practice' element={<PracticeSession/>}/>
        <Route path='/reduxinputtask' element={<InputTaskDetailsP/>}/>
    </Routes>
    </BrowserRouter>
  )
}
