import React from 'react'
import { Link } from 'react-router-dom';

export default function BlogInfo(props) {
    const { blog: { id, name, website, company: { name: companyName, catchPrase, bs } } } = props;


    return (

        <Link to={`/blogs/blog/${id}`} style={{ textDecoration: 'none' }}>
            <div class='container'>
                <h2 class="text-info">{name}</h2>
                <h4 class='text-secondary'>{website}</h4>
                <h5 class='text-dark'>
                    <div>{companyName} |
                        {catchPrase} |
                        {bs}</div>
                </h5>
                <hr />
            </div>

        </Link>

    )
}
