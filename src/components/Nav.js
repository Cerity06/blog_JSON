import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="nav_bar">
            <h1>Blog secretDojo</h1>
            <div className="links">
                <ul>
                    <Link to='/'>home</Link>
                    <Link to='/create'>create</Link>
                    <Link to='/articles'>articles</Link>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
