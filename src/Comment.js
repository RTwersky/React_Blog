import React from 'react'

export default function Comment({ comment: { name, body, email } }) {
    return (

        <div class="user container bg-light">
            <h6> {name} | {email}</h6>
            <p>{body}</p>
        </div>

    )
}
