import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import FormPage from "./Pages/FormPage";
import FormDetailPage from "./Pages/FormDetailPage";
export const Myroute=()=>{
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/form" element={<FormPage/>}/>
            <Route path="/formdetails" element={<FormDetailPage/>}/>

          </Routes>
        </BrowserRouter>

    )
}