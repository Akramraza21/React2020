import React from 'react'
import {Link, NavLink} from 'react-router-dom'


//NavLink create an active class where as Link does not create That
//NavLink and Link both have same task to stop rerender the dom. 
// it is used insted of anchor and href tag 

  
const Navbar = () => {
    const style = {
            "background-color":"yellow"
    } 
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Akatsuki Poketime's</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;