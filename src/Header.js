import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div class="container text-center" >
            <h1 class="text-center text-primary" >BLOGS</h1>
            <Link to="/blogs" class="text-secondary text-center">Home</Link>
        </div >
       
    )
}

export default Header
