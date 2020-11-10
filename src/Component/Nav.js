import React from 'react'
import {Link} from "react-router-dom"

export default function Nav() {
    return (
        <div>
             <nav>
          <ul style={{display:"flex",listStyle:"none"}}>
            <li style={{padding:"10px"}}>
              <Link to="/">Data</Link>
            </li>
            <li style={{padding:"10px"}}>
              <Link to="/register">register</Link>
            </li>
            <li style={{padding:"10px"}}>
              <Link to="/login">login</Link>
            </li>
            <li style={{padding:"10px"}}>
              <Link to="user">Single user</Link>
            </li>
          </ul>
        </nav>
        </div>
    )
}
