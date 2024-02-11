import React from 'react'

const Details = (props) => {
    return (
        <div>
            <h1>Details</h1>
            <p>Name:{props.name}</p>
            <p>Email:{props.email}</p>
            <p>Number:{props.num}</p>
        </div>
    )
}

export default Details