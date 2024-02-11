import React from 'react'

const Projects = ({ p1, d1, p2, d2 }) => {
    return (
        <div>
            <h1>Projects</h1>
            <p>{p1}-{d1}</p>
            <p>{p2}-{d2}</p>
        </div>
    )
}

export default Projects