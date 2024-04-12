import React from 'react'
import { NavLink } from 'react-router-dom'

function Mainsection() {
  return (
    <>
    <nav>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/reduxinputtask'>ReduxInputTaskDetails</NavLink></li>
            <li><NavLink to='/practice'>PracticeSession</NavLink></li>

        </ul>
    </nav>
    </>
  )
}

export default Mainsection