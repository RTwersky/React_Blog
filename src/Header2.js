import React from 'react'
import { Link } from 'react-router-dom';

function Header2(props) {
    const { blog: { name, company: { name: companyName, catchPhrase, bs } } } = props;

    return (
        <div class="container text-center" >
            <h1 class="text-primary text-center">{name}'s Posts</h1>
            <h5 class="text-center text-info">{companyName} |  {catchPhrase}  |  {bs}</h5>
            <Link to="/blogs" class="text-secondary text-center">Home</Link>
        </div >

    )
}

export default Header2
