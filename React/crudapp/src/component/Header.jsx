import React from 'react'
import "./head.css"
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <div className='navlink'>
                <Link to={"/"}><a href="">Home</a></Link>
                <Link to={"/table"}><a href="">Table</a></Link>
                <Link to={"/exp"}><a href="">Experience</a></Link>
                <Link to={"/pro"}><a href="">Product</a></Link>

            </div>
        </div>
    )
}

export default Header
