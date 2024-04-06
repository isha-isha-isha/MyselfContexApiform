import React from 'react'
import { Link } from 'react-router-dom'

function MainComponent() {
  return (
    <nav>
        <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/form">Form</Link> </li>
            <li> <Link to="/formdetails" >formDetails</Link> </li>
        </ul>
    </nav>
  )
}

export default MainComponent