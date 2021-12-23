import React from 'react'
import './style.css'
import {Link } from 'react-router-dom'

function Nav() {
    return (
        <div>
           <nav>
               <ul>
                   <li>home</li>
                   <Link to='/about'>
                      <li>About</li>
                   </Link>
                   <Link to='/shope'>
                      <li>Shope</li>
                   </Link>
               </ul>
           </nav>
        </div>
    )
}

export default Nav
