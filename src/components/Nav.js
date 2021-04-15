import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="nav_bar">
            <div className="logo_nav">
                <h1>Blog secretDojo</h1>
            </div>
            
            <div className="links">
                <ul>
                    <Link to='/'>home</Link>
                    <Link to='/create'>create</Link>
                    <Link to='/articles'>articles</Link>
                    <Link to='/planets'>planets</Link>
                    <Link to='/people'>people</Link>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
